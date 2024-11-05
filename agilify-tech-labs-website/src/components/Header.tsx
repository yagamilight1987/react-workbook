import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import { Separator } from './ui/separator';

export default function Header() {
  const t = useTranslations('nav');

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    // { href: '/contact', label: t('contact') },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/agilify.png"
            alt="Agilify Tech Labs"
            width={100}
            height={32}
            className="w-auto h-12"
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="space-x-4">
            {navItems.map((item) => (
              <>
                <NavigationMenuItem key={item.href}>
                  <Link href={item.href} legacyBehavior passHref>
                    <NavigationMenuLink className="text-sm font-medium hover:text-primary">
                      {item.label}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <Separator
                  orientation="vertical"
                  className="h-6 w-px bg-gray-300"
                />
              </>
            ))}
            <NavigationMenuItem key="language-selector">
              <LanguageSelector />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 mt-4">
                <LanguageSelector />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
