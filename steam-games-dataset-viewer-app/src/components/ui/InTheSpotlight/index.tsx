import GameCard from '@/components/GameCard';
import { useInTheSpotlight } from '@/services/swr/fetcher';
import { InTheSpotlightType } from '@/types/fetcher';
import { Box, Heading, Skeleton } from '@chakra-ui/react';
import Slider from 'react-slick';

const InTheSpotight = () => {
  const { data, isLoading }: InTheSpotlightType = useInTheSpotlight();

  return (
    <Box as="section" paddingBlock={16}>
      <Heading as="h2" fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }} fontWeight="bold" textAlign="center" paddingBlock={8}>
        In The Spotlight
      </Heading>
      {isLoading && <Skeleton height={80} />}
      {data?.data?.length && (
        <Box>
          <Slider autoplay dots infinite arrows={false} speed={500} slidesToShow={3} slidesToScroll={3}>
            {data.data.map((game) => (
              <Box paddingInline={4} key={game.game_id}>
                <GameCard game={game}>
                  <GameCard.Name />
                  <GameCard.Price />
                </GameCard>
              </Box>
            ))}
          </Slider>
        </Box>
      )}
    </Box>
  );
};

export default InTheSpotight;
