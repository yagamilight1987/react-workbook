import type { Meta, StoryObj } from '@storybook/react';
import Header from './index';

const meta: Meta<typeof Header> = {
  component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

export const Basic: Story = {
  render: () => <Header links={dummyLinks} />,
};

const dummyLinks = [
  {
    text: 'Link 1',
    href: '/link1',
  },
  {
    text: 'Link 2',
    href: '/link2',
  },
  {
    text: 'Link 3',
    href: '/link3',
  },
  {
    text: 'Link 4',
    href: '/link4',
  },
];
