import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface Coach {
  id: number;
  name: string;
  specialty: string;
  experience: string;
  image: string;
  description: string;
  rating: number;
  clients: number;
}

const CoachesSection: React.FC = () => {
  const [hoveredCoach, setHoveredCoach] = useState<number | null>(null);

  const coaches: Coach[] = [
    {
      id: 1,
      name: 'Thomas Martin',
      specialty: 'Force & Musculation',
      experience: '8 ans',
      image: 'https://images.pexels.com/photos/4398884/pexels-photo-4398884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Expert en entraînement de force et préparation physique avec une approche scientifique et personnalisée.',
      rating: 4.9,
      clients: 175
    },
    {
      id: 2,
      name: 'Sophie Dubois',
      specialty: 'HIIT & Perte de poids',
      experience: '6 ans',
      image: 'https://images.pexels.com/photos/8401782/pexels-photo-8401782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Spécialiste des entraînements à haute intensité et des programmes de transformation corporelle.',
      rating: 4.8,
      clients: 152
    },
    {
      id: 3,
      name: 'Antoine Leroux',
      specialty: 'Endurance & Running',
      experience: '10 ans',
      image: 'https://images.pexels.com/photos/6456294/pexels-photo-6456294.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Entraîneur d\'élite spécialisé dans la préparation pour les marathons et l\'amélioration des performances en course.',
      rating: 4.9,
      clients: 204
    },
    {
      id: 4,
      name: 'Émilie Bernard',
      specialty: 'Nutrition & Coaching holistique',
      experience: '7 ans',
      image: 'https://images.pexels.com/photos/7991580/pexels-photo-7991580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      description: 'Coach certifiée en nutrition sportive et en approche globale du bien-être et de la performance.',
      rating: 4.7,
      clients: 138
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 12
      }
    }
  };

  const generateStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg key={`full-${i}`} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg key="half" className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path
            d="M12 2v15.27L5.82 21l1.64-7.03L2 9.24l7.19-.61L12 2z"
            className="text-gray-300 fill-current"
          />
        </svg>
      );
    }

    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(
        <svg key={`empty-${i}`} className="w-5 h-5 text-gray-300 fill-current" viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <section id="coachs" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="text-blue-600">coachs experts</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Bénéficiez de l'expertise et de l'accompagnement personnalisé de nos coachs professionnels pour atteindre vos objectifs.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {coaches.map((coach) => (
            <motion.div
              key={coach.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              onMouseEnter={() => setHoveredCoach(coach.id)}
              onMouseLeave={() => setHoveredCoach(null)}
              whileHover={{ y: -5 }}
            >
              <div className="h-64 overflow-hidden relative">
                <motion.img 
                  src={coach.image} 
                  alt={coach.name} 
                  className="w-full h-full object-cover"
                  animate={{ 
                    scale: hoveredCoach === coach.id ? 1.05 : 1
                  }}
                  transition={{ duration: 0.4 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center">
                    <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mr-2">
                      {coach.specialty}
                    </div>
                    <div className="text-white text-xs font-medium">
                      {coach.experience} d'expérience
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{coach.name}</h3>
                  <div className="bg-blue-50 text-blue-700 text-sm font-semibold px-2 py-1 rounded-full">
                    {coach.rating}
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {generateStars(coach.rating)}
                </div>
                
                <p className="text-gray-600 text-sm mb-6">{coach.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{coach.clients} clients accompagnés</span>
                </div>
                
                <motion.button 
                  className="w-full py-3 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-800 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Voir le profil
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
            Voir tous nos coachs
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CoachesSection;
