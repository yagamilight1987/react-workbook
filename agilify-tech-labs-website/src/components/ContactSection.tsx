'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useTranslations } from 'next-intl';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations('contact');
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('form.success'),
      description: t('form.successDesc'),
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          {t('title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="relative h-96 md:h-[100%] mb-8 md:mb-0">
            <Image
              src="/contact.webp"
              alt="Contact us"
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <Card>
            <CardHeader>
              <CardTitle>{t('form.title')}</CardTitle>
              <div>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                  {t('subtitle')}
                </p>

                <div className="space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary w-5 h-5" />
                    <span className="text-sm md:text-base">
                      contact@agilifytechlabs.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary w-5 h-5" />
                    <span className="text-sm md:text-base">(123) 456-7890</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder={t('form.name')}
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder={t('form.email')}
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder={t('form.message')}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[120px] md:min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t('form.submit')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
