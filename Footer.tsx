import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={20} />, url: "#", label: "Facebook" },
    { icon: <Instagram size={20} />, url: "#", label: "Instagram" },
    { icon: <Twitter size={20} />, url: "#", label: "Twitter" },
    { icon: <Linkedin size={20} />, url: "#", label: "LinkedIn" },
    { icon: <Youtube size={20} />, url: "#", label: "YouTube" },
  ];

  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.2,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.footer 
      className="bg-primary-800 text-white py-12"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-semibold text-xl mb-4">About DreamSTEM</h3>
            <p className="text-gray-300 leading-relaxed">
              We are dedicated to empowering women in Kyrgyzstan by providing quality 
              STEM education and raising awareness of societal issues.
            </p>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link to="/database" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  STEM Database
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-secondary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <h3 className="font-heading font-semibold text-xl mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  className="bg-primary-700 p-2 rounded-full hover:bg-secondary-500 transition-all duration-300 transform hover:-translate-y-1"
                  whileHover={{ scale: 1.1 }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <div className="mt-4">
              <p className="text-gray-300">Sign up for our newsletter:</p>
              <div className="flex mt-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-primary-700 text-white rounded-l-md focus:outline-none focus:ring-1 focus:ring-secondary-400 w-full"
                />
                <button className="bg-secondary-400 hover:bg-secondary-500 px-4 py-2 rounded-r-md transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="border-t border-primary-700 mt-8 pt-8 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {new Date().getFullYear()} DreamSTEM. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;