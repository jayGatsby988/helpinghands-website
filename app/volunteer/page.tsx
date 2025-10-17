'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Calendar, MapPin, ArrowRight, HandHeart, Award, Gift } from 'lucide-react';
import Image from 'next/image';

const opportunities = [
  {
    title: 'Fundraising Stalls',
    description: 'Set up stalls at local events, markets, and festivals to share our mission and collect donations for underprivileged children.',
    icon: Users,
    location: 'TBD',
    date: 'Weekly',
    volunteers: 'Team Effort',
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Donation Events',
    description: 'Help organize events to buy supplies and donate them directly to local youth shelters supporting children in need.',
    icon: Gift,
    location: 'TBD',
    date: 'Monthly',
    volunteers: 'Group Activity',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    title: 'Creative Events',
    description: 'Participate in organizing carnivals, tournaments, competitions and other fun events to raise funds for our cause.',
    icon: Award,
    location: 'TBD',
    date: 'Seasonal',
    volunteers: 'All Hands',
    color: 'from-teal-400 to-teal-600',
  },
  {
    title: 'Community Engagement',
    description: 'Interact with community members to raise awareness about our mission and encourage support for underprivileged children.',
    icon: Heart,
    location: 'TBD',
    date: 'Ongoing',
    volunteers: 'Individual & Team',
    color: 'from-lime-400 to-lime-600',
  },
];

const expectations = [
  {
    title: 'Event Planning and Execution',
    description: 'Help organize and run our fundraising stalls and community drives, ensuring smooth operations and maximum impact.',
    icon: Calendar,
  },
  {
    title: 'Community Engagement',
    description: 'Interact with members of the community to raise awareness about our mission and encourage donations.',
    icon: Users,
  },
  {
    title: 'Summer CLasses',
    description: 'We totor and give summer classes to young kids, to help icnrease the education for the gorwing kdis in the area.',
    icon: HandHeart,
  },
];

export default function Volunteer() {
  const opportunitiesRef = useRef(null);
  const expectationsRef = useRef(null);
  const isOpportunitiesInView = useInView(opportunitiesRef, { once: true, amount: 0.3 });
  const isExpectationsInView = useInView(expectationsRef, { once: true, amount: 0.3 });

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
              Join Our 
              <span className="block bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Be part of a dedicated team working to make a difference in the lives of underprivileged children.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our passionate volunteers in organizing events, raising funds, and creating positive change 
              in our community. Every contribution helps children reach their fullest potential.
            </p>
            
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="h-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 rounded-full mx-auto max-w-lg mt-12"
            />

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-12"
            >
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-gradient-to-r from-green-500 to-green-600 text-white px-12 py-5 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 inline-flex items-center space-x-3 border-2 border-transparent hover:border-green-300"
              >
                <HandHeart className="w-6 h-6" />
                <span>Join Our Team Today</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section ref={opportunitiesRef} className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isOpportunitiesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Volunteer Opportunities
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Discover the various ways you can contribute to supporting underprivileged children in our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isOpportunitiesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${opportunity.color} opacity-0 hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-r ${opportunity.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <opportunity.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">{opportunity.volunteers}</div>
                    <div className="text-sm font-semibold text-gray-900">{opportunity.date}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">
                  {opportunity.title}
                </h3>
                <p className="text-gray-600 mb-6 text-lg leading-relaxed relative z-10">{opportunity.description}</p>
                
                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{opportunity.location}</span>
                  </div>
                  <button className="flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors">
                    Get Involved
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expectations Section */}
      <section ref={expectationsRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isExpectationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              What We Do as a Team
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              As a new member of Helping Hands, here is what's expected of you (things we do as a team)
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {expectations.map((expectation, index) => (
              <motion.div
                key={expectation.title}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={isExpectationsInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <expectation.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{expectation.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{expectation.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isExpectationsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">
                Ready to Make a Difference?
              </h3>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
                Join our team of dedicated volunteers and help us support underprivileged children 
                in achieving their fullest potential. Your contribution matters.
              </p>
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300 space-x-3"
              >
                <HandHeart className="w-6 h-6" />
                <span>Apply to Join Our Team</span>
                <ArrowRight className="w-6 h-6" />
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}