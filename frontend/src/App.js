import React, { useEffect, Suspense, lazy, useState, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "animate.css";
import "./App.css";

// Import components
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

// Lazy load pages for better performance
const HomePage = lazy(() => import("./pages/HomePage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const MembersPage = lazy(() => import("./pages/MembersPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

// Environment variables
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-primary-500"></div>
  </div>
);

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// AnimatePresence wrapper for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/servicii" element={<ServicesPage />} />
        <Route path="/despre-noi" element={<AboutPage />} />
        <Route path="/noutati" element={<NewsPage />} />
        <Route path="/membri" element={<MembersPage />} />
        <Route path="/resurse" element={<ResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  // Custom cursor state
  const cursorRef = useRef(null);
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library with enhanced settings
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out',
      offset: 100,
      delay: 100
    });
    
    // Test API connectivity
    const helloWorldApi = async () => {
      try {
        const response = await axios.get(`${API}/`);
        console.log(response.data.message);
      } catch (e) {
        console.error(e, `errored out requesting ${API}/ api`);
      }
    };
    
    helloWorldApi();

    // Create custom cursor
    const createCustomCursor = () => {
      // Check if we're on a mobile device (where we don't want custom cursor)
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (isMobile) return;

      // Create cursor element
      const cursor = document.createElement('div');
      cursor.classList.add('custom-cursor');
      document.body.appendChild(cursor);
      cursorRef.current = cursor;
      setIsCursorVisible(true);

      // Update cursor position on mousemove
      const updateCursorPosition = (e) => {
        if (cursor) {
          cursor.style.left = `${e.clientX}px`;
          cursor.style.top = `${e.clientY}px`;
        }
      };

      // Change cursor when hovering over clickable elements
      const handleElementHover = (e) => {
        const isClickable = 
          e.target.tagName.toLowerCase() === 'a' || 
          e.target.tagName.toLowerCase() === 'button' ||
          e.target.closest('a') || 
          e.target.closest('button') ||
          e.target.classList.contains('cursor-pointer') ||
          e.target.closest('.cursor-pointer');

        if (cursor) {
          if (isClickable) {
            cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            cursor.style.backgroundColor = 'rgba(245, 158, 11, 0.2)';
            cursor.style.borderWidth = '1px';
          } else {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            cursor.style.backgroundColor = 'transparent';
            cursor.style.borderWidth = '2px';
          }
        }
      };

      // Hide cursor when leaving window
      const handleMouseLeave = () => {
        if (cursor) {
          cursor.style.opacity = '0';
        }
      };

      // Show cursor when entering window
      const handleMouseEnter = () => {
        if (cursor) {
          cursor.style.opacity = '1';
        }
      };

      // Add event listeners
      document.addEventListener('mousemove', updateCursorPosition);
      document.addEventListener('mouseover', handleElementHover);
      document.addEventListener('mouseleave', handleMouseLeave);
      document.addEventListener('mouseenter', handleMouseEnter);

      // Clean up event listeners on component unmount
      return () => {
        document.removeEventListener('mousemove', updateCursorPosition);
        document.removeEventListener('mouseover', handleElementHover);
        document.removeEventListener('mouseleave', handleMouseLeave);
        document.removeEventListener('mouseenter', handleMouseEnter);
        
        if (cursor) {
          document.body.removeChild(cursor);
          cursorRef.current = null;
          setIsCursorVisible(false);
        }
      };
    };

    // Initialize custom cursor
    const cleanupCursor = createCustomCursor();

    // Clean up on unmount
    return () => {
      if (cleanupCursor) {
        cleanupCursor();
      }
    };
  }, []);

  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <ScrollToTop />
          <Suspense fallback={<LoadingSpinner />}>
            <AnimatedRoutes />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
