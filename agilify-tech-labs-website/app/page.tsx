import Hero from '@/components/Hero';
import WhatWeDo from '@/components/WhatWeDo';
import OurProcess from '@/components/OurProcess';
import Expertise from '@/components/Expertise';
import TargetAudience from '@/components/TargetAudience';
import ContactSection from '@/components/ContactSection';

export default function Home() {
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
