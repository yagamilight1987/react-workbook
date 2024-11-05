'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function TargetAudience() {
  const t = useTranslations('target');

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              {t('title')}
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              {t('description')}
            </p>
          </div>
          <div className="mt-8 md:mt-12 relative h-[300px] md:h-[400px]">
            <Image
              src="/target-audience.jpg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
