'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Carousel from './ui/carousel';
import SpotlightCard from './ui/game/spotlight-card';
import { useMostDownloadedGames, useInTheSpotlight } from './services/swr/fetcher';
import { InTheSpotlight } from './types/fetcher';
import Hero from './ui/hero';
import GameListing from './ui/game/listing';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const inTheSpotlightResponse: InTheSpotlight = useInTheSpotlight();

  const mostDownloadedGamesResponse = useMostDownloadedGames();

  useEffect(() => {
    const length = inTheSpotlightResponse.data?.data?.length;
    if (length) {
      const timer = setTimeout(() => {
        if (activeIndex < length - 1) {
          setActiveIndex(activeIndex + 1);
        } else if (activeIndex === length - 1) {
          setActiveIndex(0);
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <Hero />
      <Container maxW="container.xl" padding={0}>
        <Box paddingInline={4}>
          <Box as="section">
            <SimpleGrid columns={{ base: 1, md: 2 }} marginBlock={10} alignItems="center" gap={10}>
              <Heading as="h1" fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }} fontWeight="bold" textAlign={{ base: 'center', md: 'left' }}>
                In The Spotlight
              </Heading>
              {inTheSpotlightResponse.isLoading && <Skeleton />}
              {inTheSpotlightResponse.data?.data?.length && (
                <Carousel activeIndex={activeIndex}>
                  {inTheSpotlightResponse.data.data.map((game) => (
                    <SpotlightCard key={game.game_id} {...game} />
                  ))}
                  <Carousel.Pagination variant="circle" activeIndex={activeIndex} totalItems={inTheSpotlightResponse.data.data.length} onPageChange={(index: number) => setActiveIndex(index)} />
                </Carousel>
              )}
            </SimpleGrid>
          </Box>
          <Box as="section">
            <Heading as="h2" fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }} fontWeight="bold" textAlign={{ base: 'center', md: 'left' }} marginBottom={10}>
              Most Downloaded Games
            </Heading>
            {mostDownloadedGamesResponse.isLoading && <Skeleton />}
            {mostDownloadedGamesResponse.data?.data?.length && <GameListing games={mostDownloadedGamesResponse.data.data} cardType="spotlight" />}
          </Box>
        </Box>
      </Container>
    </>
  );
}
