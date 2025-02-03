'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { Separator } from '@/components/ui/separator';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
      title: 'Yeni Koleksiyon',
      subtitle: 'WINTER 2024',
    },
    {
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      title: 'Özel Davet',
      subtitle: 'EVENING COLLECTION',
    },
    {
      image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
      title: 'Milano Serisi',
      subtitle: 'SPRING PREVIEW',
    },
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Full-screen slider */}
      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: index === currentSlide ? 1 : 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
          style={{ zIndex: index === currentSlide ? 1 : 0 }}
        >
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 w-full">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute right-12 top-1/2 transform -translate-y-1/2 text-right w-full max-w-xl"
        >
          <h1 className="text-8xl md:text-[12rem] font-serif text-white tracking-widest leading-none">
            DINA LOU
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="text-xl md:text-2xl text-white/80 mt-4 tracking-[0.3em] uppercase"
          >
            {slides[currentSlide].subtitle}
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2 }}
            className="h-[1px] bg-white/30 mt-8"
          />
        </motion.div>

        {/* Slide indicators */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Side text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute right-8 top-1/2 transform -translate-y-1/2 text-right hidden lg:block"
        >
          <h2 className="text-white/80 text-xl tracking-widest uppercase">
            {slides[currentSlide].title}
          </h2>
          <div className="mt-4 h-[1px] w-24 ml-auto bg-white/30" />
        </motion.div>
      </div>
    </div>
  );
}
