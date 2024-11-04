import type { Meta, StoryObj } from '@storybook/react';
import MostDownloadedGames from '.';

const meta: Meta<typeof MostDownloadedGames> = {
  component: MostDownloadedGames,
};

export default meta;

type Story = StoryObj<typeof MostDownloadedGames>;

export const Basic: Story = {
  render: () => <MostDownloadedGames />,
};
