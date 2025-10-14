'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from '@/components/ui/loading-spinner';
import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import ImpactStats from '@/components/sections/impact-stats';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Extended loading time for better effect

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="min-h-screen"
        >
          <Hero />
          <Features />
          <ImpactStats />
        </motion.main>
      )}
    </AnimatePresence>
  );
}