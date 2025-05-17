import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaArrowUp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import logo from "../images/logo.jpg";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const quickLinks = [
    { name: "Acasă", path: "/" },
    { name: "Servicii", path: "/servicii" },
    { name: "Despre noi", path: "/despre-noi" },
    { name: "Noutăți", path: "/noutati" },
    { name: "Contact", path: "/contact" }
  ];

  const services = [
    { name: "Producție Agricolă", path: "/servicii?category=productie-agricola" },
    { name: "Industria Morăritului", path: "/servicii?category=industria-moraritului" },
    { name: "Panificație", path: "/servicii?category=panificatie" },
    { name: "Comerț și Export", path: "/servicii?category=comert-export" },
    { name: "Analiză și Statistici", path: "/servicii?category=analiza-statistici" },
    { name: "Reprezentare și Lobby", path: "/servicii?category=reprezentare-lobby" }
  ];

  const news = [
    { name: "Evenimente", path: "/noutati?category=evenimente" },
    { name: "Legislație", path: "/noutati?category=legislatie" },
    { name: "Proiecte", path: "/noutati?category=proiecte" },
    { name: "Comunicate de presă", path: "/noutati?category=comunicate" }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="text-primary-500" />,
      title: "Adresa Noastră",
      content: "Bulevardul Libertății nr. 16, București, România"
    },
    {
      icon: <FaPhone className="text-primary-500" />,
      title: "Telefon",
      content: "+40 21 123 4567"
    },
    {
      icon: <FaEnvelope className="text-primary-500" />,
      title: "Email",
      content: "contact@agroromania.ro"
    },
    {
      icon: <FaClock className="text-primary-500" />,
      title: "Program",
      content: "Luni - Vineri: 9:00 - 17:00"
    }
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, url: "#facebook", label: "Facebook" },
    { icon: <FaTwitter />, url: "#twitter", label: "Twitter" },
    { icon: <FaLinkedinIn />, url: "#linkedin", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "#instagram", label: "Instagram" }
  ];

  return (
    <footer className="footer-section bg-gray-900 text-white relative">
      {/* Back to top button */}
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.button 
            onClick={scrollToTop} 
            className="back-to-top bg-primary-600 hover:bg-primary-700 text-white p-4 rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-300 hover:scale-110"
            aria-label="Înapoi la început"
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <FaArrowUp className="text-xl" />
          </motion.button>
        </div>
      </div>

      {/* Location Map */}
      <div className="relative w-full h-72 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-10"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087936!2d26.089731376939553!3d44.42915907107755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4770adb5b7%3A0x58147f39579fe6fa!2zQnVsZXZhcmR1bCBMaWJlcnTEg8ibaWksIEJ1Y3VyZciZdGk!5e0!3m2!1sro!2sro!4v1651146505657!5m2!1sro!2sro"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Locația noastră"
          className="grayscale filter contrast-125"
        ></iframe>
        
        {/* Overlay contact info card */}
        <motion.div 
          className="absolute bottom-6 right-6 bg-gray-900/90 backdrop-blur-sm p-6 rounded-xl shadow-2xl z-20 max-w-md border-l-4 border-primary-500"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-white mb-3">Vino să ne vizitezi</h3>
          <p className="text-gray-300 mb-4">Ne găsești la Bulevardul Libertății nr. 16, București, România</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-full text-sm font-semibold hover:bg-primary-700 transition-colors duration-300"
          >
            Contactează-ne
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
      
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="mb-6 flex items-center">
              <motion.img 
                src={logo} 
                alt="ANIPM Logo" 
                className="h-12 w-12 rounded-full mr-3 border-2 border-primary-400" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">ANIPM</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Asociația Națională a Industriilor de Panificație și Morărit promovează excelența și inovația în sectorul agricol și industria alimentară din România.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, backgroundColor: "#f59e0b" }}
                  className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Link-uri Rapide
              <motion.span 
                className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={link.path} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <svg className="w-3 h-3 mr-2 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Servicii
              <motion.span 
                className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 * index }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={service.path} 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <svg className="w-3 h-3 mr-2 text-primary-500 transform group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-lg font-bold mb-6 relative inline-block">
              Contact
              <motion.span 
                className="absolute bottom-0 left-0 w-1/2 h-1 bg-primary-500"
                initial={{ width: 0 }}
                whileInView={{ width: "50%" }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              ></motion.span>
            </h3>
            <ul className="space-y-4 text-gray-400">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="flex items-start"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-primary-500 transition-colors duration-300">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1 text-gray-300">{info.title}</h4>
                    <p className="text-gray-400 text-sm">{info.content}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
        
        <motion.div 
          className="mt-20 border-t border-gray-800 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 mb-8">
            {['Calitate', 'Inovație', 'Sustenabilitate', 'Colaborare', 'Excelență'].map((value, index) => (
              <motion.div 
                key={index}
                className="mx-4 text-center"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <span className="text-primary-500 font-bold uppercase text-sm tracking-wider">{value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Copyright */}
      <div className="py-6 border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} ANIPM. Toate drepturile rezervate.</p>
            <div className="mt-4 md:mt-0 flex flex-wrap justify-center space-x-0 md:space-x-6 space-y-2 md:space-y-0">
              <Link to="/termeni-conditii" className="hover:text-primary-400 transition-colors duration-300 mx-2 md:mx-0">Termeni și Condiții</Link>
              <Link to="/politica-confidentialitate" className="hover:text-primary-400 transition-colors duration-300 mx-2 md:mx-0">Politica de Confidențialitate</Link>
              <Link to="/cookies" className="hover:text-primary-400 transition-colors duration-300 mx-2 md:mx-0">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
