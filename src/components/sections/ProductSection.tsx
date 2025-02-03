'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const products = [
  {
    id: 1,
    title: 'TIMELESS',
    name: 'İtalyan İpek Bluz',
    description: 'Zarif tasarımı ve yumuşak dokusuyla öne çıkan, her mevsim şıklığınızı tamamlayacak bluz',
    image: '/images/products/38a8d06e356e0bf8b10a66bc80f66088.jpg',
    color: 'bg-sky-50',
    textColor: 'text-sky-900',
  },
  {
    id: 2,
    title: 'NEW IN',
    name: 'Tasarım Deri Pantolon',
    description: 'Modern İtalyan kesimi ile şıklığınızı tamamlayan, konforlu deri pantolon',
    image: '/images/products/8828a044573d7958e4e71224624ec65c.jpg',
    color: 'bg-purple-50',
    textColor: 'text-purple-900',
  },
  {
    id: 3,
    title: 'SEASONAL',
    name: 'Kaşmir Kazak',
    description: 'El işçiliği detayları ve premium kaşmir kumaşı ile kış mevsiminin vazgeçilmezi',
    image: '/images/products/23f31b6a038dc221d48307e6f4125d9a.jpg',
    color: 'bg-emerald-50',
    textColor: 'text-emerald-900',
  }
];

export default function ProductSection() {
  return (
    <section className="w-full py-12">
      {products.map((product, index) => (
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className={`relative ${product.color} mb-8`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="p-12 lg:p-24 flex flex-col justify-center">
              <span className={`text-sm font-medium ${product.textColor}`}>
                {product.title}
              </span>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {product.name}
              </h2>
              <p className="mt-4 text-base text-gray-600">
                {product.description}
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-gray-800"
                >
                  Şimdi Keşfet
                </a>
              </div>
            </div>
            <div className="relative h-96 lg:h-[600px] overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
