'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from 'lucide-react';

interface CalendarProps {
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date;
}

const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function CalendarComponent({ onDateSelect, selectedDate }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [today] = useState(new Date());

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // Get first day of the month and number of days
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayWeekday = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();

  // Get previous month's last days to fill the grid
  const prevMonth = new Date(year, month - 1, 0);
  const daysInPrevMonth = prevMonth.getDate();

  // Generate calendar days
  const calendarDays = [];

  // Previous month's trailing days
  for (let i = firstDayWeekday - 1; i >= 0; i--) {
    calendarDays.push({
      day: daysInPrevMonth - i,
      isCurrentMonth: false,
      isPrevMonth: true,
      date: new Date(year, month - 1, daysInPrevMonth - i)
    });
  }

  // Current month's days
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: true,
      isPrevMonth: false,
      date: new Date(year, month, day)
    });
  }

  // Next month's leading days to complete the grid
  const remainingCells = 42 - calendarDays.length; // 6 rows × 7 days = 42 cells
  for (let day = 1; day <= remainingCells; day++) {
    calendarDays.push({
      day,
      isCurrentMonth: false,
      isPrevMonth: false,
      date: new Date(year, month + 1, day)
    });
  }

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(prev => {
      const newDate = new Date(prev);
      if (direction === 'prev') {
        newDate.setMonth(prev.getMonth() - 1);
      } else {
        newDate.setMonth(prev.getMonth() + 1);
      }
      return newDate;
    });
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const isSelected = (date: Date) => {
    return selectedDate && date.toDateString() === selectedDate.toDateString();
  };

  const handleDateClick = (date: Date) => {
    if (onDateSelect) {
      onDateSelect(date);
    }
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    if (onDateSelect) {
      onDateSelect(new Date());
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <CalendarIcon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              {MONTHS[month]} {year}
            </h2>
            <p className="text-green-600 font-semibold">
              Today: {today.toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={goToToday}
            className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition-colors"
          >
            Today
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateMonth('prev')}
            className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 hover:text-green-600" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => navigateMonth('next')}
            className="w-10 h-10 bg-gray-100 hover:bg-green-100 rounded-full flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 hover:text-green-600" />
          </motion.button>
        </div>
      </div>

      {/* Days of Week Header */}
      <div className="grid grid-cols-7 gap-2 mb-4">
        {DAYS.map((day) => (
          <div
            key={day}
            className="h-12 flex items-center justify-center text-sm font-bold text-gray-500 uppercase tracking-wider"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-2">
        {calendarDays.map((calendarDay, index) => {
          const isCurrentDay = isToday(calendarDay.date);
          const isSelectedDay = isSelected(calendarDay.date);
          
          return (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.01 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleDateClick(calendarDay.date)}
              className={`
                h-12 w-12 rounded-xl flex items-center justify-center text-sm font-semibold transition-all duration-200 relative
                ${calendarDay.isCurrentMonth 
                  ? 'text-gray-900 hover:bg-green-50' 
                  : 'text-gray-400 hover:bg-gray-50'
                }
                ${isCurrentDay 
                  ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg hover:shadow-xl' 
                  : ''
                }
                ${isSelectedDay && !isCurrentDay
                  ? 'bg-green-100 text-green-700 border-2 border-green-300'
                  : ''
                }
              `}
            >
              {calendarDay.day}
              
              {/* Today indicator */}
              {isCurrentDay && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full shadow-sm"
                />
              )}
              
              {/* Weekend indicator */}
              {calendarDay.isCurrentMonth && (calendarDay.date.getDay() === 0 || calendarDay.date.getDay() === 6) && !isCurrentDay && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-green-400 rounded-full" />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Calendar Footer */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gradient-to-r from-green-500 to-green-600 rounded-full"></div>
              <span className="text-gray-600">Today</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              <span className="text-gray-600">Weekend</span>
            </div>
          </div>
          <div className="text-gray-500">
            {calendarDays.filter(day => day.isCurrentMonth).length} days this month
          </div>
        </div>
      </div>
    </div>
  );
}