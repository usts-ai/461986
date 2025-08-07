import React from 'react';
import { motion } from 'framer-motion';
import { FaDumbbell, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Accueil', link: '#' },
    { name: 'Programmes', link: '#programmes' },
    { name: 'Coachs', link: '#coachs' },
    { name: 'Tarifs', link: '#tarifs' },
    { name: 'Témoignages', link: '#temoignages' },
    { name: 'Blog', link: '#blog' },
  ];

  const resources = [
    { name: 'Centre d\'aide', link: '#' },
    { name: 'Communauté', link: '#' },
    { name: 'Webinaires', link: '#' },
    { name: 'FAQ', link: '#' },
    { name: 'Conditions d\'utilisation', link: '#' },
    { name: 'Politique de confidentialité', link: '#' },
  ];

  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook', link: '#' },
    { icon: <FaTwitter />, name: 'Twitter', link: '#' },
    { icon: <FaInstagram />, name: 'Instagram', link: '#' },
    { icon: <FaYoutube />, name: 'YouTube', link: '#' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.div variants={itemVariants} className="mb-6 flex items-center">
              <FaDumbbell className="text-blue-400 text-3xl mr-2" />
              <span className="font-bold text-2xl">Sport<span className="text-blue-400">Coach</span></span>
            </motion.div>
            <motion.p variants={itemVariants} className="text-gray-400 mb-6">
              Une plateforme innovante dédiée à l'accompagnement des sportifs de tous niveaux. Accédez à des programmes personnalisés, un suivi de performance et une communauté motivante.
            </motion.p>
            <motion.div variants={itemVariants} className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  aria-label={social.name}
                  className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-300"
                  whileHover={{ scale: 1.1, backgroundColor: '#2563eb' }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Liens rapides
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href={link.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Ressources
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {resources.map((resource, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <a
                    href={resource.link}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center"
                  >
                    <svg className="w-3 h-3 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {resource.name}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <motion.h3 variants={itemVariants} className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">
              Contact
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-4">
              <motion.li variants={itemVariants} className="flex items-start">
                <FaMapMarkerAlt className="text-blue-400 mt-1 mr-3" />
                <span className="text-gray-400">15 Rue des Sports, 75001 Paris, France</span>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaPhone className="text-blue-400 mr-3" />
                <a href="tel:+33123456789" className="text-gray-400 hover:text-blue-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </motion.li>
              <motion.li variants={itemVariants} className="flex items-center">
                <FaEnvelope className="text-blue-400 mr-3" />
                <a href="mailto:contact@sportcoach.fr" className="text-gray-400 hover:text-blue-400 transition-colors">
                  contact@sportcoach.fr
                </a>
              </motion.li>
            </motion.ul>
            <motion.div variants={itemVariants} className="mt-6">
              <motion.button
                className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors duration-300 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaEnvelope className="mr-2" /> S'abonner à la newsletter
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-gray-500 text-sm text-center md:text-left mb-4 md:mb-0">
            © {new Date().getFullYear()} SportCoach. Tous droits réservés.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Conditions d'utilisation</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Politique de confidentialité</a>
            <span className="text-gray-700">|</span>
            <a href="#" className="text-gray-500 hover:text-blue-400 text-sm transition-colors">Cookies</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
