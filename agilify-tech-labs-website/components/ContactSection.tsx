'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Message sent!',
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 md:mb-12">
          Contact Us
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
              <CardTitle>Send us a message</CardTitle>

              <div>
                <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8">
                  Ready to simplify your website maintenance? Reach out to us
                  today!
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
                    placeholder="Your Name"
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
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="min-h-[120px] md:min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
