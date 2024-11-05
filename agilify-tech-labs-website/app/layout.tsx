import './globals.css';
import type { Metadata } from 'next';
import { Istok_Web } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const istokWeb = Istok_Web({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Agilify Tech Labs - Website Maintenance Experts',
  description:
    'Your partner in seamless website maintenance and small changes. We handle your web needs while you focus on your business.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={istokWeb.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
