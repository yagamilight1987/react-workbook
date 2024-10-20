'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Image, HStack, Link, Spacer, Flex } from '@chakra-ui/react';

export default function ({ links }: { links: Array<{ text: string; href: string }> }) {
  const pathname = usePathname();

  return (
    <header>
      <Flex alignItems="center" width="100%" padding={4}>
        <Image src="images/logo.svg" alt="Logo" width="200px" height="40px" />
        <Spacer />
        <HStack spacing="24px">
          {links.map((link) => (
            <Link key={link.href} as={NextLink} href={link.href} color={`${pathname === link.href ? 'brand.primary' : 'brand-secondary'}`} fontWeight={`${pathname === link.href ? 'bold' : 'initial'}`}>
              {link.text}
            </Link>
          ))}
        </HStack>
      </Flex>
    </header>
  );
}
