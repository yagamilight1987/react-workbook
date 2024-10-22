'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Image, HStack, Link, Spacer, Flex, Box, Container } from '@chakra-ui/react';

export default function ({ links }: { links: Array<{ text: string; href: string }> }) {
  const pathname = usePathname();

  return (
    <Box shadow="md">
      <Container maxW="container.xl" padding={0}>
        <Flex as="header" alignItems="center" width="100%" padding={4}>
          <Image src="/images/logo.svg" alt="Logo" width="200px" height="40px" />
          <Spacer />
          <HStack spacing="24px">
            {links.map((link) => (
              <Link key={link.href} as={NextLink} href={link.href} fontWeight={`${pathname === link.href ? 'bold' : 'initial'}`}>
                {link.text}
              </Link>
            ))}
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
