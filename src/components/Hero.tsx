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
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-purple-700/90 z-0"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2827400/pexels-photo-2827400.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-20 z-0"></div>
      
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
            Révélez votre <span className="text-yellow-400">potentiel sportif</span> avec nos coachs experts
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
            Une plateforme interactive qui vous accompagne dans l'atteinte de vos objectifs sportifs grâce à un coaching personnalisé et un suivi de performance sur mesure.
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
            <motion.button 
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-3 px-8 rounded-full font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Commencer maintenant
            </motion.button>
            <motion.button 
              className="bg-transparent border-2 border-white text-white py-3 px-8 rounded-full font-bold text-lg hover:bg-white/10"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              Découvrir les programmes
            </motion.button>
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
            <div className="absolute -inset-4 md:-inset-8 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur-xl opacity-30 animate-pulse"></div>
            <img 
              src="https://images.pexels.com/photos/6456144/pexels-photo-6456144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Athlète en entraînement" 
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
