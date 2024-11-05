import Image from 'next/image';

export default function WhatWeDo() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6 text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold">What We Do</h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              At Agilify Tech Labs, we specialize in the maintenance of existing
              websites and implementation of small changes. Whether it&apos;s a text
              update, color change, or a feature enhancement, we&apos;ve got you
              covered. Our services streamline your workflow and allow your team
              to focus on what matters most.
            </p>
          </div>
          <div className="relative h-[300px] md:h-[400px] mt-6 md:mt-0">
            <Image
              src="/what-we-do.webp"
              alt="What we do"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
