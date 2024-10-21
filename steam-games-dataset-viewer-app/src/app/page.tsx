import { useEffect, useState } from 'react';
import { Box, Heading, SimpleGrid, Skeleton } from '@chakra-ui/react';
import Carousel from './ui/carousel';
import SpotlightCard from './ui/game/spotlight-card';
import { uesMostDownloadedGames, useInTheSpotlight } from './services/swr/fetcher';
import { InTheSpotlight } from './types/fetcher';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const { data, isLoading, error }: InTheSpotlight = useInTheSpotlight();

  const mostDownloadedGamesResponse = uesMostDownloadedGames();

  useEffect(() => {
    if (data?.length) {
      const timer = setTimeout(() => {
        if (activeIndex < data.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else if (activeIndex === data.length - 1) {
          setActiveIndex(0);
        }
      }, 1500);

      return () => clearTimeout(timer);
    }
  });

  return (
    <>
      <Box as="section" paddingBlock="24">
        <SimpleGrid columns={2} marginBlock={10} alignItems="center">
          <Heading as="h1" fontSize="8xl" fontWeight="bold">
            In The Spotlight
          </Heading>
          {isLoading && <Skeleton />}
          {data?.length && (
            <Carousel activeIndex={activeIndex}>
              {data.map((game) => (
                <SpotlightCard key={game.game_id} {...game} />
              ))}
              <Carousel.Pagination variant="circle" activeIndex={activeIndex} totalItems={data.length} onPageChange={(index: number) => setActiveIndex(index)} />
            </Carousel>
          )}
        </SimpleGrid>
      </Box>
      <Box as="section" paddingBlock="24">
        <Heading as="h2" fontSize="6xl" fontWeight="bold" marginBottom={10}>
          Most Downloaded Games
        </Heading>
        {mostDownloadedGamesResponse.isLoading && <Skeleton />}
        {mostDownloadedGamesResponse.data?.length && (
          <SimpleGrid minChildWidth={['full', 'sm']} spacing={10}>
            {mostDownloadedGamesResponse.data.map((game: any) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
          </SimpleGrid>
        )}
      </Box>
    </>
  );
}
