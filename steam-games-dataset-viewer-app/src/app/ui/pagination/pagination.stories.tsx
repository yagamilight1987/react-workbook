import type { Meta, StoryObj } from '@storybook/react';
import Pagination from '.';
import { useState } from 'react';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const Basic: Story = {};

export const WithTotalCount: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return <Pagination activeIndex={activeIndex} totalItems={2} onPageChange={(index: number) => setActiveIndex(index)} />;
  },
};

export const Number: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return <Pagination variant="number" activeIndex={activeIndex} totalItems={5} onPageChange={(index: number) => setActiveIndex(index)} />;
  },
};

export const Circle: Story = {
  render: () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);

    return <Pagination variant="circle" activeIndex={activeIndex} totalItems={5} onPageChange={(index: number) => setActiveIndex(index)} />;
  },
};

