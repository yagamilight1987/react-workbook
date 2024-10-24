import type { Meta, StoryObj } from '@storybook/react';

import GameCard from '.';

const meta: Meta<typeof GameCard> = {
  component: GameCard,
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const Basic: Story = {
  render: () => <GameCard {...game} />,
};

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
