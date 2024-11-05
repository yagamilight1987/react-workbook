'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { HeartHandshake, PiggyBank, ArrowUpRight, Trophy } from 'lucide-react';

export default function Expertise() {
  const t = useTranslations('expertise');

  const expertiseItems = [
    {
      key: 'support',
      icon: HeartHandshake,
    },
    {
      key: 'cost',
      icon: PiggyBank,
    },
    {
      key: 'scalable',
      icon: ArrowUpRight,
    },
    {
      key: 'proven',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          {t('title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseItems.map((item) => (
            <Card
              key={item.key}
              className="text-center border-none shadow hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-4">
                <div className="mx-auto">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {t(`items.${item.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600">
                  {t(`items.${item.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
