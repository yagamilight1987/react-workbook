import type { Meta, StoryObj } from '@storybook/react';
import NumberPagination from '.';

const meta: Meta<typeof NumberPagination> = {
  component: NumberPagination,
};

export default meta;

type Story = StoryObj<typeof NumberPagination>;

export const Basic: Story = {
  render: () => <NumberPagination pageCount={10} onPageChange={(selectedItem: { selected: number }) => console.log(selectedItem.selected)} />,
};

export const LargePageCount: Story = {
  render: () => <NumberPagination pageCount={10000} onPageChange={(selectedItem: { selected: number }) => console.log(selectedItem.selected)} />,
};
