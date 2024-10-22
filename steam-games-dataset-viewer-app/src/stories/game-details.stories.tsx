import type { Meta, StoryObj } from '@storybook/react';
import { Box, Container } from '@chakra-ui/react';
import GameDetailsPage from '@/app/game/[id]/page';
import Header from '@/app/ui/header';

const meta: Meta<typeof GameDetailsPage> = {
  component: GameDetailsPage,
};

export default meta;

type Story = StoryObj<typeof GameDetailsPage>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Header links={[]} />
        <GameDetailsPage params={{ id: 570 }} />
      </>
    );
  },
};
