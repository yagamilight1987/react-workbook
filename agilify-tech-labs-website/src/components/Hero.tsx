'use client';

import { Button } from '@/components/ui/button';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[600px] md:h-[90vh] flex items-center py-20 md:py-0">
      <Image
        src="/hero.webp"
        alt="Hero background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8">
            {t('subtitle')}
          </p>
          <Button
            asChild
            size="lg"
            className="text-base md:text-lg w-full sm:w-auto"
          >
            <Link href="/contact">{t('cta')}</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
