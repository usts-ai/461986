import React, { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface Program {
  id: number;
  title: string;
  description: string;
  duration: string;
  level: string;
  price: string;
  image: string;
  categories: string[];
}

const ProgramsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');
  
  const categories = ['Tous', 'Musculation', 'Cardio', 'Perte de poids', 'Endurance'];
  
  const programs: Program[] = [
    {
      id: 1,
      title: 'Force & Performance',
      description: 'Programme de renforcement musculaire complet pour améliorer vos performances sportives.',
      duration: '12 semaines',
      level: 'Intermédiaire',
      price: '49,99 €',
      image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories: ['Musculation', 'Performance']
    },
    {
      id: 2,
      title: 'Cardio Intensif',
      description: 'Séances de haute intensité pour améliorer votre endurance et stimuler votre métabolisme.',
      duration: '8 semaines',
      level: 'Tous niveaux',
      price: '39,99 €',
      image: 'https://images.pexels.com/photos/3764011/pexels-photo-3764011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories: ['Cardio', 'Perte de poids']
    },
    {
      id: 3,
      title: 'Perte de poids durable',
      description: 'Un programme complet combinant exercices et conseils nutritionnels pour une transformation durable.',
      duration: '16 semaines',
      level: 'Débutant',
      price: '59,99 €',
      image: 'https://images.pexels.com/photos/4498606/pexels-photo-4498606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories: ['Perte de poids']
    },
    {
      id: 4,
      title: 'Endurance Elite',
      description: 'Améliorez votre capacité cardio-respiratoire avec ce programme d\'endurance progressif.',
      duration: '10 semaines',
      level: 'Avancé',
      price: '54,99 €',
      image: 'https://images.pexels.com/photos/2803158/pexels-photo-2803158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      categories: ['Endurance', 'Cardio']
    }
  ];
  
  const filteredPrograms = activeCategory === 'Tous' 
    ? programs 
    : programs.filter(program => program.categories.includes(activeCategory));
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="programmes" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos programmes d'<span className="text-blue-600">entraînement</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos programmes conçus par des experts pour vous aider à atteindre vos objectifs, quel que soit votre niveau.
          </p>
        </motion.div>
        
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`py-2 px-6 rounded-full font-medium text-sm md:text-base transition-colors ${
                activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredPrograms.map((program) => (
            <motion.div
              key={program.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              whileHover={{ y: -5 }}
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {program.level}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{program.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {program.duration}
                  </span>
                  <span className="font-semibold text-blue-600">{program.price}</span>
                </div>
                
                <motion.button 
                  className="w-full py-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir le détail
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.button 
            className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-3 px-8 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Voir tous nos programmes
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsSection;
