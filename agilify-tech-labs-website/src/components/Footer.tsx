import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navT = useTranslations('nav');
  const heroT = useTranslations('hero');
  const footerT = useTranslations('footer');

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
            <p className="text-sm text-gray-600">{heroT('title')}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footerT('sitemap')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {navT('home')}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {navT('about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">{footerT('contact')}</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">
                {footerT('email')}: contact@agilifytechlabs.com
              </li>
              <li className="text-sm text-gray-600">
                {footerT('phone')}: (123) 456-7890
              </li>
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
