'use client';
import sara from '../../public/sara.jpeg'

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import AnimatedCounter from '../ui/animated-counter';
import { Users, Heart, Calendar, MapPin, DollarSign, Award, Gift, Home, GraduationCap, Utensils, Baby, HandHeart } from 'lucide-react';

const stats = [
  {
    icon: DollarSign,
    value: 3000,
    suffix: '+',
    label: 'Raised Last Summer',
    description: 'Funds directly supporting children',
    color: 'from-green-400 to-green-600',
  },
  {
    icon: Baby,
    value: 150,
    suffix: '+',
    label: 'Children Supported',
    description: 'Underprivileged kids helped',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    icon: Users,
    value: 25,
    suffix: '+',
    label: 'Active Volunteers',
    description: 'Dedicated team members',
    color: 'from-teal-400 to-teal-600',
  },
  {
    icon: Calendar,
    value: 50,
    suffix: '+',
    label: 'Events Organized',
    description: 'Fundraising and donation events',
    color: 'from-lime-400 to-lime-600',
  },
  {
    icon: Gift,
    value: 500,
    suffix: '+',
    label: 'Supplies Donated',
    description: 'Essential items for youth shelters',
    color: 'from-green-500 to-green-700',
  },
  {
    icon: Home,
    value: 3,
    suffix: '+',
    label: 'Youth Shelters',
    description: 'Partner organizations supported',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    icon: HandHeart,
    value: 500,
    suffix: '+',
    label: 'Volunteer Hours',
    description: 'Time dedicated to our cause',
    color: 'from-teal-500 to-teal-700',
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Community Events',
    description: 'Carnivals, tournaments & competitions',
    color: 'from-lime-500 to-lime-700',
  },
  {
    icon: GraduationCap,
    value: 75,
    suffix: '+',
    label: 'Educational Resources',
    description: 'Learning materials provided',
    color: 'from-green-600 to-green-800',
  },
  {
    icon: Utensils,
    value: 100,
    suffix: '+',
    label: 'Meals Provided',
    description: 'Through shelter partnerships',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    icon: MapPin,
    value: 5,
    suffix: '+',
    label: 'Locations Served',
    description: 'Communities we actively support',
    color: 'from-teal-600 to-teal-800',
  },
  {
    icon: Heart,
    value: 100,
    suffix: '%',
    label: 'Direct Impact',
    description: 'Funds go directly to children',
    color: 'from-lime-600 to-lime-800',
  },
];

const testimonials = [
  {
    quote: "Helping Hands has given me the opportunity to make a real difference in children's lives. Every event we organize brings us closer to our goal of supporting those who need it most.",
    author: "Sara Kansal",
    role: "President",
    image: '/sara.jpeg'
  },
  {
    quote: "Being part of this organization has been incredibly rewarding. Seeing the direct impact of our fundraising efforts on underprivileged children motivates me every day.",
    author: "Sarayu Nukala",
    role: "Marketing and Outreach lead",
    image: '/sarayu.jpeg'
  },
  {
    quote: "The creativity and passion of our team is amazing. From carnivals to tournaments, we find fun ways to raise funds while building community awareness.",
    author: "Akshay Madan",
    role: "Vice President",
    image: '/akshay.jpeg'
  }
];

export default function ImpactStats() {
  const ref = useRef(null);
  const testimonialsRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true, amount: 0.3 });

  return (
    <section className="py-32 bg-gradient-to-br from-white via-green-50 to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-green-600 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-3/4 left-3/4 w-48 h-48 bg-green-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-2xl">
              <Award className="w-12 h-12 text-white" />
            </div>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Our Achievements
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-6">
            Through the dedication and hard work of our volunteers and supporters, 
            Helping Hands has successfully raised $3000+ last summer.
          </p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These funds have been directly channeled into programs and resources that benefit 
            underprivileged children, helping to provide them with better educational opportunities, 
            health care, and essential supplies.
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full mx-auto max-w-lg mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="text-center relative z-10">
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={isInView ? { scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="mx-auto mb-6"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <div className="text-center">
                  <div className={`bg-gradient-to-r ${stat.color} bg-clip-text text-transparent text-4xl md:text-5xl font-black mb-2`}>
                    {isInView && (
                      <AnimatedCounter 
                        end={stat.value} 
                        suffix={stat.suffix}
                        duration={2.5}
                      />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.label}</h3>
                  <p className="text-gray-600 text-sm">{stat.description}</p>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: '100%' } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Section */}
        <motion.div
          ref={testimonialsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Voices from Our 
            <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
              Team
            </span>
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Hear from our dedicated volunteers who are making a difference in children's lives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-16 h-16 rounded-full object-cover mr-4 border-4 border-green-200"
                />
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.author}</h4>
                  <p className="text-green-600 font-semibold">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">
              Every Dollar Makes a Difference
            </h3>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Behind every number is a child whose life has been touched by our community's generosity. 
              Join us in continuing to support underprivileged children and help them reach their fullest potential.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}