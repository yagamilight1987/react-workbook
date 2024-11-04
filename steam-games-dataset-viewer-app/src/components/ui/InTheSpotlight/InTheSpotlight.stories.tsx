import type { Meta, StoryObj } from '@storybook/react';
import InTheSpotlight from '.';

const meta: Meta<typeof InTheSpotlight> = {
  component: InTheSpotlight,
};

export default meta;

type Story = StoryObj<typeof InTheSpotlight>;

export const Basic: Story = {
  render: () => <InTheSpotlight />,
};
