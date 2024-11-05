import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Code2, CheckCircle2, LineChart, Rocket } from 'lucide-react';

export default function OurProcess() {
  const processes = [
    {
      title: 'Development',
      description:
        'We handle all changes with precision. Our development process includes coding and unit testing to ensure quality.',
      icon: Code2,
    },
    {
      title: 'Quality Assurance',
      description:
        'Thorough QA processes, including manual and automated testing, guarantee that every change meets your standards.',
      icon: CheckCircle2,
    },
    {
      title: 'Improvements',
      description:
        'We optimize your site with Analytics, Lighthouse audits, SEO enhancements, Sitemap creation, and version control using GitHub.',
      icon: LineChart,
    },
    {
      title: 'DevOps',
      description:
        'Deployment and verification of updates are handled seamlessly to minimize disruption.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Our Process
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {processes.map((process, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardHeader className="space-y-4 text-center">
                <div className="mx-auto">
                  <process.icon className="w-10 h-10 md:w-12 md:h-12 text-primary" />
                </div>
                <CardTitle className="text-xl">{process.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-gray-600 text-center">
                  {process.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
