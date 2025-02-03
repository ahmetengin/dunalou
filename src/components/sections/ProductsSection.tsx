'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Milano Blazer',
    description: 'İtalyan Kumaşı',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
  },
  {
    id: 2,
    name: 'Roma Evening',
    description: 'Akşam Koleksiyonu',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
  },
  {
    id: 3,
    name: 'Napoli Collection',
    description: 'Yaz Serisi',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d',
  },
  {
    id: 4,
    name: 'Venezia Series',
    description: 'Limited Edition',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
  },
];

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const cardRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="group relative w-full"
      style={{
        height: '100vh',
        position: index === 0 ? 'relative' : 'absolute',
        top: index === 0 ? 'auto' : `${index * 100}vh`,
        left: 0,
        right: 0,
        zIndex: index
      }}
    >
      <motion.div 
        className="absolute inset-0 w-full h-full"
        style={{ scale, opacity }}
      >
        <motion.div style={{ y }} className="absolute inset-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[1px] w-32 bg-white/50 mx-auto mb-8"
          />
          <motion.h3 
            className="text-7xl md:text-9xl font-serif text-white mb-4 tracking-wider"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {product.name}
          </motion.h3>
          <motion.p 
            className="text-xl md:text-2xl text-white/70 tracking-[0.3em] uppercase"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {product.description}
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-[1px] w-32 bg-white/50 mx-auto mt-8"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  return (
    <section className="relative bg-black" style={{ height: `${products.length * 100}vh` }}>
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 z-50 py-16 text-center"
      >
        <h2 className="text-lg tracking-[0.5em] text-white/70 uppercase font-light">
          Koleksiyon Çekimleri
        </h2>
      </motion.div>

      {/* Products */}
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </section>
  );
}
