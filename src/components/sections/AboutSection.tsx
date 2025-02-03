'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Hakkımızda</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Dina Lou, İtalyan modasının zarafetini Türkiye'ye taşıyan bir moda markasıdır. 
              Koleksiyonlarımızda kullandığımız premium kumaşlar ve özenli dikimler ile 
              sizlere en kaliteli ürünleri sunuyoruz.
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:mt-20 lg:max-w-none lg:grid-cols-12"
        >
          <div className="relative lg:order-last lg:col-span-5">
            <figure className="border-l border-indigo-600 pl-8">
              <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900">
                <p>
                  "Moda geçici, stil kalıcıdır. Dina Lou olarak amacımız, 
                  müşterilerimize sadece kıyafet değil, kendilerini özel 
                  hissettirecek bir stil sunmaktır."
                </p>
              </blockquote>
              <figcaption className="mt-8 flex gap-x-4">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900">Dina Lou</div>
                  <div className="text-gray-600">Kurucu</div>
                </div>
              </figcaption>
            </figure>
          </div>
          <div className="max-w-xl text-base leading-7 text-gray-700 lg:col-span-7">
            <p>
              2024 yılında kurulan markamız, İtalyan modasının zamansız şıklığını 
              modern dokunuşlarla birleştirerek, her kadının gardırobunda yer alması 
              gereken parçalar tasarlıyor.
            </p>
            <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Premium Kalite.</strong> Tüm ürünlerimiz İtalyan kumaşları ve işçiliği ile üretilmektedir.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Sürdürülebilirlik.</strong> Çevre dostu üretim süreçleri ve malzemeler kullanıyoruz.
                </span>
              </li>
              <li className="flex gap-x-3">
                <span className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true">•</span>
                <span>
                  <strong className="font-semibold text-gray-900">Özgün Tasarımlar.</strong> Her parça, modern İtalyan tarzını yansıtan özgün tasarımlardır.
                </span>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
