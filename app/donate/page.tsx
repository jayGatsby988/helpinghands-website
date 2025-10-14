'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, DollarSign, Users, Target } from 'lucide-react';

const donationAmounts = [25, 50, 100, 250, 500, 1000];

const impactData = [
  {
    amount: 25,
    impact: 'Provides meals for 5 families',
    icon: Heart,
    color: 'from-[#3C8DBC] to-[#2563EB]',
  },
  {
    amount: 50,
    impact: 'Supplies school materials for 10 students',
    icon: Target,
    color: 'from-[#3C7A5B] to-[#059669]',
  },
  {
    amount: 100,
    impact: 'Supports community event for 50 people',
    icon: Users,
    color: 'from-[#D63D3D] to-[#DC2626]',
  },
  {
    amount: 250,
    impact: 'Funds volunteer training program',
    icon: DollarSign,
    color: 'from-[#F59E0B] to-[#D97706]',
  },
];

export default function Donate() {
  const impactRef = useRef(null);
  const isImpactInView = useInView(impactRef, { once: true, threshold: 0.3 });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#FDFDFD] via-[#F1ECE5] to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Make a 
              <span className="bg-gradient-to-r from-[#3C8DBC] to-[#3C7A5B] bg-clip-text text-transparent">
                {' '}Difference
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Your generous donation directly supports volunteer programs and community initiatives 
              that strengthen Washington communities and change lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section ref={impactRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how your donation directly translates into positive change in our communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactData.map((item, index) => (
              <motion.div
                key={item.amount}
                initial={{ opacity: 0, y: 50 }}
                animate={isImpactInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  ${item.amount}
                </div>
                <p className="text-gray-600">{item.impact}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-20 bg-gradient-to-br from-[#F1ECE5] to-[#E8F4FD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your Donation Amount
            </h2>
            <p className="text-xl text-gray-600">
              Every contribution, no matter the size, makes a meaningful difference
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
              {donationAmounts.map((amount, index) => (
                <motion.button
                  key={amount}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 border-2 border-gray-300 rounded-lg hover:border-[#3C8DBC] hover:bg-[#3C8DBC] hover:text-white transition-all duration-300 font-semibold text-lg"
                >
                  ${amount}
                </motion.button>
              ))}
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Custom Amount
              </label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                  $
                </span>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3C8DBC] focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Donation Type
              </label>
              <div className="flex gap-4">
                <button className="flex-1 p-3 border-2 border-[#3C8DBC] bg-[#3C8DBC] text-white rounded-lg font-semibold">
                  One-time
                </button>
                <button className="flex-1 p-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-[#3C8DBC] hover:bg-[#3C8DBC] hover:text-white transition-all duration-300">
                  Monthly
                </button>
              </div>
            </div>

            <div className="text-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#3C8DBC] to-[#3C7A5B] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-4"
              >
                Donate Now
              </motion.button>
              <p className="text-sm text-gray-500">
                Secure payment processing. Your donation is tax-deductible.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Other Ways to Give
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              There are many ways to support our mission beyond monetary donations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-[#F1ECE5] to-[#E8F4FD] rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#3C8DBC] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Volunteer Your Time</h3>
              <p className="text-gray-600">
                The most valuable gift you can give is your time and skills to directly help communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-[#F1ECE5] to-[#E8F4FD] rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#3C7A5B] to-[#059669] rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Spread the Word</h3>
              <p className="text-gray-600">
                Share our mission with friends, family, and colleagues to expand our volunteer network.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-[#F1ECE5] to-[#E8F4FD] rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-[#D63D3D] to-[#DC2626] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Partnerships</h3>
              <p className="text-gray-600">
                Partner with us for employee volunteer programs and corporate social responsibility initiatives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}