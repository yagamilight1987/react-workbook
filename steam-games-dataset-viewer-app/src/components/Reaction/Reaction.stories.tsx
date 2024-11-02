import type { Meta, StoryObj } from '@storybook/react';
import Reaction from '.';
import { FaThumbsUp } from 'react-icons/fa6';
import { FaThumbsDown } from 'react-icons/fa6';
import { Flex } from '@chakra-ui/react';

const meta: Meta<typeof Reaction> = {
  component: Reaction,
};

export default meta;

type Story = StoryObj<typeof Reaction>;

export const Basic: Story = {
  render: () => (
    <Flex gap={10}>
      <Reaction bg="green.500" icon={<FaThumbsUp />} value={10000} />
      <Reaction bg="red.500" icon={<FaThumbsDown />} value={1000} />
    </Flex>
  ),
};
