import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero: React.FC = () => {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.2, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-0">
      {/* Background gradient and overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-blue-600/80 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-25 z-0"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <motion.div 
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, delay: 0.4 }
            }}
          >
            Communication <span className="text-yellow-400">percutante</span>, résultats <span className="text-yellow-400">mesurables</span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, delay: 0.6 }
            }}
          >
            Conseil et accompagnement marketing sur 12 mois pour les acteurs du sport: stratégie, contenus, social media et campagnes qui amplifient votre visibilité et fidélisent votre communauté.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              transition: { duration: 0.8, delay: 0.8 }
            }}
          >
            <motion.a 
              href="#strategie"
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-8 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Découvrir la stratégie
            </motion.a>
            <motion.a 
              href="#contact"
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Nous contacter
            </motion.a>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="w-full md:w-1/2 mt-12 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            transition: { 
              duration: 1, 
              delay: 0.8,
              type: 'spring',
              stiffness: 100
            } 
          }}
        >
          <div className="relative">
            <div className="absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 blur-xl opacity-30 animate-pulse"></div>
            <img 
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600" 
              alt="Équipe marketing au travail" 
              className="relative rounded-2xl shadow-2xl w-full h-auto z-10"
            />
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ 
          y: [0, 12, 0], 
          opacity: [0.6, 1, 0.6] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          ease: 'easeInOut' 
        }}
      >
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-1.5 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
