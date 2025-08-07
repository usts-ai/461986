import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUser, FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', link: '#' },
    { name: 'Programmes', link: '#programmes' },
    { name: 'Coachs', link: '#coachs' },
    { name: 'Communauté', link: '#communaute' },
    { name: 'Tarifs', link: '#tarifs' },
  ];

  const headerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring',
        stiffness: 100,
        damping: 15
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 400, damping: 10 }}
        >
          <FaDumbbell className="text-blue-600 text-3xl mr-2" />
          <span className="font-bold text-xl md:text-2xl text-gray-900">Sport<span className="text-blue-600">Coach</span></span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          {navItems.map((item, i) => (
            <motion.a
              key={item.name}
              href={item.link}
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              custom={i}
              variants={menuItemVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
            >
              {item.name}
            </motion.a>
          ))}
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-colors flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser className="mr-2" /> Connexion
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? 
              <FaTimes className="text-2xl" /> : 
              <FaBars className="text-2xl" />
            }
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          className="fixed inset-0 bg-white z-40 pt-20"
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 flex flex-col space-y-6 py-8">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-gray-800 hover:text-blue-600 text-xl font-medium py-2 border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
                custom={i}
                variants={menuItemVariants}
                initial="hidden"
                animate="visible"
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium mt-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser className="mr-2" /> Connexion
            </motion.button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
