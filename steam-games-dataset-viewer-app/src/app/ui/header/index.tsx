'use client';

import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { Image, HStack, Link, Spacer, Flex, Box, Container, LinkBox, LinkOverlay } from '@chakra-ui/react';
import ColorModeToggle from '@/app/components/ColorModeToggle';

export default function ({ links }: { links: Array<{ text: string; href: string }> }) {
  const pathname = usePathname();

  return (
    <Box shadow="md">
      <Container maxW="container.xl" padding={0}>
        <Flex as="header" alignItems="center" width="100%" padding={4}>
          <LinkBox as="article">
            <LinkOverlay as={NextLink} href="/">
              <Image src="/images/logo.svg" alt="Logo" width="200px" height="40px" />
            </LinkOverlay>
          </LinkBox>
          <Spacer />
          <HStack spacing="24px">
            {links.map((link) => (
              <Link key={link.href} as={NextLink} href={link.href} fontWeight={`${pathname === link.href ? 'bold' : 'initial'}`}>
                {link.text}
              </Link>
            ))}
            <ColorModeToggle />
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
