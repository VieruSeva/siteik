import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from 'react-router-dom';
import { News } from '../components/News';
import { PageHero } from '../components/PageHero';
import { FaArrowLeft, FaCalendarAlt, FaSearch } from 'react-icons/fa';
import main3 from "../images/main3.jpg";

const NewsPage = () => {
  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, []);

  const pageInfo = {
    title: "Noutăți și Evenimente",
    description: "Ultimele știri și evenimente din industria agroalimentară din România",
    breadcrumbs: [
      { name: "Acasă", path: "/" },
      { name: "Noutăți", path: "/noutati" }
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="news-page"
    >
      <PageHero 
        title={pageInfo.title} 
        description={pageInfo.description}
        breadcrumbs={pageInfo.breadcrumbs}
        bgImage={main3}
      />
      
      {/* Search Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Caută articole..." 
                className="w-full py-4 px-6 pr-12 rounded-full border border-gray-300 focus:border-primary-500 focus:ring focus:ring-primary-200 focus:ring-opacity-50 transition-all duration-300 shadow-sm"
              />
              <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors duration-300">
                <FaSearch className="text-lg" />
              </button>
            </div>
            
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {['Toate', 'Evenimente', 'Noutăți', 'Proiecte', 'Legislație'].map((tag, index) => (
                <button 
                  key={index} 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                    index === 0 
                      ? 'bg-primary-500 text-white' 
                      : 'bg-white text-gray-700 hover:bg-primary-100 border border-gray-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <News isFullPage={true} />
      
      {/* Archive Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center font-heading">Arhiva Articolelor</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto mb-12"></div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Ianuarie 2025', 'Decembrie 2024', 'Noiembrie 2024', 'Octombrie 2024', 'Septembrie 2024', 'August 2024'].map((month, index) => (
                <motion.a
                  key={index}
                  href="#"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors duration-300 group"
                >
                  <FaCalendarAlt className="mr-3 text-primary-500 group-hover:text-primary-600" />
                  <span className="text-gray-700 group-hover:text-primary-600 transition-colors duration-300">{month}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <div className="my-16 text-center">
        <Link 
          to="/" 
          className="inline-flex items-center px-6 py-3 bg-primary-50 text-primary-600 rounded-full font-semibold hover:bg-primary-100 transition-colors duration-300"
        >
          <FaArrowLeft className="mr-2" />
          Înapoi la pagina principală
        </Link>
      </div>
    </motion.div>
  );
};

export default NewsPage;
