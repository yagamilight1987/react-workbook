import type { Meta, StoryObj } from '@storybook/react';
import HomePage from '@/app/page';
import Header from '@/components/ui/header';

const meta: Meta<typeof HomePage> = {
  title: 'Pages/Home',
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
