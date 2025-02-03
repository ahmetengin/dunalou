'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">İletişime Geçin</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Sorularınız için bize ulaşın, size yardımcı olmaktan mutluluk duyarız.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Showroom</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Adres</dt>
                    <dd>Bağdat Caddesi No:123</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Şehir</dt>
                    <dd>Kadıköy, İstanbul</dd>
                  </div>
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">İletişim</h3>
                <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                  <div>
                    <dt className="sr-only">Email</dt>
                    <dd>
                      <a href="mailto:info@dinalou.com" className="font-semibold text-indigo-600">
                        info@dinalou.com
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt className="sr-only">Telefon</dt>
                    <dd>+90 (212) 123 45 67</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">Sosyal Medya</h2>
              <p className="mt-4 leading-7 text-gray-600">
                Yeni koleksiyonlarımız ve etkinliklerimizden haberdar olmak için bizi takip edin.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Takip Edin</h3>
                <ul className="mt-3 space-y-1">
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                      Pinterest
                    </a>
                  </li>
                </ul>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10">
                <h3 className="text-base font-semibold leading-7 text-gray-900">Bülten</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">
                  Yeni koleksiyonlarımızdan ilk sizin haberiniz olsun.
                </p>
                <div className="mt-4">
                  <input
                    type="email"
                    placeholder="E-posta adresiniz"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                  <button
                    type="submit"
                    className="mt-4 block w-full rounded-md bg-black px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  >
                    Abone Ol
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
