import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import OurProcess from '@/components/OurProcess';
import Expertise from '@/components/Expertise';
import TargetAudience from '@/components/TargetAudience';
import ContactSection from '@/components/ContactSection';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <>
      <Hero />
      <WhatWeDo />
      <OurProcess />
      <Expertise />
      <TargetAudience />
      <ContactSection />
    </>
  );
}
