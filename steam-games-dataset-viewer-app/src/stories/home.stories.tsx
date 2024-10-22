import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '@/app/page';
import Header from '@/app/ui/header';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
};

export default meta;

type Story = StoryObj<typeof HomePage>;

export const Basic: Story = {
  render: () => {
    return (
      <>
        <Header links={[]} />
        <HomePage />
      </>
    );
  },
};
