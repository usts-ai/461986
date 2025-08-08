import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { FaDumbbell, FaChartLine, FaUsers, FaVideo } from 'react-icons/fa';

const Features: React.FC = () => {
  const features = [
    {
      icon: <FaDumbbell className="text-4xl text-blue-500 mb-4" />,
      title: 'Coaching Personnalisé',
      description: `Des programmes d'entraînement sur mesure adaptés à vos objectifs et votre niveau.`
    },
    {
      icon: <FaChartLine className="text-4xl text-blue-500 mb-4" />,
      title: 'Suivi des Performances',
      description: `Analysez vos performances et suivez votre progression en temps réel grâce à notre tableau de bord interactif.`
    },
    {
      icon: <FaUsers className="text-4xl text-blue-500 mb-4" />,
      title: 'Communauté Active',
      description: `Échangez avec d'autres sportifs, partagez vos expériences et motivez-vous mutuellement.`
    },
    {
      icon: <FaVideo className="text-4xl text-blue-500 mb-4" />,
      title: 'Ressources Vidéo',
      description: `Accédez à une bibliothèque de tutoriels vidéo et de séances d'entraînement guidées par nos experts.`
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
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
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Une plateforme complète pour votre <span className="text-blue-600">croissance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez comment SportConsult propulse votre communication avec des contenus pertinents, une stratégie claire et des activations impactantes.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full flex flex-col items-center text-center group"
              whileHover={{ y: -5 }}
            >
              <div className="rounded-full bg-blue-50 p-4 mb-4 group-hover:bg-blue-100 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
              <p className="text-gray-600 flex-grow">{feature.description}</p>
              <motion.button 
                className="mt-6 text-blue-600 font-medium flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                En savoir plus
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
