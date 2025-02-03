'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
    title: 'Dina Lou Collection'
  },
  {
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    title: 'Summer Elegance'
  },
  {
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    title: 'Urban Chic'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: index === currentSlide ? 1 : 0,
            transition: { duration: 1 }
          }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ 
              opacity: index === currentSlide ? 1 : 0,
              y: index === currentSlide ? 0 : 50,
              transition: { duration: 1, delay: 0.5 }
            }}
          >
            <h1 className="text-5xl md:text-7xl font-serif tracking-wider mb-4">
              {slide.title}
            </h1>
            <p className="text-xl tracking-widest uppercase">
              Dina Lou Fashion
            </p>
          </motion.div>
        </motion.div>
      ))}
    </section>
  );
}
