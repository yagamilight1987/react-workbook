'use client';

import { Container } from '@chakra-ui/react';
import MainMenu from '@/app/components/main-menu';

export default function ({ children }: { children: Readonly<React.ReactNode> }) {
  return (
    <Container maxW="container.xl">
      <MainMenu links={links} />
      {children}
    </Container>
  );
}

const links = [
  {
    text: 'Home',
    href: '/chakra-ui',
  },

  {
    text: 'Main Menu',
    href: '/chakra-ui/main-menu',
  },

  {
    text: 'Headings',
    href: '/chakra-ui/headings',
  },

  {
    text: 'Game Card',
    href: '/chakra-ui/game/card',
  },

  {
    text: 'Game Listing',
    href: '/chakra-ui/game/listing',
  },

  {
    text: 'Game Detail',
    href: '/chakra-ui/game/detail',
  },
];
