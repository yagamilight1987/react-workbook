import { Code, Divider, Grid, GridItem, Heading, Stack } from '@chakra-ui/react';
import GameCard from '@/app/components/game-card';

export default function () {
  const game = {
    game_id: 1262560,
    name: 'Need for Speed™ Most Wanted',
    release_date: 'Jun 18, 2020',
    price: 19.99,
    header_image: '/images/card-image.jpg',
    genres: ['Action', 'Adventure', 'Racing'],
    positive: 8890,
    negative: 2453,
  };

  return (
    <>
      <Heading size="lg" marginBottom={4}>
        Game Card - Single Card
        <Divider marginBlock={4} />
      </Heading>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem>
          <GameCard {...game} size="sm" />
        </GridItem>
        <GridItem>
          <Stack gap={4}>
            <Code>
              {`
                const game = {
                    game_id: 1262560,
                    name: 'Need for Speed™ Most Wanted',
                    release_date: 'Jun 18, 2020',
                    price: 19.99,
                    header_image: '/images/card-image.jpg',
                    genres: ['Action', 'Adventure', 'Racing'],
                    positive: 8890,
                    negative: 2453,
                };
            `}
            </Code>
            <Code children="<GameCard {...game} size='sm' />"></Code>
          </Stack>
        </GridItem>
      </Grid>
    </>
  );
}
