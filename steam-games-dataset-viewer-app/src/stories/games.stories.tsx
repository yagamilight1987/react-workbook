import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/ui/header';
import GamesPage from '@/app/games/page';

const meta: Meta<typeof GamesPage> = {
  component: GamesPage,
};

export default meta;

type Story = StoryObj<typeof GamesPage>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Header links={[]} />
        <GamesPage />
      </>
    );
  },
};
