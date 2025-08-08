import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

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
    { name: 'Stratégie', link: '#strategie' },
    { name: 'Contenus', link: '#contenus' },
    { name: 'Réseaux sociaux', link: '#reseaux' },
    { name: 'Témoignages', link: '#temoignages' },
    { name: 'Contact', link: '#contact' },
  ];

  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
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
          <svg className="text-blue-600 mr-2" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l2.39 4.84L20 8l-4 3.9L17 18l-5-2.6L7 18l1-6.1L4 8l5.61-1.16L12 2z" />
          </svg>
          <span className="font-bold text-xl md:text-2xl text-gray-900">Sport<span className="text-blue-600">Consult</span></span>
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
          <motion.a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full font-medium transition-colors flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Nous contacter
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            aria-label="Ouvrir le menu"
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
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
            <motion.a
              href="#contact"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-full font-medium mt-4 flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous contacter
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
