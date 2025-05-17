import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes, FaChevronDown, FaSearch, FaPhone, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import logo from "../images/logo.jpg";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  
  // Define the menu variants for animation
  const menuVariants = {
    closed: { opacity: 0, y: -20 },
    open: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const menuItemVariants = {
    closed: { opacity: 0, y: -20 },
    open: { opacity: 1, y: 0 }
  };

  const searchVariants = {
    closed: { width: 0, opacity: 0 },
    open: { width: "250px", opacity: 1 }
  };

  // Listen for scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Clear active submenu when location changes
  useEffect(() => {
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  }, [location]);

  // Handle search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Define navigation menu with expanded categories
  const navItems = [
    { 
      title: "Acasă", 
      path: "/",
      submenu: [] 
    },
    { 
      title: "Servicii", 
      path: "/servicii",
      submenu: [
        { name: "Producție Agricolă", path: "/servicii?category=productie-agricola" },
        { name: "Industria Morăritului", path: "/servicii?category=industria-moraritului" },
        { name: "Panificație", path: "/servicii?category=panificatie" },
        { name: "Comerț", path: "/servicii?category=comert" },
        { name: "Analiză", path: "/servicii?category=analiza" },
        { name: "Consultanță", path: "/servicii?category=consultanta" },
        { name: "Cercetare", path: "/servicii?category=cercetare" },
        { name: "Formare Profesională", path: "/servicii?category=formare-profesionala" }
      ]
    },
    { 
      title: "Despre noi", 
      path: "/despre-noi",
      submenu: [
        { name: "Misiune și Viziune", path: "/despre-noi?section=misiune-viziune" },
        { name: "Echipa", path: "/despre-noi?section=echipa" },
        { name: "Istoricul Asociației", path: "/despre-noi?section=istoric" },
        { name: "Valori", path: "/despre-noi?section=valori" },
        { name: "Parteneri", path: "/despre-noi?section=parteneri" },
        { name: "Certificări", path: "/despre-noi?section=certificari" }
      ]
    },
    { 
      title: "Noutăți", 
      path: "/noutati",
      submenu: [
        { name: "Evenimente", path: "/noutati?category=evenimente" },
        { name: "Legislație", path: "/noutati?category=legislatie" },
        { name: "Proiecte", path: "/noutati?category=proiecte" },
        { name: "Comunicate de presă", path: "/noutati?category=comunicate" },
        { name: "Blog", path: "/noutati?category=blog" },
        { name: "Oportunități", path: "/noutati?category=oportunitati" }
      ]
    },
    { 
      title: "Membri", 
      path: "/membri",
      submenu: [
        { name: "Beneficii", path: "/membri?section=beneficii" },
        { name: "Înscriere", path: "/membri?section=inscriere" },
        { name: "Membri Actuali", path: "/membri?section=actuali" },
        { name: "Testimoniale", path: "/membri?section=testimoniale" }
      ]
    },
    { 
      title: "Resurse", 
      path: "/resurse",
      submenu: [
        { name: "Publicații", path: "/resurse?section=publicatii" },
        { name: "Ghiduri", path: "/resurse?section=ghiduri" },
        { name: "Statistici", path: "/resurse?section=statistici" },
        { name: "Reglementări", path: "/resurse?section=reglementari" }
      ]
    },
    { 
      title: "Contact", 
      path: "/contact",
      submenu: [] 
    }
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isActiveSubmenu = (mainPath) => {
    return location.pathname.startsWith(mainPath);
  };

  // Function to navigate directly to the submenu item
  const handleSubmenuClick = (e, path) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(path);
    setActiveSubmenu(null);
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`header-main sticky top-0 z-50 transition-all duration-500 ${isScrolled ? 'shadow-lg py-2 bg-white/95 backdrop-blur-md' : 'py-0 bg-white'}`}>
      {/* Top bar with contact info */}
      <motion.div 
        className="bg-gray-900 text-white py-2"
        initial={{ height: "auto", opacity: 1 }}
        animate={{ 
          height: isScrolled ? 0 : "auto", 
          opacity: isScrolled ? 0 : 1,
          marginBottom: isScrolled ? "-8px" : 0  // Prevent gap during animation
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4 text-sm">
              <a href="tel:+40211234567" className="flex items-center hover:text-primary-400 transition-colors duration-300">
                <FaPhone className="mr-2 text-primary-500" />
                <span className="hidden sm:inline">+40 21 123 4567</span>
              </a>
              <a href="mailto:contact@agroromania.ro" className="flex items-center hover:text-primary-400 transition-colors duration-300">
                <FaEnvelope className="mr-2 text-primary-500" />
                <span className="hidden sm:inline">contact@agroromania.ro</span>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <a href="#facebook" className="text-gray-400 hover:text-primary-400 transition-colors duration-300"><FaFacebookF /></a>
              <a href="#twitter" className="text-gray-400 hover:text-primary-400 transition-colors duration-300"><FaTwitter /></a>
              <a href="#linkedin" className="text-gray-400 hover:text-primary-400 transition-colors duration-300"><FaLinkedinIn /></a>
              <a href="#instagram" className="text-gray-400 hover:text-primary-400 transition-colors duration-300"><FaInstagram /></a>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="header-container">
        {/* Main Header with logo and navigation */}
        <div className="header-top">
          <motion.div 
            className="logo-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Link to="/" className="flex items-center">
              <motion.img 
                src={logo} 
                alt="ANIPM Logo" 
                className="logo-img" 
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div className="organization-title">
                <p className="org-name">Asociația Națională a Industriilor de Panificație și Morărit</p>
                <h1 className="org-acronym">ANIPM</h1>
              </div>
            </Link>
          </motion.div>
          
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <motion.div 
              className="relative hidden md:flex items-center"
              animate={searchOpen ? "open" : "closed"}
            >
              <motion.form 
                onSubmit={handleSearchSubmit}
                variants={searchVariants}
                className="relative"
              >
                <input
                  type="text"
                  placeholder="Caută..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400 transition-all duration-300 ${searchOpen ? 'opacity-100 w-full' : 'opacity-0 w-0'}`}
                />
                <button 
                  type="submit" 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-600 transition-colors duration-300"
                  disabled={!searchOpen}
                >
                  <FaSearch />
                </button>
              </motion.form>
              <button 
                onClick={() => setSearchOpen(!searchOpen)}
                className={`p-2 rounded-full ${searchOpen ? 'bg-gray-100 text-primary-600' : 'text-gray-600 hover:text-primary-600'} transition-colors duration-300`}
                aria-label="Toggle search"
              >
                {searchOpen ? <FaTimes /> : <FaSearch />}
              </button>
            </motion.div>

            {/* Member button with enhanced animation */}
            <motion.button 
              className="member-btn hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3, 
                ease: [0.175, 0.885, 0.32, 1.275] 
              }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(245, 158, 11, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/membri?section=inscriere')}
            >
              Fii Membru
            </motion.button>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 p-2 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isMenuOpen ? 
                  <FaTimes className="text-2xl" /> : 
                  <FaBars className="text-2xl" />
                }
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav-container hidden md:block">
          <ul className="nav-menu">
            {navItems.map((navItem, index) => (
              <motion.li 
                key={index} 
                className={`nav-item ${isActive(navItem.path) || isActiveSubmenu(navItem.path) ? 'active' : ''}`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index + 0.4 }}
                onHoverStart={() => setActiveSubmenu(index)}
                onHoverEnd={() => setActiveSubmenu(null)}
              >
                <Link 
                  to={navItem.path} 
                  className={`nav-link flex items-center ${isActive(navItem.path) || isActiveSubmenu(navItem.path) ? 'text-primary-600' : ''}`}
                >
                  {navItem.title}
                  {navItem.submenu.length > 0 && (
                    <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  )}
                </Link>
                {navItem.submenu.length > 0 && (
                  <motion.div 
                    className="dropdown"
                    initial={{ opacity: 0, y: 20, height: 0 }}
                    animate={{ 
                      opacity: activeSubmenu === index ? 1 : 0,
                      y: activeSubmenu === index ? 0 : 20,
                      height: activeSubmenu === index ? 'auto' : 0,
                      pointerEvents: activeSubmenu === index ? 'auto' : 'none',
                      visibility: activeSubmenu === index ? 'visible' : 'hidden'
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="py-2 grid grid-cols-1 gap-1">
                      {navItem.submenu.map((item, i) => (
                        <a 
                          key={i} 
                          href={item.path}
                          className="dropdown-item"
                          onClick={(e) => handleSubmenuClick(e, item.path)}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="mobile-menu fixed inset-0 z-50 bg-white md:hidden"
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center">
                    <img src={logo} alt="ANIPM Logo" className="h-10 w-10 rounded-full mr-3" />
                    <span className="text-xl font-bold text-primary-600">ANIPM</span>
                  </div>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-gray-700 p-2"
                    aria-label="Close menu"
                  >
                    <FaTimes className="text-2xl" />
                  </button>
                </div>
                
                {/* Mobile Search */}
                <div className="mb-6">
                  <form onSubmit={handleSearchSubmit} className="relative">
                    <input
                      type="text"
                      placeholder="Caută..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-400"
                    />
                    <button 
                      type="submit" 
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary-600 transition-colors duration-300"
                      aria-label="Search"
                    >
                      <FaSearch />
                    </button>
                  </form>
                </div>
                
                <motion.ul 
                  className="flex-1 space-y-1 overflow-y-auto"
                  variants={menuVariants}
                  initial="closed"
                  animate="open"
                >
                  {navItems.map((navItem, index) => (
                    <motion.li 
                      key={index}
                      variants={menuItemVariants}
                      className="border-b border-gray-100 pb-2"
                    >
                      <div className="flex justify-between items-center">
                        <Link 
                          to={navItem.path} 
                          className={`block text-lg py-2 px-4 rounded-lg ${isActive(navItem.path) ? 'bg-primary-50 text-primary-600 font-medium' : 'text-gray-700'}`}
                          onClick={() => {
                            if (navItem.submenu.length === 0) {
                              setIsMenuOpen(false);
                            }
                          }}
                        >
                          {navItem.title}
                        </Link>
                        
                        {navItem.submenu.length > 0 && (
                          <button
                            onClick={() => setActiveSubmenu(activeSubmenu === index ? null : index)}
                            className="p-2 text-gray-500"
                            aria-label="Toggle submenu"
                          >
                            <FaChevronDown className={`transition-transform duration-300 ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                          </button>
                        )}
                      </div>
                      
                      {navItem.submenu.length > 0 && (
                        <AnimatePresence>
                          {activeSubmenu === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-6 mt-2 space-y-2 overflow-hidden"
                            >
                              {navItem.submenu.map((item, i) => (
                                <a 
                                  key={i} 
                                  href={item.path}
                                  className="block text-gray-600 py-2 px-4 rounded-lg text-sm hover:bg-gray-50 hover:text-primary-600 transition-colors duration-200"
                                  onClick={(e) => handleSubmenuClick(e, item.path)}
                                >
                                  • {item.name}
                                </a>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>

                {/* Mobile Member Button */}
                <motion.button 
                  variants={menuItemVariants}
                  className="w-full py-3 mt-6 bg-primary-500 text-white rounded-lg font-semibold hover:bg-primary-600 transition-colors duration-300"
                  onClick={() => {
                    navigate('/membri?section=inscriere');
                    setIsMenuOpen(false);
                  }}
                >
                  Fii Membru
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};
