'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Target, Award, Shield, Globe, Lightbulb, Zap, TreePine, GraduationCap, Home, Baby } from 'lucide-react';
import Image from 'next/image';

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We believe in the transformative power of kindness and empathy. Every action we take is guided by genuine care for underprivileged children in our community.',
    color: 'from-green-400 to-green-600',
    stats: 'Core Value #1',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Together we are stronger. We build bridges between volunteers, donors, and organizations to create lasting positive change for children in need.',
    color: 'from-emerald-400 to-emerald-600',
    stats: 'Unity in Action',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'We focus on creating measurable, direct impact in the lives of underprivileged children through targeted fundraising and support programs.',
    color: 'from-teal-400 to-teal-600',
    stats: 'Results-Driven',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in our fundraising events, volunteer coordination, and support for children and youth shelters.',
    color: 'from-lime-400 to-lime-600',
    stats: 'Quality First',
  },
  {
    icon: Shield,
    title: 'Transparency',
    description: 'We operate with complete transparency, ensuring that every dollar raised goes directly toward supporting underprivileged children.',
    color: 'from-green-500 to-green-700',
    stats: '100% Direct Impact',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creative fundraising solutions, from carnivals to tournaments, finding new and engaging ways to support our cause.',
    color: 'from-emerald-500 to-emerald-700',
    stats: 'Creative Solutions',
  },
];

const achievements = [
  { number: '$3,000+', label: 'Raised Last Summer', description: 'Direct support for children' },
  { number: '150+', label: 'Children Supported', description: 'Lives directly impacted' },
  { number: '25+', label: 'Active Volunteers', description: 'Dedicated team members' },
  { number: '50+', label: 'Events Organized', description: 'Fundraising initiatives' },
];

export default function About() {
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const isValuesInView = useInView(valuesRef, { once: true, threshold: 0.2 });
  const isAchievementsInView = useInView(achievementsRef, { once: true, threshold: 0.3 });

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-white via-green-50 to-green-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-green-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-2xl bg-white border-4 border-green-500">
                <Image
                  src="/logo.png"
                  alt="Helping Hands WA Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black text-gray-900 mb-8">
              About 
              <span className="block bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
                Our Mission
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              At Helping Hands, we are dedicated to making a difference in the lives of 
              underprivileged children within our community.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              As a non-profit organization, our primary goal is to raise funds that support these children, 
              providing them with the resources they need to thrive and succeed. We believe that every child 
              deserves the opportunity to achieve their fullest potential, and with your help, we can make that vision a reality.
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full mx-auto max-w-lg mt-12"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-16">
              What We Do
            </h2>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl mb-16"
              >
                <p className="text-2xl md:text-3xl text-white leading-relaxed font-medium">
                  Helping Hands organizes a variety of events and initiatives aimed at engaging 
                  the community and generating support for our cause.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Fundraising Stalls</h3>
                  <p className="text-lg text-gray-600">We set up stalls at local events, markets, and festivals where we share our mission with the public and collect donations.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Donation Events</h3>
                  <p className="text-lg text-gray-600">Buying supplies to donate to local youth shelters, ensuring children have access to essential items.</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Creative Events</h3>
                  <p className="text-lg text-gray-600">Carnivals, tournaments, competitions and more to engage the community in fun, meaningful ways.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Values
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              The fundamental principles that guide our work in supporting underprivileged children
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isValuesInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 text-center relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className={`w-20 h-20 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">{value.description}</p>
                <div className="text-sm font-bold text-green-600 bg-green-50 px-4 py-2 rounded-full inline-block">
                  {value.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section ref={achievementsRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Achievements
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Through the dedication and hard work of our volunteers and supporters, 
              Helping Hands has successfully raised $3000+ last summer.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These funds have been directly channeled into programs and resources that benefit 
              underprivileged children, helping to provide them with better educational opportunities, 
              health care, and essential supplies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isAchievementsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
              >
                <div className="text-4xl font-black text-green-600 mb-2">{achievement.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.label}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Joining Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Joining Helping Hands
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                As a new member of Helping Hands, here is what's expected of you (things we do as a team):
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Event Planning and Execution</h4>
                  <p className="text-green-100">Help organize and run our fundraising stalls and community drives.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Community Engagement</h4>
                  <p className="text-green-100">Interact with members of the community to raise awareness about our mission and encourage donations.</p>
                </div>
                <div className="bg-white/10 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-white mb-3">Creative Fundraising</h4>
                  <p className="text-green-100">Bring new ideas to the table for innovative ways to raise funds and support our cause.</p>
                </div>
              </div>
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 mt-8"
              >
                Join Our Team Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}