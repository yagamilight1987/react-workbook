import type { Meta, StoryObj } from '@storybook/react';
import BaseDetails from '.';

const detail = {
  game_id: 2238430,
  name: 'Mon-Yu: Defeat Monsters And Gain Strong Weapons And Armor. You May Be Defeated, But Don’t Give Up. Become Stronger. I Believe There Will Be A Day When The Heroes Defeat The Devil King.',
  release_date: 'Sep 21, 2023',
  price: 49.99,
  genres: ['RPG', 'Genre 2', 'Genre 3', 'Genre 4', 'Genre 5', 'Genre 6', 'Genre 7'],
};

const meta: Meta<typeof BaseDetails> = {
  component: BaseDetails,
  parameters: {
    controls: { include: ['listingType'] },
  },
  args: {
    name: detail.name,
    genres: detail.genres,
    price: detail.price,
    release_date: detail.release_date,
    listingType: 'single',
  },
  argTypes: {
    listingType: {
      options: ['single', 'multiple'],
      control: { type: 'radio' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BaseDetails>;

export const Basic: Story = {};

export const EmptyGenres: Story = {
  args: {
    genres: [],
  },
};
