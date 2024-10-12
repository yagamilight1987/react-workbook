'use client';

import {
  Code,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
} from '@chakra-ui/react';
import GameCard from '@/app/components/game-card';

export default function GameListing() {
  return (
    <>
      <Heading size="lg" marginBottom={4}>
        Game Card - Listing
        <Divider marginBlock={4} />
      </Heading>

      <Grid templateColumns="1fr 400px" gap={6}>
        <GridItem>
          <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(16rem, 1fr))">
            {data.map((item) => (
              <GameCard {...item} size="sm" />
            ))}
          </SimpleGrid>
        </GridItem>
        <GridItem>
          <Code children="const data = [];"></Code>
          <Code>
            {`
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(16rem, 1fr))">
        {data.map((item) => (
          <GameCard {...item} size="sm" />
        ))}
      </SimpleGrid>
      `}
          </Code>
        </GridItem>
      </Grid>
    </>
  );
}

const data = [
  {
    game_id: 20200,
    name: 'Galactic Bowling',
    release_date: 'Oct 21, 2008',
    price: 19.99,
    header_image: '/images/card-image.jpg',
    genres: ['Casual', 'Indie', 'Sports'],
    positive: 6,
    negative: 11,
  },
  {
    game_id: 1786750,
    name: 'Runaway Princess',
    release_date: 'Mar 18, 2022',
    price: 3.99,
    header_image: '/images/card-image.jpg',
    genres: ['RPG'],
    positive: 0,
    negative: 0,
  },
  {
    game_id: 693400,
    name: 'Taking Valhalla VR',
    release_date: 'Oct 31, 2017',
    price: 0.99,
    header_image: '/images/card-image.jpg',
    genres: ['Action', 'Adventure', 'Casual', 'Indie', 'RPG', 'Strategy'],
    positive: 1,
    negative: 3,
  },
  {
    game_id: 23530,
    name: 'Earth Defense Force: Insect Armageddon',
    release_date: 'Dec 14, 2011',
    price: 9.99,
    header_image: '/images/card-image.jpg',
    genres: ['Action'],
    positive: 875,
    negative: 117,
  },
  {
    game_id: 1105450,
    name: 'Aartform Curvy 3D 4.0',
    release_date: 'Jan 20, 2020',
    price: 99.99,
    header_image: '/images/card-image.jpg',
    genres: ['Animation & Modeling', 'Design & Illustration'],
    positive: 8,
    negative: 2,
  },
  {
    game_id: 1720060,
    name: 'Earthquake escape',
    release_date: 'Nov 25, 2021',
    price: 199.99,
    header_image: '/images/card-image.jpg',
    genres: ['Simulation'],
    positive: 1,
    negative: 1,
  },
  {
    game_id: 1506830,
    name: 'FIFA 22',
    release_date: 'Sep 30, 2021',
    price: 59.99,
    header_image: '/images/card-image.jpg',
    genres: ['Simulation', 'Sports'],
    positive: 69322,
    negative: 17807,
  },
  {
    game_id: 1262560,
    name: 'Need for Speed™ Most Wanted',
    release_date: 'Jun 18, 2020',
    price: 19.99,
    header_image: '/images/card-image.jpg',
    genres: ['Action', 'Adventure', 'Racing'],
    positive: 8890,
    negative: 2453,
  },
];
