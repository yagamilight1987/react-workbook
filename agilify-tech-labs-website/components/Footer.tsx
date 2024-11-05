import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-8 md:py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image
              src="/agilify.png"
              alt="Agilify Tech Labs"
              width={100}
              height={32}
              className="w-auto h-8"
            />
            <p className="text-sm text-gray-600">
              Your partner in seamless website maintenance and small changes.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                Email: contact@agilifytechlabs.com
              </li>
              <li className="text-sm text-gray-600">Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          © {currentYear} Agilify Tech Labs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
