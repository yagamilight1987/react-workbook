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
    text: 'Game Detail',
    href: '/chakra-ui/game/detail',
  },
];
