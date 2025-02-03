'use client';

import * as React from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const collectionImages = [
  {
    src: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03',
    alt: 'Studio Çekimi',
  },
  {
    src: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b',
    alt: 'Moda Haftası',
  },
  {
    src: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    alt: 'Podyum',
  },
  {
    src: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b',
    alt: 'Editorial',
  },
  {
    src: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8',
    alt: 'Lookbook',
  }
];

export default function CollectionGallerySection() {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section ref={containerRef} className="bg-black text-white py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-serif tracking-wider mb-4">
            KOLEKSİYON ÇEKİMLERİ
          </h2>
          <div className="w-24 h-[1px] bg-white/30 mx-auto" />
        </motion.div>
      </div>

      <div className="relative h-[50vh] overflow-hidden">
        <motion.div 
          style={{ x }} 
          className="absolute flex space-x-8 h-full"
        >
          {[...collectionImages, ...collectionImages].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative w-[400px] h-full flex-shrink-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-sm tracking-wider">{image.alt}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
