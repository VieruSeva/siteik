import React, { useRef, useEffect } from 'react';
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Link } from 'react-router-dom';
import "animate.css";

// Particle Animation Component for Hero Section
const ParticleAnimation = () => {
  const particlesRef = useRef(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const container = particlesRef.current;
      container.innerHTML = '';
      
      const particleCount = window.innerWidth < 768 ? 50 : 100;
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('hero-particle');
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 1;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.1;
        
        // Set styles
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.opacity = opacity;
        
        // Append to container
        container.appendChild(particle);
        
        // Animate using GSAP
        gsap.to(particle, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 5
        });
      }
    };
    
    createParticles();
    
    // Recreate on resize
    window.addEventListener('resize', createParticles);
    
    return () => {
      window.removeEventListener('resize', createParticles);
    };
  }, []);
  
  return <div ref={particlesRef} className="absolute inset-0 z-0"></div>;
};

export const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video loops and autoplays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Autoplay not allowed:", error);
        // Add a play button or other fallback if autoplay is not allowed
      });
    }
  }, []);

  return (
    <section id="acasă" className="hero-section">
      {/* Video Background */}
      <div className="video-background">
        <video 
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="video-element"
        >
          <source src={require('../images/Wheat.mp4')} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>

      {/* Particle animation */}
      <ParticleAnimation />
      
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-heading">
            <span className="animate__animated animate__fadeInDown inline-block bg-gradient-to-r from-primary-400 via-primary-600 to-secondary-600 bg-clip-text text-transparent">ANIPM</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto animate__animated animate__fadeIn animate__delay-2s font-accent">
            Promovăm excelența și inovația în sectorul agricol și industria alimentară din România
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          <Link 
            to="/servicii" 
            className="btn-primary animate__animated animate__pulse animate__infinite animate__slower"
          >
            Serviciile Noastre
          </Link>
          <Link
            to="/contact" 
            className="btn-secondary animate__animated animate__fadeIn animate__delay-3s"
          >
            Contactează-ne
          </Link>
        </motion.div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center animate__animated animate__fadeInUp animate__delay-3s">
        <a href="#servicii" className="text-white scroll-down">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};
