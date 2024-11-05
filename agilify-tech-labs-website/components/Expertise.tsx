import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { HeartHandshake, PiggyBank, ArrowUpRight, Trophy } from 'lucide-react';

export default function Expertise() {
  const expertiseItems = [
    {
      title: 'Dedicated Support',
      description: 'We prioritize your needs and offer personalized service.',
      icon: HeartHandshake,
    },
    {
      title: 'Cost-Effective Solutions',
      description: 'Focus on what matters; let us handle your website.',
      icon: PiggyBank,
    },
    {
      title: 'Scalable Services',
      description: 'As your business grows, so do our offerings.',
      icon: ArrowUpRight,
    },
    {
      title: 'Proven Track Record',
      description:
        'Many startups and small companies trust us for their website needs.',
      icon: Trophy,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Expertise
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {expertiseItems.map((item, index) => (
            <Card
              key={index}
              className="text-center border-none shadow hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-4">
                <div className="mx-auto">
                  <item.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
