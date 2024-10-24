import type { Meta, StoryObj } from '@storybook/react';
import { Box } from '@chakra-ui/react';
import Carousel from './index';
import SpotlightCard from '../game/spotlight-card';
import { useEffect, useState } from 'react';

const meta: Meta<typeof Carousel> = {
  component: Carousel,
};

export default meta;

type Story = StoryObj<typeof Carousel>;

export const Basic: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
      <Carousel activeIndex={activeIndex}>
        <Box id="box1" h="md" w="md" bg="green.500"></Box>
        <Box id="box2" h="md" w="md" bg="teal.500"></Box>
        <Carousel.Pagination activeIndex={activeIndex} totalItems={2} onPageChange={(index: number) => setActiveIndex(index)} />
      </Carousel>
    );
  },
};

export const SingleItem: Story = {
  render: () => (
    <Carousel activeIndex={0}>
      <Box id="box1" h="md" w="md" bg="green.500"></Box>
    </Carousel>
  ),
};

export const SpotlightCardCarousel: Story = {
  name: 'Spotlight Card',
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [activeIndex1, setActiveIndex1] = useState<number>(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        if (activeIndex < games.length - 1) {
          setActiveIndex(activeIndex + 1);
        } else if (activeIndex === games.length - 1) {
          setActiveIndex(0);
        }
      }, 1500);

      return () => clearTimeout(timer);
    });

    return (
      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" gap={20} flexWrap="wrap" maxW="full">
        <Box width="full" height="sm">
          <Carousel activeIndex={activeIndex1}>
            {games.map((game) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
            <Carousel.Pagination variant="number" activeIndex={activeIndex1} totalItems={games.length} onPageChange={(index: number) => setActiveIndex1(index)} />
          </Carousel>
        </Box>
        <Box maxW="container.sm">
          <Carousel activeIndex={activeIndex}>
            {games.map((game) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
            <Carousel.Pagination variant="circle" activeIndex={activeIndex} totalItems={games.length} onPageChange={(index: number) => setActiveIndex(index)} />
          </Carousel>
        </Box>
        <Box width="400px" height="100px">
          <Carousel activeIndex={activeIndex1}>
            {games.map((game) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
            <Carousel.Pagination variant="inline" activeIndex={activeIndex1} totalItems={games.length} onPageChange={(index: number) => setActiveIndex1(index)} />
          </Carousel>
        </Box>
        <Box width="60" height="80">
          <Carousel activeIndex={activeIndex1}>
            {games.map((game) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
            <Carousel.Pagination activeIndex={activeIndex1} totalItems={games.length} onPageChange={(index: number) => setActiveIndex1(index)} />
          </Carousel>
        </Box>
        <Box width="full" height="container.md">
          <Carousel activeIndex={activeIndex1}>
            {games.map((game) => (
              <SpotlightCard key={game.game_id} {...game} />
            ))}
            <Carousel.Pagination variant="inline" activeIndex={activeIndex1} totalItems={games.length} onPageChange={(index: number) => setActiveIndex1(index)} />
          </Carousel>
        </Box>
      </Box>
    );
  },
};

export const InlineCaoursel: Story = {
  name: 'Inline Slider/Carousel',
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return (
      <Box display="flex" alignItems="center" justifyContent="center" gap={10} flexWrap="wrap" maxW="container.md">
        <Carousel activeIndex={activeIndex}>
          <Box id="box1" h="14" w="md" bg="green.500"></Box>
          <Box id="box2" h="14" w="md" bg="teal.500"></Box>
          <Carousel.Pagination variant="inline" activeIndex={activeIndex} totalItems={2} onPageChange={(index: number) => setActiveIndex(index)} />
        </Carousel>
        <Carousel activeIndex={activeIndex}>
          <Box id="box1" h="xs" w="md" bg="orange.500"></Box>
          <Box id="box2" h="xs" w="md" bg="blue.500"></Box>
          <Carousel.Pagination variant="inline" activeIndex={activeIndex} totalItems={2} onPageChange={(index: number) => setActiveIndex(index)} />
        </Carousel>
        <Carousel activeIndex={activeIndex}>
          <Box id="box1" h="lg" w="md" bg="purple.500"></Box>
          <Box id="box2" h="lg" w="md" bg="gray.500"></Box>
          <Carousel.Pagination variant="inline" activeIndex={activeIndex} totalItems={2} onPageChange={(index: number) => setActiveIndex(index)} />
        </Carousel>
      </Box>
    );
  },
};

const games = [
  {
    game_id: 2358720,
    name: 'Black Myth: Wukong',
    release_date: '2024-08-18T18:30:00.000Z',
    price: 59.99,
    positive: 663109,
    negative: 28700,
    header_image: 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2358720/header.jpg?t=1725007201',
    sumowners: 25000000,
  },
  {
    game_id: 1623730,
    name: 'Palworld',
    release_date: '2024-01-17T18:30:00.000Z',
    price: 26.99,
    positive: 12877,
    negative: 1028,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1623730/header.jpg?t=1705662211',
    sumowners: 1500000,
  },
  {
    game_id: 1203620,
    name: 'Enshrouded',
    release_date: '2024-01-23T18:30:00.000Z',
    price: 26.99,
    positive: 6209,
    negative: 1224,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1203620/header.jpg?t=1706370679',
    sumowners: 500000,
  },
  {
    game_id: 2054970,
    name: "Dragon's Dogma 2",
    release_date: '2024-03-20T18:30:00.000Z',
    price: 69.99,
    positive: 24305,
    negative: 23379,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/2054970/header.jpg?t=1711067553',
    sumowners: 500000,
  },
  {
    game_id: 1145350,
    name: 'Hades II',
    release_date: '2024-05-05T18:30:00.000Z',
    price: 29.99,
    positive: 22995,
    negative: 1294,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1145350/header.jpg?t=1715021715',
    sumowners: 250000,
  },
  {
    game_id: 2795640,
    name: 'BOXHEAD:Immortal',
    release_date: '2024-03-26T18:30:00.000Z',
    price: 4.99,
    positive: 8,
    negative: 1,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/2795640/header.jpg?t=1711817674',
    sumowners: 250000,
  },
  {
    game_id: 2446550,
    name: 'STAR WARS™: Battlefront Classic Collection',
    release_date: '2024-03-12T18:30:00.000Z',
    price: 35.01,
    positive: 1152,
    negative: 4428,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/2446550/header.jpg?t=1710392101',
    sumowners: 250000,
  },
  {
    game_id: 1928980,
    name: 'Nightingale',
    release_date: '2024-02-19T18:30:00.000Z',
    price: 26.99,
    positive: 3946,
    negative: 2684,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1928980/header.jpg?t=1708532666',
    sumowners: 250000,
  },
  {
    game_id: 2479810,
    name: 'Gray Zone Warfare',
    release_date: '2024-04-29T18:30:00.000Z',
    price: 34.99,
    positive: 17335,
    negative: 8291,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/2479810/header.jpg?t=1714668079',
    sumowners: 250000,
  },
  {
    game_id: 1405500,
    name: 'Angel at Dusk',
    release_date: '2024-01-11T18:30:00.000Z',
    price: 12.74,
    positive: 68,
    negative: 0,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1405500/header.jpg?t=1705081375',
    sumowners: 150000,
  },
];
