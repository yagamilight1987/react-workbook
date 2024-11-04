import type { Metadata } from 'next';
import ChakraUIProvider from './charkraui-provider';
import Header from '@/components/ui/header';
import './globals.css';

export const metadata: Metadata = {
  title: 'Super Fun 21',
  description: 'Steam Games Dataset Viewer App',
};

const mainLinks = [
  {
    text: 'Home',
    href: '/',
  },

  {
    text: 'Games',
    href: '/games',
  },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ChakraUIProvider>
          <Header links={mainLinks} />
          {children}
        </ChakraUIProvider>
      </body>
    </html>
  );
}
