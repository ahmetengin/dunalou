'use client';

import * as React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Phone, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Ana Sayfa', href: '#hero' },
  { name: 'Koleksiyon', href: '#products' },
  { name: 'Hakkımızda', href: '#about' },
  { name: 'İletişim', href: '#contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-serif tracking-wider">
            DINA LOU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-[0.2em] hover:text-neutral-500 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              href="https://instagram.com" 
              className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
            >
              <Instagram className="w-4 h-4" />
            </Link>
            <Link 
              href="https://facebook.com"
              className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
            >
              <Facebook className="w-4 h-4" />
            </Link>
            <Link 
              href="https://wa.me/1234567890"
              className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 inline-flex items-center justify-center"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden"
          >
            <nav className="py-4 px-4">
              <div className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block text-xs uppercase tracking-[0.2em] hover:text-neutral-500 transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="mt-6 flex justify-center space-x-6 border-t pt-4">
                <Link 
                  href="https://instagram.com" 
                  className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://facebook.com"
                  className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link 
                  href="https://wa.me/1234567890"
                  className="text-xs tracking-wider hover:text-neutral-500 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4" />
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
