'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Box, HStack, Link } from '@chakra-ui/react';

export default function ({ links }: { links: Array<{ text: string; href: string }> }) {
  const pathname = usePathname();

  return (
    <header>
      <Box width="100%" background="blackAlpha.100" padding={4}>
        <HStack spacing="24px" justifyContent="flex-end">
          {links.map((link) => (
            <Link
              key={link.href}
              as={NextLink}
              href={link.href}
              color={`${pathname === link.href ? 'blackAlpha.500' : 'initial'}`}
            >
              {link.text}
            </Link>
          ))}
        </HStack>
      </Box>
    </header>
  );
}
