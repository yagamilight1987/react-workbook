'use client';

import HomeHero from '@/components/ui/HomeHero';
import InTheSpotight from '@/components/ui/InTheSpotlight';
import MostDownloadedGames from '@/components/ui/MostDownloadedGames';
import { Box, Container } from '@chakra-ui/react';

export default function Home() {
  return (
    <Container maxW="container.xl" padding={0}>
      <Box paddingInline={4}>
        <HomeHero />
        <InTheSpotight />
        <MostDownloadedGames />
      </Box>
    </Container>
  );
}
