<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('logoiainbone.png') }}">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $metaTitle ?? 'Program Studi Hukum Tata Negara - FSHI IAIN Bone' }}</title>
    <meta name="description" content="{{ $metaDescription ?? 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone' }}">
    <link rel="canonical" href="{{ $metaUrl ?? url()->current() }}">

    <meta property="og:type" content="{{ $metaType ?? 'website' }}">
    <meta property="og:site_name" content="Program Studi HES IAIN Bone">
    <meta property="og:locale" content="id_ID">
    <meta property="og:title" content="{{ $metaTitle ?? 'Program Studi Hukum Tata Negara - FSHI IAIN Bone' }}">
    <meta property="og:description" content="{{ $metaDescription ?? 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone' }}">
    <meta property="og:url" content="{{ $metaUrl ?? url()->current() }}">
    <meta property="og:image" content="{{ $metaImage ?? asset('logoiainbone.png') }}">
    <meta property="og:image:secure_url" content="{{ $metaImage ?? asset('logoiainbone.png') }}">
    <meta property="og:image:type" content="{{ $metaImageType ?? 'image/png' }}">
    <meta property="og:image:width" content="{{ $metaImageWidth ?? 512 }}">
    <meta property="og:image:height" content="{{ $metaImageHeight ?? 512 }}">
    <meta property="og:image:alt" content="{{ $metaTitle ?? 'Program Studi Hukum Tata Negara - FSHI IAIN Bone' }}">
    <link rel="image_src" href="{{ $metaImage ?? asset('logoiainbone.png') }}">

    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="{{ $metaTitle ?? 'Program Studi Hukum Tata Negara - FSHI IAIN Bone' }}">
    <meta name="twitter:description" content="{{ $metaDescription ?? 'Program Studi Hukum Tata Negara Fakultas Syariah dan Hukum Islam IAIN Bone' }}">
    <meta name="twitter:image" content="{{ $metaImage ?? asset('logoiainbone.png') }}">
    
    <!-- Fonts -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.jsx'])
</head>
<body>
    <div id="root"></div>
</body>
</html>
