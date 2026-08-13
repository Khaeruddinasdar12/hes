<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Program Studi Hukum Tata Negara - FSH IAIN Bone</title>
    
    <!-- Meta tags -->
    <meta name="description" content="Program Studi Hukum Tata Negara - Fakultas Syariah dan Hukum Islam IAIN Bone">
    <meta name="keywords" content="Hukum Tata Negara, IAIN Bone, FSH">
    <meta name="author" content="FSHI IAIN Bone">
    
    <!-- Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <!-- Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])
    
    <!-- Custom styles -->
    <style>
        /* Modern Color Palette */
        :root {
            --primary: #1e293b;
            --secondary: #4f46e5;
            --accent: #818cf8;
            --light: #e0e7ff;
            --dark: #0f172a;
            --text: #1e293b;
            --text-light: #64748b;
            --bg-light: #f8fafc;
            --gradient-1: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --gradient-2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            --gradient-3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            --gradient-4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Inter', sans-serif;
            color: var(--text);
            background-color: var(--bg-light);
            overflow-x: hidden;
            font-size: 14px;
        }
        
        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
        }
        
        /* Custom Scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
        }
        
        ::-webkit-scrollbar-track {
            background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
            background: var(--accent);
            border-radius: 3px;
        }
        
        /* Navigation - SELALU TERLIHAT */
        .nav-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 1000;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border-bottom: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
        }
        
        .nav-link {
            position: relative;
            font-weight: 500;
            transition: all 0.3s ease;
            font-size: 13px;
        }
        
        .nav-link::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient-1);
            transition: width 0.3s ease;
        }
        
        .nav-link:hover::after {
            width: 100%;
        }
        
        /* Hero Section */
        .hero-section {
            min-height: 70vh;
            display: flex;
            align-items: center;
            position: relative;
            overflow: hidden;
            margin-top: 60px;
        }
        
        .hero-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), 
            url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80');
            background-size: cover;
            background-position: center;
            transform: scale(1.1);
            transition: transform 10s ease;
        }
        
        .hero-section:hover .hero-bg {
            transform: scale(1);
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
        }
        
        .hero-title {
            font-size: clamp(2rem, 6vw, 3.5rem);
            font-weight: 800;
            line-height: 1.1;
            margin-bottom: 1rem;
            background: linear-gradient(to right, #ffffff, #e0e7ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .hero-subtitle {
            font-size: clamp(1rem, 2.5vw, 1.3rem);
            font-weight: 300;
            color: #e0e7ff;
            margin-bottom: 2rem;
            max-width: 500px;
        }
        
        /* Modern Button */
        .btn-modern {
            display: inline-flex;
            align-items: center;
            padding: 0.75rem 1.75rem;
            border-radius: 50px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
            font-size: 13px;
        }
        
        .btn-primary {
            background: var(--gradient-1);
            color: white;
            box-shadow: 0 8px 20px rgba(79, 70, 229, 0.3);
        }
        
        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(79, 70, 229, 0.4);
        }
        
        .btn-secondary {
            background: transparent;
            color: white;
            border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1);
            border-color: rgba(255, 255, 255, 0.5);
        }
        
        /* Section Styles */
        .section {
            padding: 4rem 0;
            position: relative;
        }
        
        .section-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            font-weight: 700;
            text-align: center;
            margin-bottom: 0.5rem;
            position: relative;
            display: inline-block;
        }
        
        .section-subtitle {
            text-align: center;
            color: var(--text-light);
            font-size: 0.95rem;
            max-width: 500px;
            margin: 0 auto 3rem;
        }
        
        /* Unique Section Headers */
        .unique-header {
            text-align: center;
            margin-bottom: 3rem;
            position: relative;
        }
        
        .unique-header::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 80px;
            height: 80px;
            background: var(--gradient-1);
            border-radius: 50%;
            opacity: 0.1;
            z-index: -1;
        }
        
        .unique-header h2 {
            font-size: clamp(1.8rem, 4vw, 2.5rem);
            font-weight: 700;
            margin-bottom: 0.5rem;
            position: relative;
            z-index: 1;
        }
        
        .unique-header p {
            font-size: 1rem;
            color: var(--text-light);
            max-width: 500px;
            margin: 0 auto;
        }
        
        /* Mobile Menu */
        .mobile-menu {
            position: fixed;
            top: 0;
            right: -100%;
            width: 80%;
            max-width: 350px;
            height: 100vh;
            background: white;
            z-index: 1001;
            transition: right 0.3s ease;
            overflow-y: auto;
            box-shadow: -10px 0 30px rgba(0, 0, 0, 0.1);
        }
        
        .mobile-menu.active {
            right: 0;
        }
        
        .mobile-menu-header {
            padding: 1.5rem;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .mobile-menu-content {
            padding: 1.5rem;
        }
        
        .mobile-menu-link {
            display: block;
            padding: 0.75rem 0;
            font-size: 1rem;
            font-weight: 500;
            color: var(--text);
            text-decoration: none;
            transition: color 0.3s ease;
        }
        
        .mobile-menu-link:hover {
            color: var(--secondary);
        }
        
        /* Overlay */
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .overlay.active {
            opacity: 1;
            visibility: visible;
        }
        
        /* Animations */
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .fade-in-up {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        /* Split Section */
        .split-section {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 3rem;
            align-items: center;
        }
        
        @media (max-width: 768px) {
            .split-section {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
        }
        
        /* Feature Box */
        .feature-box {
            background: white;
            border-radius: 16px;
            padding: 2rem 1.5rem;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(0, 0, 0, 0.05);
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .feature-box:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 35px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            margin: 0 auto 1rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.5rem;
            color: white;
            position: relative;
            z-index: 1;
        }
        
        .feature-icon::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background: var(--gradient-1);
            z-index: -1;
        }
        
        /* Card Styles */
        .card-modern {
            background: white;
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            position: relative;
        }
        
        .card-modern:hover {
            transform: translateY(-8px);
            box-shadow: 0 16px 50px rgba(0, 0, 0, 0.12);
        }
        
        .card-image {
            position: relative;
            overflow: hidden;
            height: 200px;
        }
        
        .card-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        
        .card-modern:hover .card-image img {
            transform: scale(1.1);
        }
        
        .card-content {
            padding: 1.5rem;
        }
        
        /* Gallery Styles */
        .gallery-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 12px;
            height: 250px;
            cursor: pointer;
        }
        
        .gallery-item img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease;
        }
        
        .gallery-item:hover img {
            transform: scale(1.1);
        }
        
        .gallery-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.7) 100%);
            display: flex;
            align-items: flex-end;
            padding: 1rem;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        
        .gallery-item:hover .gallery-overlay {
            opacity: 1;
        }
        
        /* Announcement Styles */
        .announcement-item {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: flex-start;
            transition: all 0.3s ease;
            border-left: 4px solid transparent;
        }
        
        .announcement-item:hover {
            transform: translateX(8px);
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
        }
        
        .announcement-icon {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
            flex-shrink: 0;
            font-size: 1rem;
            color: white;
        }
        
        /* Footer */
        .footer {
            background: var(--dark);
            color: white;
            padding: 3rem 0 1.5rem;
            position: relative;
            overflow: hidden;
        }
        
        .footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: url('data:image/svg+xml,<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="100" fill="%231e293b"/><circle cx="50" cy="50" r="40" fill="%23334155" opacity="0.1"/></svg>');
            opacity: 0.05;
        }
        
        .footer-content {
            position: relative;
            z-index: 1;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .hero-section {
                margin-top: 70px;
            }
            
            .hero-title {
                font-size: 2rem;
            }
            
            .section {
                padding: 3rem 0;
            }
        }
    </style>
</head>
<body>
    <!-- Root container for React -->
    <div id="root"></div>
</body>
</html>