import Image from 'next/image';

export default function TargetAudience() {
  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
              Who We Serve
            </h2>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed">
              We cater to small companies and startups across various domains.
              If you have an existing website created by another provider and
              need reliable maintenance, we are here to help you manage it
              in-house efficiently.
            </p>
          </div>
          <div className="mt-8 md:mt-12 relative h-[300px] md:h-[400px]">
            <Image
              src="/target-audience.jpg"
              alt="Team collaboration"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
