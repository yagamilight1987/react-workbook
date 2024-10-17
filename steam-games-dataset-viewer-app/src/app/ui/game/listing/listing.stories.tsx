import type { Meta, StoryObj } from '@storybook/react';
import GameListing from '.';

const meta: Meta<typeof GameListing> = {
  component: GameListing,
};

export default meta;

type Story = StoryObj<typeof GameListing>;

export const Basic: Story = {
  render: () => <GameListing games={data} />,
};

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
    game_id: 1374330,
    name: "VR Time Travelling in Medieval Towns and Islands: Magellan's Life in ancient Europe, the Great Exploration Age, and A.D.1500 Time Machine",
    release_date: 'Aug 5, 2020',
    price: 4.99,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/1374330/header.jpg?t=1658808341',
    genres: ['Casual'],
    positive: 2,
    negative: 1,
  },
  {
    game_id: 2238430,
    name: 'Mon-Yu: Defeat Monsters And Gain Strong Weapons And Armor. You May Be Defeated, But Don’t Give Up. Become Stronger. I Believe There Will Be A Day When The Heroes Defeat The Devil King.',
    release_date: 'Sep 21, 2023',
    price: 49.99,
    header_image: 'https://cdn.akamai.steamstatic.com/steam/apps/2238430/header.jpg?t=1695279689',
    genres: ['RPG'],
    positive: 5,
    negative: 2,
  },
  {
    game_id: 1262560,
    name: 'Need for Speed™ Most Wanted',
    release_date: 'Jun 18, 2020',
    price: 19.99,
    header_image: '/images/card-detail.jpg',
    genres: ['Action', 'Adventure', 'Racing'],
    positive: 8890,
    negative: 2453,
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
];
