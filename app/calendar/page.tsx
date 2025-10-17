'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, Clock, MapPin, Users, Heart, Award, Gift } from 'lucide-react';
import Image from 'next/image';
import CalendarComponent from '../../components/ui/calendar-component'

const upcomingEvents = [
  {
    date: '2024-01-15',
    title: 'Community Fundraising Stall',
    time: '9:00 AM - 3:00 PM',
    location: 'Seattle Farmers Market',
    description: 'Set up our fundraising stall to collect donations and raise awareness for underprivileged children',
    volunteers: 8,
    spotsLeft: 3,
    type: 'Fundraising',
    color: 'from-green-400 to-green-600',
  },
  {
    date: '2024-01-20',
    title: 'Youth Shelter Donation Drive',
    time: '2:00 PM - 5:00 PM',
    location: 'Local Youth Shelter',
    description: 'Deliver essential supplies and donations directly to children at the youth shelter',
    volunteers: 12,
    spotsLeft: 5,
    type: 'Donation',
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    date: '2024-01-25',
    title: 'Community Carnival Planning',
    time: '4:00 PM - 6:00 PM',
    location: 'Community Center',
    description: 'Plan and organize our upcoming community carnival to raise funds for underprivileged children',
    volunteers: 15,
    spotsLeft: 7,
    type: 'Creative Event',
    color: 'from-teal-400 to-teal-600',
  },
  {
    date: '2024-02-01',
    title: 'School Supply Collection',
    time: '8:00 AM - 12:00 PM',
    location: 'Various Locations',
    description: 'Collect and organize school supplies to donate to underprivileged children',
    volunteers: 20,
    spotsLeft: 8,
    type: 'Education',
    color: 'from-lime-400 to-lime-600',
  },
  {
    date: '2024-02-10',
    title: 'Community Tournament',
    time: '6:00 PM - 9:00 PM',
    location: 'Local Sports Center',
    description: 'Host a community tournament to engage families and raise funds for our cause',
    volunteers: 25,
    spotsLeft: 10,
    type: 'Competition',
    color: 'from-green-500 to-green-700',
  },
  {
    date: '2024-02-15',
    title: 'Awareness Campaign',
    time: '3:00 PM - 5:00 PM',
    location: 'Downtown Area',
    description: 'Engage with community members to raise awareness about underprivileged children',
    volunteers: 10,
    spotsLeft: 4,
    type: 'Outreach',
    color: 'from-emerald-500 to-emerald-700',
  },
];

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const eventsRef = useRef(null);
  const calendarRef = useRef(null);
  const isEventsInView = useInView(eventsRef, { once: true, amount: 0.2 });
  const isCalendarInView = useInView(calendarRef, { once: true, amount: 0.3 });

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
  };

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
              Event 
              <span className="block bg-gradient-to-r from-green-500 via-green-600 to-green-700 bg-clip-text text-transparent">
                Calendar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Discover upcoming volunteer opportunities and community events to support underprivileged children.
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join us in making a positive impact through fundraising stalls, donation drives, 
              creative events, and community engagement activities.
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

      {/* Interactive Calendar */}
      <section ref={calendarRef} className="py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isCalendarInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Interactive Calendar
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Select a date to view events and plan your volunteer activities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isCalendarInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <CalendarComponent 
              onDateSelect={handleDateSelect}
              selectedDate={selectedDate}
            />
          </motion.div>

          {selectedDate && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-8 text-center"
            >
              <div className="bg-green-50 rounded-2xl p-6 border border-green-200">
                <h3 className="text-xl font-bold text-green-800 mb-2">
                  Selected Date
                </h3>
                <p className="text-green-700">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Upcoming Events */}
      <section ref={eventsRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Upcoming Events
            </h2>
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
              Join us at these upcoming volunteer opportunities to support underprivileged children
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${event.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="flex items-center justify-between mb-6 relative z-10">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${event.color} shadow-lg`}>
                    {event.type}
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {event.spotsLeft} spots left
                    </div>
                    <div className="text-xs text-gray-400">
                      {event.volunteers} volunteers needed
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-green-700 transition-colors relative z-10">
                  {event.title}
                </h3>

                <div className="space-y-3 mb-6 relative z-10">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-sm font-medium">{formatDate(event.date)}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-sm font-medium">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-3 text-green-500" />
                    <span className="text-sm font-medium">{event.location}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-8 leading-relaxed text-lg relative z-10">
                  {event.description}
                </p>

                <div className="flex items-center justify-between relative z-10">
                  <div className="flex items-center text-gray-500">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">{event.volunteers - event.spotsLeft} registered</span>
                  </div>
                  <motion.a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-6 py-3 rounded-full text-white font-bold text-sm bg-gradient-to-r ${event.color} hover:shadow-lg transition-all duration-300`}
                  >
                    Join Event
                  </motion.a>
                </div>

                {/* Progress Bar */}
                <div className="mt-6 relative z-10">
                  <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>Registration Progress</span>
                    <span>{Math.round(((event.volunteers - event.spotsLeft) / event.volunteers) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isEventsInView ? { width: `${((event.volunteers - event.spotsLeft) / event.volunteers) * 100}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${event.color}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-3xl p-12 shadow-2xl">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Involved?
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
                Join our team of dedicated volunteers and help us make a real difference 
                in the lives of underprivileged children through our various events and initiatives.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdqDSmH96patcT2Q77-ynB75uCZ37UNOx9YWYj8XpkBCEIoQA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-green-600 px-10 py-4 rounded-full font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join Our Team
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-green-600 transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}