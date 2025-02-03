'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-6">
              Dina Lou&#39;s Vision
            </h2>
            <p className="text-lg text-neutral-600 mb-4">
              &#34;Fashion is not just about clothes, it&#39;s about telling a story.&#34;
            </p>
            <p className="text-neutral-500 leading-relaxed">
              At Dina Lou, we believe in creating more than just garments. 
              We craft experiences, emotions, and memories through our carefully 
              designed collections that speak to the modern, confident individual.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative aspect-[4/3] overflow-hidden rounded-lg"
          >
            <Image
              src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
              alt="Dina Lou Design Studio"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
