'use client';

import Link from 'next/link';
import { Instagram, Facebook, Phone } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo ve Sosyal Medya */}
          <div className="space-y-4">
            <h3 className="text-2xl font-serif tracking-wider">DINA LOU</h3>
            <p className="text-white/70 text-sm">
              İtalyan modasının zarafetini keşfedin
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="https://instagram.com" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </Link>
              <Link href="https://facebook.com" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </Link>
              <Link href="tel:+901234567890" className="text-white/70 hover:text-white transition-colors">
                <Phone size={20} />
              </Link>
            </div>
          </div>

          {/* Koleksiyonlar */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Koleksiyonlar</h4>
            <ul className="space-y-2">
              {['Yeni Gelenler', 'Özel Davet', 'Milano Serisi', 'Roma Koleksiyonu'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Yardım */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">Yardım</h4>
            <ul className="space-y-2">
              {['Sipariş Takibi', 'İade ve Değişim', 'Kargo Bilgileri', 'Sıkça Sorulan Sorular'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/70 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h4 className="text-sm font-medium uppercase tracking-wider">İletişim</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>Telefon: +90 123 456 7890</li>
              <li>Email: info@dinalou.com</li>
              <li>Adres: İstanbul, Türkiye</li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Alt Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
          <p> 2024 DINA LOU. Tüm hakları saklıdır.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
            <Link href="#" className="hover:text-white transition-colors">Kullanım Koşulları</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
