'use client';
import logo from '../../public/logo.png'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Team', href: '/team' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Calendar', href: '/calendar' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-green-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src={logo}
                  alt="Helping Hands WA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-gray-900">
                  Helping Hands
                </span>
                <span className="text-sm font-medium text-green-600 -mt-1">
                  Washington
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.div
                key={item.name}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Link
                  href={item.href}
                  className={`relative px-4 py-2 text-lg font-semibold transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-green-600'
                      : 'text-gray-800 hover:text-green-600'
                  }`}
                >
                  {item.name}
                  {pathname === item.href && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-full opacity-0"
                    whileHover={{ opacity: pathname === item.href ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
            
            {/* Donate Button */}
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/donate"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-green-600 hover:to-green-700 border-2 border-transparent hover:border-green-300"
              >
                Donate Now
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-green-600 p-2 rounded-lg hover:bg-green-50 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? 'auto' : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden bg-white/98 backdrop-blur-lg border-t border-green-100 shadow-lg"
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{
                x: isOpen ? 0 : -20,
                opacity: isOpen ? 1 : 0,
              }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <Link
                href={item.href}
                className={`block px-4 py-3 text-lg font-semibold rounded-lg transition-all duration-200 ${
                  pathname === item.href
                    ? 'text-green-600 bg-green-50 border-l-4 border-green-500'
                    : 'text-gray-800 hover:text-green-600 hover:bg-green-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{
              x: isOpen ? 0 : -20,
              opacity: isOpen ? 1 : 0,
            }}
            transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
            className="pt-4"
          >
            <Link
              href="/donate"
              className="block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg font-bold text-lg text-center shadow-lg"
              onClick={() => setIsOpen(false)}
            >
              Donate Now
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}