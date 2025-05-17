import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaChevronRight } from "react-icons/fa";
import ok3 from "../images/ok3.jpg";
import ok5 from "../images/ok5.jpg";
import ok7 from "../images/ok7.jpg";

export const News = ({ isFullPage = false }) => {
  const newsItems = [
    {
      id: 1,
      title: "Perspective de recoltă pentru anul 2025",
      summary: "Estimările pentru anul 2025 arată o creștere semnificativă a producției de cereale, în special la cultura de grâu și porumb.",
      image: ok3,
      date: "12 ianuarie 2025",
      author: "Mihai Ionescu",
      category: "Analiză",
      delay: 0.1
    },
    {
      id: 2,
      title: "Colaborare cu experți europeni pentru modernizarea sectorului",
      summary: "Asociația a încheiat un parteneriat strategic cu experți din Franța și Germania pentru implementarea unor tehnologii avansate în producția de cereale.",
      image: ok5,
      date: "28 decembrie 2024",
      author: "Elena Popescu",
      category: "Parteneriate",
      delay: 0.3
    },
    {
      id: 3,
      title: "Conferința anuală a producătorilor de panificație",
      summary: "În data de 15 februarie va avea loc cea de-a XII-a ediție a conferinței anuale a producătorilor din industria de panificație din România.",
      image: ok7,
      date: "5 ianuarie 2025",
      author: "Adrian Munteanu",
      category: "Evenimente",
      delay: 0.5
    }
  ];

  // For the full page view, we'll add more news items
  const additionalNews = [
    {
      id: 4,
      title: "Noi oportunități de export pentru producătorii români",
      summary: "Deschiderea unor noi piețe de export pentru producătorii români de produse de panificație în țările din Orientul Mijlociu.",
      image: ok3,
      date: "20 ianuarie 2025",
      author: "Daniel Radu",
      category: "Oportunități",
      delay: 0.7
    },
    {
      id: 5,
      title: "Inovații în tehnologia de procesare a cerealelor",
      summary: "Prezentarea celor mai noi tehnologii de procesare a cerealelor și impactul acestora asupra calității produselor finite.",
      image: ok5,
      date: "15 ianuarie 2025",
      author: "Ana Marin",
      category: "Tehnologie",
      delay: 0.9
    },
    {
      id: 6,
      title: "Modificări legislative cu impact asupra industriei",
      summary: "Analiză detaliată a noilor modificări legislative și a impactului acestora asupra producătorilor din industria de panificație.",
      image: ok7,
      date: "3 ianuarie 2025",
      author: "Cristian Stancu",
      category: "Legislație",
      delay: 1.1
    }
  ];

  // Combine arrays for the full page view
  const allNews = isFullPage ? [...newsItems, ...additionalNews] : newsItems;

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="noutati" className="py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {!isFullPage && (
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold mb-4 font-heading text-gray-800">Ultimele Noutăți</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-accent">
              Aflați cele mai recente știri și evenimente din industria agroalimentară
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {allNews.map((item, index) => (
            <motion.div
              key={item.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={cardVariants}
              className="news-card bg-white rounded-xl shadow-card overflow-hidden transition-all duration-500 hover:shadow-card-hover transform hover:-translate-y-2"
            >
              <div className="news-image relative overflow-hidden" style={{ height: "200px" }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white text-xs font-bold uppercase py-1 px-3 rounded-full">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <FaCalendarAlt className="mr-2 text-primary-400" />
                  <span>{item.date}</span>
                  <span className="mx-2">|</span>
                  <FaUser className="mr-2 text-primary-400" />
                  <span>{item.author}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-heading hover:text-primary-600 transition-colors duration-300">
                  <Link to={`/noutati/${item.id}`}>{item.title}</Link>
                </h3>
                
                <p className="text-gray-600 mb-6">{item.summary}</p>
                
                <Link 
                  to={`/noutati/${item.id}`} 
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-300"
                >
                  Citește mai mult
                  <FaChevronRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        {!isFullPage && (
          <div className="text-center mt-12">
            <Link 
              to="/noutati" 
              className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
            >
              Vezi toate noutățile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        )}
        
        {isFullPage && (
          <div className="flex justify-center mt-16">
            <nav className="relative z-0 inline-flex shadow-sm rounded-md">
              {[1, 2, 3, 4, 5].map((page, i) => (
                <button
                  key={i}
                  className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                    i === 0
                      ? 'bg-primary-50 text-primary-600 border-primary-300 z-10'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {page}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </section>
  );
};
