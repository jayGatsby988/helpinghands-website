'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

export default function AnimatedCounter({ 
  end, 
  duration = 2, 
  prefix = '', 
  suffix = '' 
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const startValue = 0;
    
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);
      
      if (progress < 1) {
        setCount(Math.floor(startValue + (end - startValue) * progress));
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="font-bold text-4xl lg:text-5xl"
    >
      {prefix}{count.toLocaleString()}{suffix}
    </motion.span>
  );
}