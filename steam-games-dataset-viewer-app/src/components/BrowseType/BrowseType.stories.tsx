import type { Meta, StoryObj } from '@storybook/react';
import BrowseType from '.';

const meta: Meta<typeof BrowseType> = {
  component: BrowseType,
  args: {
    heading: 'Heading',
    values: ['value1', 'value2', 'value3'],
    max: 1,
  },
  argTypes: {
    heading: {
      control: { type: 'text' },
    },
    max: {
      control: { type: 'number' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof BrowseType>;

export const Basic: Story = {};

export const EmptyGenres: Story = {
  args: {
    values: [],
  },
};
