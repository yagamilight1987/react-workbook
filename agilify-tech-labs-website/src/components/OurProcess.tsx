'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useTranslations } from 'next-intl';
import { Code2, CheckCircle2, LineChart, Rocket } from 'lucide-react';

export default function OurProcess() {
  const t = useTranslations('process');

  const processes = [
    {
      key: 'development',
      icon: Code2,
    },
    {
      key: 'qa',
      icon: CheckCircle2,
    },
    {
      key: 'improvements',
      icon: LineChart,
    },
    {
      key: 'devops',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          {t('title')}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {processes.map((process) => (
            <Card
              key={process.key}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="space-y-4 text-center">
                <div className="mx-auto">
                  <process.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">
                  {t(`items.${process.key}.title`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {t(`items.${process.key}.description`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
