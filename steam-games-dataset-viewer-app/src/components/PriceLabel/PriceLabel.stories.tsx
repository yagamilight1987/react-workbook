import type { Meta, StoryObj } from '@storybook/react';
import PriceLabel from '.';

const meta: Meta<typeof PriceLabel> = {
  component: PriceLabel,
};

export default meta;

type Story = StoryObj<typeof PriceLabel>;

export const Basic: Story = {
  render: () => <PriceLabel />,
};

export const SomeSupport: Story = {
  render: () => <PriceLabel price={999.99} />,
};
