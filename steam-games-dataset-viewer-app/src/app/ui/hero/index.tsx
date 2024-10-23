'use client';

import NextLink from 'next/link';
import { Box, Image, LinkBox, LinkOverlay, Skeleton } from '@chakra-ui/react';
import { useRandomGame } from '@/app/services/swr/fetcher';

export default function Hero() {
  const { data } = useRandomGame();

  return (
    <LinkBox as="article">
      <LinkOverlay as={NextLink} href={`/game/${data?.game_id}`}>
        <Box as="section" width="full" height="container.sm" position="relative">
          <Image src={data?.header_image} alt={data?.name} height="inherit" width="inherit" fallback={<Skeleton height="inherit" />} />
          {/* <Container maxW="container.xl" padding={0} position="absolute">
        <Box paddingInline={4}>
          <Heading as="h1" size="6xl">
            {data?.name}
          </Heading>
        </Box>
      </Container> */}
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
}
