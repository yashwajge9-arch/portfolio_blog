import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { OfflineIndicator } from './components/OfflineIndicator';
import { HomePage } from './pages/HomePage';
import { ShortsPage } from './pages/ShortsPage';
import { LongFormPage } from './pages/LongFormPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#0a0a0f] text-slate-100 antialiased selection:bg-amber-500 selection:text-black">
        {/* Sticky App Header */}
        <Header />

        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shorts" element={<ShortsPage />} />
            <Route path="/long-form" element={<LongFormPage />} />
            <Route path="/blog" element={<BlogListingPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile PWA Bottom App Navigation */}
        <BottomNav />

        {/* PWA Offline Connectivity Alert */}
        <OfflineIndicator />
      </div>
    </BrowserRouter>
  );
}
