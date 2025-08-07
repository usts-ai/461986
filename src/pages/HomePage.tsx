import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import ProgramsSection from '../components/ProgramsSection';
import StatsSection from '../components/StatsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CoachesSection from '../components/CoachesSection';

const HomePage: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        className="overflow-hidden"
      >
        <Hero />
        <Features />
        <ProgramsSection />
        <StatsSection />
        <CoachesSection />
        <TestimonialsSection />
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
