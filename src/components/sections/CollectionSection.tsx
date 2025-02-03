'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const collections = [
  {
    id: 1,
    name: 'Sonbahar/Kış 2024',
    description: 'Sezonun en trend parçaları ile tarzınızı yansıtın',
    image: '/images/collections/a24f628aa261ee7a299a1b6cc8a794ce.jpg',
  },
  {
    id: 2,
    name: 'Özel Davet',
    description: 'Özel günleriniz için zarif ve şık tasarımlar',
    image: '/images/collections/da3a4f6939674051ff618468fe613d29.jpg',
  },
  {
    id: 3,
    name: 'Günlük Şıklık',
    description: 'Her an tarzınızı konuşturun',
    image: '/images/collections/a2229722f65bc5f6ff6534ad6764a391.jpg',
  },
];

export default function CollectionSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Koleksiyonlar</h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            İtalyan modasının en seçkin parçalarını keşfedin
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.article
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="flex flex-col items-start"
            >
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]">
                  <Image
                    src={collection.image}
                    alt={collection.name}
                    fill
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime="2024" className="text-gray-500">
                    2024
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {collection.name}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{collection.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
