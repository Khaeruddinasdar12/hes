<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\News;
use Illuminate\Http\Response;
use Illuminate\Support\Str;
use Illuminate\View\View;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

class SpaController extends Controller
{
    public function index(): View
    {
        return view('app', $this->defaultMeta());
    }

    public function news(string $slug): View
    {
        $news = News::where('slug', $slug)->first();

        if (! $news) {
            return view('app', $this->defaultMeta());
        }

        $description = Str::limit(
            trim(preg_replace('/\s+/', ' ', strip_tags($news->content ?? ''))),
            160
        );

        $image = $this->resolveNewsImage($news);

        return view('app', [
            'metaTitle' => $news->title,
            'metaDescription' => $description !== ''
                ? $description
                : $this->defaultMeta()['metaDescription'],
            'metaImage' => $image['url'],
            'metaImageType' => $image['type'],
            'metaImageWidth' => $image['width'],
            'metaImageHeight' => $image['height'],
            'metaUrl' => url('/news/'.$news->slug),
            'metaType' => 'article',
        ]);
    }

    public function ogImage(string $slug): BinaryFileResponse|Response
    {
        $news = News::where('slug', $slug)->firstOrFail();
        abort_unless(filled($news->image), 404);

        $source = storage_path('app/public/'.ltrim($news->image, '/'));
        abort_unless(is_file($source), 404);

        $cache = storage_path('app/public/news/og/'.$news->id.'-'.md5($news->image).'.jpg');

        if (! is_file($cache) || filemtime($cache) < filemtime($source)) {
            if (! $this->writeOgJpeg($source, $cache)) {
                return response()->file($source);
            }
        }

        return response()->file($cache, [
            'Content-Type' => 'image/jpeg',
            'Cache-Control' => 'public, max-age=86400',
        ]);
    }

    /**
     * @return array{metaTitle: string, metaDescription: string, metaImage: string, metaImageType: string, metaImageWidth: int, metaImageHeight: int, metaUrl: string, metaType: string}
     */
    private function defaultMeta(): array
    {
        return [
            'metaTitle' => 'Program Studi Hukum Tata Negara - FSHI IAIN Bone',
            'metaDescription' => 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone',
            'metaImage' => url('logoiainbone.png'),
            'metaImageType' => 'image/png',
            'metaImageWidth' => 512,
            'metaImageHeight' => 512,
            'metaUrl' => url()->current(),
            'metaType' => 'website',
        ];
    }

    /**
     * @return array{url: string, type: string, width: int, height: int}
     */
    private function resolveNewsImage(News $news): array
    {
        if (filled($news->image) && is_file(storage_path('app/public/'.ltrim($news->image, '/')))) {
            return [
                'url' => url('/news/'.$news->slug.'/og-image.jpg'),
                'type' => 'image/jpeg',
                'width' => 1200,
                'height' => 630,
            ];
        }

        if (filled($news->image)) {
            return [
                'url' => url('storage/'.ltrim($news->image, '/')),
                'type' => $this->mimeFromPath($news->image),
                'width' => 1200,
                'height' => 630,
            ];
        }

        if ($news->content && preg_match('/<img[^>]+src=["\']([^"\']+)["\']/i', $news->content, $matches)) {
            $src = html_entity_decode($matches[1], ENT_QUOTES);
            $url = str_starts_with($src, 'http://') || str_starts_with($src, 'https://')
                ? $src
                : url(ltrim($src, '/'));

            return [
                'url' => $url,
                'type' => $this->mimeFromPath($src),
                'width' => 1200,
                'height' => 630,
            ];
        }

        $defaults = $this->defaultMeta();

        return [
            'url' => $defaults['metaImage'],
            'type' => $defaults['metaImageType'],
            'width' => $defaults['metaImageWidth'],
            'height' => $defaults['metaImageHeight'],
        ];
    }

    private function mimeFromPath(string $path): string
    {
        return match (strtolower(pathinfo($path, PATHINFO_EXTENSION))) {
            'png' => 'image/png',
            'gif' => 'image/gif',
            'webp' => 'image/webp',
            default => 'image/jpeg',
        };
    }

    private function writeOgJpeg(string $source, string $destination, int $width = 1200, int $height = 630): bool
    {
        if (! extension_loaded('gd')) {
            return false;
        }

        $info = @getimagesize($source);
        if (! $info) {
            return false;
        }

        [$srcW, $srcH] = $info;
        $src = match ($info['mime'] ?? '') {
            'image/jpeg' => @imagecreatefromjpeg($source),
            'image/png' => @imagecreatefrompng($source),
            'image/gif' => @imagecreatefromgif($source),
            'image/webp' => function_exists('imagecreatefromwebp') ? @imagecreatefromwebp($source) : false,
            default => false,
        };

        if (! $src) {
            return false;
        }

        $dst = imagecreatetruecolor($width, $height);
        $background = imagecolorallocate($dst, 240, 253, 250);
        imagefilledrectangle($dst, 0, 0, $width, $height, $background);

        $srcRatio = $srcW / max($srcH, 1);
        $dstRatio = $width / $height;

        if ($srcRatio > $dstRatio) {
            $cropH = $srcH;
            $cropW = (int) round($srcH * $dstRatio);
            $sx = (int) round(($srcW - $cropW) / 2);
            $sy = 0;
        } else {
            $cropW = $srcW;
            $cropH = (int) round($srcW / $dstRatio);
            $sx = 0;
            $sy = (int) round(($srcH - $cropH) / 2);
        }

        imagecopyresampled($dst, $src, 0, 0, $sx, $sy, $width, $height, max($cropW, 1), max($cropH, 1));

        $directory = dirname($destination);
        if (! is_dir($directory) && ! mkdir($directory, 0755, true) && ! is_dir($directory)) {
            imagedestroy($src);
            imagedestroy($dst);

            return false;
        }

        $written = imagejpeg($dst, $destination, 82);
        imagedestroy($src);
        imagedestroy($dst);

        return $written;
    }
}
