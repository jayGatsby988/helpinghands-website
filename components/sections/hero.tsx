'use client';
import logo from '../../public/logo.png'
import { motion } from 'framer-motion';
import { ArrowRight, Heart, Users, HandHeart, Star, Award, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const floatingElements = [
  { icon: Heart, delay: 0, x: '10%', y: '20%' },
  { icon: Users, delay: 0.5, x: '80%', y: '30%' },
  { icon: HandHeart, delay: 1, x: '15%', y: '70%' },
  { icon: Star, delay: 1.5, x: '85%', y: '60%' },
  { icon: Award, delay: 2, x: '70%', y: '15%' },
  { icon: Globe, delay: 2.5, x: '25%', y: '80%' },
];

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-white via-green-50 to-green-100 flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 1, delay: element.delay }}
            className="absolute"
            style={{ left: element.x, top: element.y }}
          >
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 4 + index,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg"
            >
              <element.icon className="w-8 h-8 text-white" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Geometric Background Patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-green-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-12"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  boxShadow: [
                    '0 0 0 0 rgba(34, 197, 94, 0.7)',
                    '0 0 0 20px rgba(34, 197, 94, 0)',
                    '0 0 0 0 rgba(34, 197, 94, 0.7)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-32 h-32 rounded-full flex items-center justify-center shadow-2xl bg-white border-4 border-green-500"
              >
                <Image
                  src={logo}
                  alt="Helping Hands WA Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Main Heading with Enhanced Typography */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h1 className="text-6xl md:text-8xl font-black text-gray-900 leading-tight">
              Supporting
              <span className="block bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
                {' '}Underprivileged{' '}
              </span>
              <span className="block">Children</span>
            </h1>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full mx-auto max-w-md"
            />
          </motion.div>

          {/* Enhanced Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-4"
          >
            <p className="text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-medium">
              At Helping Hands, we are dedicated to making a difference in the lives of underprivileged children within our community.
            </p>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              As a non-profit organization, our primary goal is to raise funds that support these children, 
              providing them with the resources they need to thrive and succeed. We believe that every child 
              deserves the opportunity to achieve their fullest potential.
            </p>
          </motion.div>

          {/* Enhanced Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center space-x-3 border-2 border-transparent hover:border-green-300"
              >
                <HandHeart className="w-6 h-6" />
                <span>Join Our Team</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/about"
                className="group border-3 border-green-500 text-green-600 px-12 py-5 rounded-full font-bold text-xl hover:bg-green-500 hover:text-white transition-all duration-300 flex items-center space-x-3 shadow-lg hover:shadow-xl"
              >
                <Users className="w-6 h-6" />
                <span>Learn About Our Mission</span>
              </Link>
            </motion.div>
          </motion.div>

          {/* Impact Preview Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
          >
            {[
              { number: '$3,000+', label: 'Raised Last Summer', icon: Heart },
              { number: '100+', label: 'Children Supported', icon: Users },
              { number: '25+', label: 'Active Volunteers', icon: HandHeart },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 shadow-xl border border-green-100 hover:border-green-300 transition-all duration-300"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">{stat.number}</div>
                    <div className="text-lg font-semibold text-gray-600">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-8 h-12 border-3 border-green-500 rounded-full flex justify-center cursor-pointer hover:border-green-600 transition-colors"
            >
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-2 h-4 bg-green-500 rounded-full mt-2"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
