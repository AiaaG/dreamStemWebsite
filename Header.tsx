import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Articles', path: '/articles' },
    { name: 'STEM Database', path: '/database' },
    { name: 'Contact', path: '/contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary-800 shadow-lg py-2' : 'bg-primary-800/90 py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link 
            to="/" 
            className="text-white font-heading font-bold text-2xl md:text-3xl flex items-center"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              Dream
            </motion.span>
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-secondary-400"
            >
              STEM
            </motion.span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop navigation */}
          <motion.nav 
            className="hidden md:block"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <motion.li key={link.name} variants={itemVariants}>
                  <Link
                    to={link.path}
                    className={`text-white font-medium hover:text-secondary-400 transition-colors px-1 py-2 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-secondary-400 after:transition-all after:duration-300 hover:after:w-full ${
                      location.pathname === link.path ? 'after:w-full' : ''
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Mobile navigation */}
        <motion.div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60' : 'max-h-0'
          }`}
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="pt-4 pb-2 space-y-2">
            {navLinks.map((link) => (
              <motion.li 
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`block py-2 text-white hover:text-secondary-400 transition-colors ${
                    location.pathname === link.path ? 'text-secondary-400 font-semibold' : ''
                  }`}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;