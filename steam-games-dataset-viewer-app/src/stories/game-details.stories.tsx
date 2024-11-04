import type { Meta, StoryObj } from '@storybook/react';
import GameDetailsPage from '@/app/games/[id]/page';
import Header from '@/components/ui/header';

const meta: Meta<typeof GameDetailsPage> = {
  title: 'Pages/Game Details',
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
