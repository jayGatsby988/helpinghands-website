'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Target, Award, Shield, Globe, Lightbulb, Zap, TreePine, GraduationCap, Home, Baby } from 'lucide-react';
import Image from 'next/image';

const timeline = [
  {
    year: '2015',
    title: 'The Vision Begins',
    description: 'Founded by a group of passionate community leaders who saw the need for better volunteer coordination across Washington State. Started with just 25 volunteers in Seattle.',
    icon: Lightbulb,
    stats: '25 Volunteers',
  },
  {
    year: '2016',
    title: 'First Major Initiative',
    description: 'Launched our first statewide food drive, collecting over 50,000 meals for families in need. This success proved the power of coordinated volunteer efforts.',
    icon: Heart,
    stats: '50K Meals Collected',
  },
  {
    year: '2017',
    title: 'Digital Platform Launch',
    description: 'Developed our innovative volunteer matching platform, making it easier than ever for people to find meaningful opportunities that match their skills and interests.',
    icon: Zap,
    stats: '500 Volunteers',
  },
  {
    year: '2018',
    title: 'Statewide Expansion',
    description: 'Expanded operations to cover all major cities in Washington State, establishing local chapters and building partnerships with community organizations.',
    icon: Globe,
    stats: '15 Cities Served',
  },
  {
    year: '2019',
    title: 'Environmental Focus',
    description: 'Launched our environmental conservation program, organizing tree planting events, beach cleanups, and sustainability education initiatives across the state.',
    icon: TreePine,
    stats: '10K Trees Planted',
  },
  {
    year: '2020',
    title: 'Pandemic Response',
    description: 'Rapidly mobilized volunteers to support COVID-19 relief efforts, delivering groceries to seniors, supporting healthcare workers, and maintaining essential services.',
    icon: Shield,
    stats: '2K Volunteers Mobilized',
  },
  {
    year: '2021',
    title: 'Education Partnership',
    description: 'Partnered with school districts to provide tutoring, mentorship, and educational support to students affected by remote learning challenges.',
    icon: GraduationCap,
    stats: '1K Students Helped',
  },
  {
    year: '2022',
    title: 'Housing Initiative',
    description: 'Launched our affordable housing support program, helping build homes for low-income families and providing housing assistance to those in need.',
    icon: Home,
    stats: '200 Homes Built',
  },
  {
    year: '2023',
    title: 'Youth Development',
    description: 'Established comprehensive youth development programs, including after-school activities, summer camps, and leadership training for young people.',
    icon: Baby,
    stats: '3K Youth Served',
  },
  {
    year: '2024',
    title: 'Innovation Awards',
    description: 'Recognized nationally for innovative approaches to community engagement and volunteer coordination. Received multiple awards for social impact and organizational excellence.',
    icon: Award,
    stats: '5 National Awards',
  },
];

const values = [
  {
    icon: Heart,
    title: 'Compassion',
    description: 'We believe in the transformative power of kindness, empathy, and genuine care for others. Every action we take is guided by compassion for our community members.',
    color: 'from-green-400 to-green-600',
    stats: 'Core Value #1',
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Together we are stronger. We build bridges between people, organizations, and resources to create lasting positive change in our communities.',
    color: 'from-emerald-400 to-emerald-600',
    stats: 'Unity in Action',
  },
  {
    icon: Target,
    title: 'Impact',
    description: 'We focus on creating measurable, sustainable change that addresses root causes and creates long-term solutions for community challenges.',
    color: 'from-teal-400 to-teal-600',
    stats: 'Results-Driven',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from volunteer training to program implementation and community partnerships.',
    color: 'from-lime-400 to-lime-600',
    stats: 'Quality First',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with complete transparency, honesty, and accountability in all our interactions with volunteers, partners, and the communities we serve.',
    color: 'from-green-500 to-green-700',
    stats: 'Trust & Transparency',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creative solutions and new approaches to community challenges, constantly evolving to better serve our volunteers and communities.',
    color: 'from-emerald-500 to-emerald-700',
    stats: 'Forward Thinking',
  },
];

const achievements = [
  { number: '5,000+', label: 'Active Volunteers', description: 'Dedicated community members' },
  { number: '125,000+', label: 'Lives Impacted', description: 'People directly helped' },
  { number: '250+', label: 'Communities', description: 'Across Washington State' },
  { number: '89,000+', label: 'Volunteer Hours', description: 'This year alone' },
];

export default function About() {
  const timelineRef = useRef(null);
  const valuesRef = useRef(null);
  const achievementsRef = useRef(null);
  const isTimelineInView = useInView(timelineRef, { once: true, threshold: 0.2 });
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
                Our Story
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Since 2015, we've been connecting passionate volunteers with meaningful opportunities 
              to create positive change in Washington State communities.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              What started as a small group of dedicated individuals has grown into a statewide movement 
              of thousands of volunteers working together to build stronger, more resilient communities.
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
              Our Mission
            </h2>
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl mb-16"
              >
                <blockquote className="text-3xl md:text-4xl text-white leading-relaxed font-medium">
                  "To build stronger, more connected communities by empowering individuals 
                  to make meaningful contributions through volunteer service, creating lasting 
                  positive change that addresses real community needs."
                </blockquote>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect</h3>
                  <p className="text-lg text-gray-600">Bringing together volunteers and meaningful opportunities to create lasting partnerships</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Empower</h3>
                  <p className="text-lg text-gray-600">Enabling individuals to discover their potential and make a meaningful difference</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Impact</h3>
                  <p className="text-lg text-gray-600">Creating measurable, sustainable change that strengthens communities</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our Journey
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              From humble beginnings to statewide impact - here's how we've grown and evolved
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-green-400 via-green-500 to-green-600 rounded-full" />
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-20 ${
                  index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-green-500 rounded-full z-10 shadow-lg" />
                
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-green-200 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4 justify-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg mr-4">
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-green-600">{item.year}</div>
                        <div className="text-sm font-bold text-gray-500">{item.stats}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">{item.description}</p>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section ref={valuesRef} className="py-32 bg-white">
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
              The fundamental principles that guide everything we do and shape our community impact
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
      <section ref={achievementsRef} className="py-32 bg-gradient-to-br from-green-50 to-white">
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
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Celebrating the incredible impact we've made together as a community
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isAchievementsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Be Part of Our Story?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join thousands of volunteers who are already making a difference. Your story of impact starts here.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Your Journey
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}