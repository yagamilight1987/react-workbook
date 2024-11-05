import { setRequestLocale } from 'next-intl/server';
import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import OurProcess from '@/components/OurProcess';
import Expertise from '@/components/Expertise';
import TargetAudience from '@/components/TargetAudience';
import ContactSection from '@/components/ContactSection';

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
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
