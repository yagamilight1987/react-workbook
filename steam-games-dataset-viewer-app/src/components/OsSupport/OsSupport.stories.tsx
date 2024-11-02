import type { Meta, StoryObj } from '@storybook/react';
import OsSupport from '.';

const meta: Meta<typeof OsSupport> = {
  component: OsSupport,
};

export default meta;

type Story = StoryObj<typeof OsSupport>;

export const Basic: Story = {
  render: () => <OsSupport />,
};

export const SomeSupport: Story = {
  render: () => <OsSupport windows={true} mac={true} />,
};
