'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { HandHeart, Users, Calendar, MapPin, Award, Lightbulb, Shield, Zap, Target, Globe, BookOpen, Smile } from 'lucide-react';

const features = [
  {
    icon: HandHeart,
    title: 'Volunteer Matching',
    description: 'Our advanced matching system connects you with volunteer opportunities that perfectly align with your skills, interests, schedule, and location preferences.',
    gradient: 'from-green-400 to-green-600',
    stats: '98% Match Rate',
  },
  {
    icon: Users,
    title: 'Community Building',
    description: 'Join a vibrant network of passionate volunteers working together to strengthen communities through collaborative projects and lasting friendships.',
    gradient: 'from-emerald-400 to-emerald-600',
    stats: '5,000+ Members',
  },
  {
    icon: Calendar,
    title: 'Event Organization',
    description: 'Participate in professionally organized events and initiatives designed to maximize positive impact while providing meaningful volunteer experiences.',
    gradient: 'from-teal-400 to-teal-600',
    stats: '200+ Events/Year',
  },
  {
    icon: MapPin,
    title: 'Local Focus',
    description: 'Make a difference right in your neighborhood with locally-focused volunteer opportunities that address specific community needs and challenges.',
    gradient: 'from-lime-400 to-lime-600',
    stats: '250+ Locations',
  },

  {
    icon: Lightbulb,
    title: 'Innovation Hub',
    description: 'Bring fresh ideas and innovative solutions to community challenges through our dedicated innovation programs and creative problem-solving initiatives.',
    gradient: 'from-emerald-500 to-emerald-700',
    stats: '50+ Innovations',
  },


  {
    icon: Target,
    title: 'Impact Tracking',
    description: 'Track your volunteer impact with detailed analytics, progress reports, and community impact measurements to see the difference you\'re making.',
    gradient: 'from-green-600 to-green-800',
    stats: 'Real-time Data',
  },
  {
    icon: Globe,
    title: 'Region-Wide Network',
    description: 'Access volunteer opportunities across all of Washington Puget Sound Area through our extensive network of partner organizations and community groups.',
    gradient: 'from-emerald-600 to-emerald-800',
    stats: 'Connected to MathPath'
  },

  {
    icon: Smile,
    title: 'Wellness Support',
    description: 'We prioritize volunteer wellness with mental health resources, stress management support, and work-life balance guidance for sustainable volunteering.',
    gradient: 'from-lime-600 to-lime-800',
    stats: '24/7 Support',
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section ref={ref} className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
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
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-xl">
              <Zap className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8">
            Why Choose 
            <span className="block bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
              Helping Hands?
            </span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We provide comprehensive tools, meaningful connections, and unwavering support 
            to help you make a lasting impact in your community
          </p>
          
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full mx-auto max-w-lg mt-8"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                className="mb-6 relative z-10"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
              </motion.div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                  
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '60%' } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.4 }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full`}
                  />
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                >
                  <Zap className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of volunteers who are already creating positive change in their communities
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}