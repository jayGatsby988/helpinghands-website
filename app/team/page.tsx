'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { LinkedinIcon, TwitterIcon, MailIcon } from 'lucide-react';

const teamMembers = [
  {
    name: 'Sara Kansa;',
    role: 'President',
    bio: 'Leading Helping Hands WA with 15 years of nonprofit experience. Passionate about community development and volunteer coordination.',
    image: '/sara.jpeg',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@helpinghandswa.org',
  },
  {
    name: 'Akshay',
    role: 'Vice President',
    bio: 'Coordinates volunteer programs across Washington State. Expert in project management and community outreach.',
    image: '/akshay.jpeg',
    linkedin: '#',
    twitter: '#',
    email: 'michael@helpinghandswa.org',
  },
  {
    name: 'Darshan Rengarajan',
    role: 'Webmaster and Volunteer Manager',
    bio: 'My name is Darshan, and Im dedicated to helping the community.',
    image: '/darshan.jpeg',
    linkedin: '#',
    twitter: '#',
    email: 'emily@helpinghandswa.org',
  },
  {
    name: 'Sarayu Nukala',
    role: 'Marketing and Outreach Lead',
    bio: 'Ensures smooth operations and manages volunteer logistics. Background in business operations and event planning.',
    image: '/sarayu.jpeg',
    linkedin: '#',
    twitter: '#',
    email: 'david@helpinghandswa.org',
  },
  {
    name: 'Pravanram Vijayabarath',
    role: 'Marketing & Communications',
    bio: 'Tells our story and manages digital communications. Skilled in content creation and social media strategy.',
    image: '/pabs.jpeg',
    linkedin: '#',
    twitter: '#',
    email: 'lisa@helpinghandswa.org',
  },
  {
    name: 'Sanskriti',
    role: 'Volunteer Coordinator',
    bio: 'Matches volunteers with perfect opportunities. Experienced in volunteer management and training.',
    image: '',
    linkedin: '#',
    twitter: '#',
    email: 'james@helpinghandswa.org',
  },
];

export default function Team() {
  const teamRef = useRef(null);
  const isTeamInView = useInView(teamRef, { once: true, amount: 0.2 });

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
              Meet Our 
              <span className="bg-gradient-to-r from-[#3C8DBC] to-[#3C7A5B] bg-clip-text text-transparent">
                {' '}Team
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Dedicated professionals working tirelessly to connect volunteers with meaningful 
              opportunities and strengthen communities across Washington State.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section ref={teamRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate individuals with diverse backgrounds united by a common goal: 
              making a positive impact in our communities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                animate={isTeamInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
              >
                <div className="text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isTeamInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                    className="mb-6"
                  >
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#3C8DBC] font-semibold mb-4">
                    {member.role}
                  </p>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex justify-center space-x-4">
                    <motion.a
                      href={member.linkedin}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#3C8DBC] to-[#2563EB] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={member.twitter}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#3C7A5B] to-[#059669] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    >
                      <TwitterIcon className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={`mailto:${member.email}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-10 h-10 bg-gradient-to-r from-[#D63D3D] to-[#DC2626] rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
                    >
                      <MailIcon className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-[#F1ECE5] to-[#E8F4FD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're always looking for passionate individuals to join our mission. 
              Check out our current opportunities and become part of something meaningful.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#3C8DBC] to-[#3C7A5B] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              View Career Opportunities
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}