'use client';
import logo from '../../public/logo.png'
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingSpinner() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center justify-center z-50"
    >
      <div className="text-center">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-8"
        >
          <motion.div
            animate={{ 
              boxShadow: [
                '0 0 0 0 rgba(34, 197, 94, 0.7)',
                '0 0 0 30px rgba(34, 197, 94, 0)',
                '0 0 0 0 rgba(34, 197, 94, 0.7)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl bg-white border-4 border-green-500 mx-auto"
          >
            <Image
              src={logo}
              alt="Helping Hands WA Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Text Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Helping Hands
            <span className="block text-green-600">Washington</span>
          </h1>
          <p className="text-xl text-gray-600">Building stronger communities together</p>
        </motion.div>

        {/* Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12"
        >
          <div className="flex justify-center space-x-2">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                animate={{
                  scale: [1, 1.5, 1],
                  backgroundColor: ['#22C55E', '#16A34A', '#22C55E'],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                }}
                className="w-4 h-4 bg-green-500 rounded-full"
              />
            ))}
          </div>
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-600 font-semibold mt-4"
          >
            Loading your community impact dashboard...
          </motion.p>
        </motion.div>
      </div>
    </motion.div>
  );
}