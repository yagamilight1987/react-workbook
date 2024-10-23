import type { Meta, StoryObj } from '@storybook/react';
import GameListing from '.';

const meta: Meta<typeof GameListing> = {
  component: GameListing,
};

export default meta;

type Story = StoryObj<typeof GameListing>;

export const GameCard: Story = {
  render: () => <GameListing games={data} />,
};

export const SpotlightCard: Story = {
  render: () => <GameListing games={data} cardType="spotlight" />,
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
    header_image: '/images/card-detail.jpg',
    genres: ['Casual'],
    positive: 2,
    negative: 1,
  },
  {
    game_id: 2238430,
    name: 'Mon-Yu: Defeat Monsters And Gain Strong Weapons And Armor. You May Be Defeated, But Don’t Give Up. Become Stronger. I Believe There Will Be A Day When The Heroes Defeat The Devil King.',
    release_date: 'Sep 21, 2023',
    price: 49.99,
    header_image: '/images/card-detail.jpg',
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
    price: 0.0,
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
    game_id: 1673650,
    name: '¡Arre Unicornio!',
    price: 2.99,
    header_image: '/images/card-detail.jpg',
    genres: ['Casual', 'Indie', 'Strategy', 'Early Access'],
    positive: 11,
    negative: 0,
    release_date: '2022-03-17T18:30:00.000Z',
  },
  {
    game_id: 451590,
    name: '¡Zombies! : Faulty Towers',
    price: 1.99,
    header_image: '/images/card-detail.jpg',
    genres: ['Casual', 'Strategy'],
    positive: 1,
    negative: 0,
    release_date: '2019-08-13T18:30:00.000Z',
  },
  {
    game_id: 755980,
    name: '" DEPLOYMENT',
    price: 9.99,
    header_image: '/images/card-detail.jpg',
    genres: ['Action', 'Adventure', 'Casual', 'Indie', 'Massively Multiplayer', 'Racing', 'Sports', 'Strategy'],
    positive: 526,
    negative: 109,
    release_date: '2018-04-09T18:30:00.000Z',
  },
];
