import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  BarElement,
  Title, 
  Tooltip, 
  Legend,
  Filler,
  ArcElement
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import type { ChartOptions } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

const StatsSection: React.FC = () => {
  // Données pour le graphique d'activités
  const activityData = {
    labels: ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'],
    datasets: [
      {
        label: 'Minutes d\'activité',
        data: [45, 60, 35, 75, 40, 90, 65],
        fill: true,
        backgroundColor: 'rgba(37, 99, 235, 0.2)',
        borderColor: 'rgba(37, 99, 235, 1)',
        tension: 0.4,
        pointBackgroundColor: 'rgba(37, 99, 235, 1)',
        pointBorderColor: '#fff',
        pointRadius: 4,
        pointHoverRadius: 6
      }
    ]
  };

  const activityOptions: ChartOptions<'line'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12,
        boxPadding: 6,
        bodyFont: { size: 14 },
        titleFont: { size: 16, weight: 'bold' }
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)'
        },
        border: { display: false },
        ticks: {
          color: '#6B7280'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280'
        }
      }
    }
  };

  // Données pour le graphique de progrès
  const progressData = {
    labels: ['Semaine 1', 'Semaine 2', 'Semaine 3', 'Semaine 4', 'Semaine 5', 'Semaine 6'],
    datasets: [
      {
        label: 'Force (kg)',
        data: [70, 75, 80, 85, 90, 95],
        backgroundColor: 'rgba(37, 99, 235, 0.8)',
        borderRadius: 6
      }
    ]
  };

  const progressOptions: ChartOptions<'bar'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: {
          color: 'rgba(156, 163, 175, 0.1)'
        },
        ticks: {
          color: '#6B7280'
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          color: '#6B7280'
        }
      }
    }
  };

  // Données pour le graphique de répartition des activités
  const distributionData = {
    labels: ['Musculation', 'Cardio', 'Étirements', 'Récupération'],
    datasets: [
      {
        data: [40, 30, 15, 15],
        backgroundColor: [
          'rgba(37, 99, 235, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(96, 165, 250, 0.8)',
          'rgba(191, 219, 254, 0.8)'
        ],
        borderColor: '#ffffff',
        borderWidth: 2
      }
    ]
  };

  const distributionOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
        labels: {
          padding: 16,
          font: {
            size: 12
          },
          color: '#4B5563'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(17, 24, 39, 0.9)',
        titleColor: '#fff',
        bodyColor: '#fff',
        padding: 12
      }
    },
    cutout: '60%'
  };

  const statsItems = [
    { label: 'Minutes d\'activité', value: '410', unit: 'min', trend: '+12%' },
    { label: 'Calories brûlées', value: '2,450', unit: 'kcal', trend: '+8%' },
    { label: 'Séances complétées', value: '16', unit: '', trend: '+4' }
  ];

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Suivez vos <span className="text-blue-600">performances</span> en temps réel
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Notre plateforme vous permet de visualiser et d'analyser votre progression pour optimiser votre entraînement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Stats cards */}
          <motion.div 
            className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            transition={{ delay: 0 }}
          >
            {statsItems.map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-gray-500 font-medium">{item.label}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${item.trend.includes('+') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {item.trend}
                  </span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold text-gray-900 mr-2">{item.value}</span>
                  {item.unit && <span className="text-gray-500">{item.unit}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Activity chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 lg:col-span-2"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Activité hebdomadaire</h3>
            <div className="h-64 md:h-80">
              <Line data={activityData} options={activityOptions} />
            </div>
          </motion.div>

          {/* Distribution chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Répartition des activités</h3>
            <div className="h-64 md:h-80 flex items-center justify-center">
              <Doughnut data={distributionData} options={distributionOptions} />
            </div>
          </motion.div>

          {/* Progress chart */}
          <motion.div 
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 lg:col-span-3"
            variants={fadeInUpVariants}
            initial="hidden"
            whileInView="visible"
            transition={{ delay: 0.4 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">Progression de force</h3>
            <div className="h-64 md:h-72">
              <Bar data={progressData} options={progressOptions} />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center mt-12"
          variants={fadeInUpVariants}
          initial="hidden"
          whileInView="visible"
          transition={{ delay: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <motion.button 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            Accéder au tableau de bord complet
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
