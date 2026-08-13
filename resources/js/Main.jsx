import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LecturersPage from './pages/LecturersPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import NewsDetailPage from './pages/NewsDetailPage';
import AnnouncementsPage from './pages/AnnouncementsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AccreditationPage from './pages/AccreditationPage';
import AnnouncementsDetailPage from './pages/AnnouncementsDetailPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="lecturers" element={<LecturersPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="news/:slug" element={<NewsDetailPage />} />
          <Route path="announcements" element={<AnnouncementsPage />} />
          <Route path="announcements/:slug" element={<AnnouncementsDetailPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="accreditation" element={<AccreditationPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;