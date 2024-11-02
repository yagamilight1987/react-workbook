import type { Meta, StoryObj } from '@storybook/react';
import GameCard, { DefaultGameCard } from '.';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';

const meta: Meta<typeof GameCard> = {
  component: GameCard,
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const CarouselSingleCard: Story = {
  render: () => (
    <Box borderColor="blue.500" borderWidth={2} padding={16} width="3xl">
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        {games.map((game) => (
          <GameCard game={game}></GameCard>
        ))}
      </Carousel>
    </Box>
  ),
};

export const CarouselGridCard: Story = {
  render: () => (
    <Box borderColor="blue.500" borderWidth={2} paddingBlock={16}>
      <Carousel autoPlay infiniteLoop showStatus={false} showThumbs={false}>
        <SimpleGrid columns={3} gap={16} paddingInline={{ lg: 16 }}>
          <GameCard game={games[0]}></GameCard>
          <GameCard game={games[1]}></GameCard>
          <GameCard game={games[0]}></GameCard>
        </SimpleGrid>
        <SimpleGrid columns={3} gap={16} paddingInline={{ lg: 16 }}>
          <GameCard game={games[1]}></GameCard>
          <GameCard game={games[0]}></GameCard>
          <GameCard game={games[1]}></GameCard>
        </SimpleGrid>
        <SimpleGrid columns={3} gap={16} paddingInline={{ lg: 16 }}>
          <GameCard game={games[0]}></GameCard>
          <GameCard game={games[1]}></GameCard>
          <GameCard game={games[0]}></GameCard>
        </SimpleGrid>
      </Carousel>
    </Box>
  ),
};

export const Default: Story = {
  render: () => (
    <Box borderColor="blue.500" borderWidth={2} paddingBlock={16}>
      <SimpleGrid columns={[1, 3]} gap={16} paddingInline={{ lg: 16 }}>
        <DefaultGameCard game={games[0]} />
        <DefaultGameCard game={games[1]} />
        <DefaultGameCard game={games[0]} />
        <DefaultGameCard game={games[1]} />
        <DefaultGameCard game={games[0]} />
        <DefaultGameCard game={games[1]} />
      </SimpleGrid>
    </Box>
  ),
};

const games = [
  {
    game_id: 2358720,
    name: 'Black Myth: Wukong',
    release_date: '2024-08-18T18:30:00.000Z',
    price: 59.99,
    positive: 663109,
    negative: 28700,
    header_image: '/images/card-image.jpg',
    sumowners: 25000000,
  },
  {
    game_id: 1623730,
    name: 'Palworld',
    release_date: '2024-01-17T18:30:00.000Z',
    price: 26.99,
    positive: 12877,
    negative: 1028,
    header_image: '/images/card-image.jpg',
    sumowners: 1500000,
  },
  {
    game_id: 1203620,
    name: 'Enshrouded',
    release_date: '2024-01-23T18:30:00.000Z',
    price: 26.99,
    positive: 6209,
    negative: 1224,
    header_image: '/images/card-image.jpg',
    sumowners: 500000,
  },
  {
    game_id: 2054970,
    name: "Dragon's Dogma 2",
    release_date: '2024-03-20T18:30:00.000Z',
    price: 69.99,
    positive: 24305,
    negative: 23379,
    header_image: '/images/card-image.jpg',
    sumowners: 500000,
  },
  {
    game_id: 1145350,
    name: 'Hades II',
    release_date: '2024-05-05T18:30:00.000Z',
    price: 29.99,
    positive: 22995,
    negative: 1294,
    header_image: '/images/card-image.jpg',
    sumowners: 250000,
  },
  {
    game_id: 2795640,
    name: 'BOXHEAD:Immortal',
    release_date: '2024-03-26T18:30:00.000Z',
    price: 4.99,
    positive: 8,
    negative: 1,
    header_image: '/images/card-image.jpg',
    sumowners: 250000,
  },
  {
    game_id: 2446550,
    name: 'STAR WARS™: Battlefront Classic Collection',
    release_date: '2024-03-12T18:30:00.000Z',
    price: 35.01,
    positive: 1152,
    negative: 4428,
    header_image: '/images/card-image.jpg',
    sumowners: 250000,
  },
  {
    game_id: 1928980,
    name: 'Nightingale',
    release_date: '2024-02-19T18:30:00.000Z',
    price: 26.99,
    positive: 3946,
    negative: 2684,
    header_image: '/images/card-image.jpg',
    sumowners: 250000,
  },
  {
    game_id: 2479810,
    name: 'Gray Zone Warfare',
    release_date: '2024-04-29T18:30:00.000Z',
    price: 34.99,
    positive: 17335,
    negative: 8291,
    header_image: '/images/card-image.jpg',
    sumowners: 250000,
  },
  {
    game_id: 1405500,
    name: 'Angel at Dusk',
    release_date: '2024-01-11T18:30:00.000Z',
    price: 12.74,
    positive: 68,
    negative: 0,
    header_image: '/images/card-image.jpg',
    sumowners: 150000,
  },
];
