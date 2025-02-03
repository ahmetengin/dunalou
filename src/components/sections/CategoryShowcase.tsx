'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const categories = [
  {
    title: 'İTALYAN ŞIKLIĞI',
    subtitle: 'MILANO KOLEKSIYONU',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
    align: 'right',
    bgColor: 'bg-[#f4ede4]'
  },
  {
    title: 'RİVİERA ZERAFETİ',
    subtitle: 'YAZ 2024',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    align: 'left',
    bgColor: 'bg-[#e4e8f4]'
  },
  {
    title: 'ELEGANCE',
    subtitle: 'GECE KOLEKSİYONU',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446',
    align: 'right',
    bgColor: 'bg-[#e8e4f4]'
  },
  {
    title: 'SAHNE IŞILTISI',
    subtitle: 'ÖZEL DİKİM',
    image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637',
    align: 'left',
    bgColor: 'bg-[#f4e4e8]'
  },
  {
    title: 'SOKAK RAHATLIGI',
    subtitle: 'URBAN KOLEKSIYON',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    align: 'right',
    bgColor: 'bg-[#e4f4ed]'
  }
];

function CategoryBlock({ category, index }: { category: typeof categories[0], index: number }) {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.95, 1, 1, 0.95]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="min-h-screen relative flex items-center overflow-hidden"
      style={{
        position: index === 0 ? 'relative' : 'absolute',
        top: index === 0 ? 'auto' : `${index * 100}vh`,
        left: 0,
        right: 0,
        zIndex: index
      }}
    >
      {/* Full screen image */}
      <motion.div 
        style={{ scale, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={category.image}
            alt={category.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </motion.div>

      {/* Content overlay */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, x: category.align === 'right' ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ 
            duration: 0.8, 
            delay: 0.3,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          className={`${
            category.align === 'right' ? 'ml-8 md:ml-24' : 'mr-8 md:mr-24 ml-auto'
          } max-w-xl`}
        >
          <div className="relative">
            <motion.h2 
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-5xl md:text-8xl font-serif tracking-wider mb-4 relative text-white"
            >
              <span className="relative">
                {category.title}
                <motion.div 
                  className="absolute -bottom-2 left-0 w-full h-[2px] bg-white/50"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </motion.h2>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-2xl tracking-[0.2em] text-white/80 font-light"
            >
              {category.subtitle}
            </motion.p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function CategoryShowcase() {
  return (
    <section className="relative" style={{ height: `${categories.length * 100}vh` }}>
      {categories.map((category, index) => (
        <CategoryBlock key={index} category={category} index={index} />
      ))}
    </section>
  );
}
