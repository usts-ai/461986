import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  achievement: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Marie Legrand',
      role: 'Athlète amateur',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Depuis que j\'ai commencé à utiliser SportCoach, j\'ai considérablement amélioré mes performances. Le suivi personnalisé et les conseils de mon coach m\'ont permis de progresser rapidement et de manière durable.',
      achievement: 'A perdu 12kg et terminé son premier semi-marathon'
    },
    {
      id: 2,
      name: 'Lucas Mercier',
      role: 'Sportif semi-professionnel',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'L\'application SportCoach a révolutionné ma façon de m\'entraîner. Les analyses de performance et la communauté m\'ont poussé à dépasser mes limites et à atteindre des objectifs que je pensais inaccessibles.',
      achievement: 'A augmenté ses performances de 30% en 6 mois'
    },
    {
      id: 3,
      name: 'Julie Moreau',
      role: 'Passionnée de fitness',
      image: 'https://images.pexels.com/photos/1845534/pexels-photo-1845534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      quote: 'Ce qui fait la différence avec SportCoach, c\'est la qualité du coaching et le suivi personnalisé. J\'ai enfin trouvé une méthode qui fonctionne pour moi et qui me motive à rester constante dans mes efforts.',
      achievement: 'A transformé son corps et gagné en confiance'
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);
  
  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };
  
  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30
      }
    })
  };
  
  const gradientVariants = {
    initial: { backgroundPosition: '0% 50%' },
    animate: {
      backgroundPosition: '100% 50%',
      transition: {
        duration: 15,
        ease: "linear" as const,
        repeat: Infinity,
        repeatType: "reverse" as const
      }
    }
  };
  
  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 z-0"
        variants={gradientVariants}
        initial="initial"
        animate="animate"
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ce que disent nos <span className="text-blue-600">membres</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment SportCoach aide nos utilisateurs à transformer leur vie et à atteindre leurs objectifs sportifs.
          </p>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto px-4 md:px-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="w-full"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-blue-100 flex-shrink-0">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-800">{testimonials[currentIndex].name}</h3>
                        <p className="text-blue-600">{testimonials[currentIndex].role}</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <svg className="w-8 h-8 text-blue-100 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                        <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                      </svg>
                      <p className="text-gray-700 text-lg italic">{testimonials[currentIndex].quote}</p>
                    </div>
                    
                    <div className="bg-blue-50 py-2 px-4 rounded-full inline-block">
                      <span className="text-sm text-blue-700 font-medium">
                        {testimonials[currentIndex].achievement}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          
          <div className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2">
            <motion.button 
              onClick={handlePrev}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
          </div>
          
          <div className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2">
            <motion.button 
              onClick={handleNext}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-800 hover:text-blue-600 transition-colors focus:outline-none"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 mx-2 rounded-full focus:outline-none ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Rejoindre notre communauté
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
