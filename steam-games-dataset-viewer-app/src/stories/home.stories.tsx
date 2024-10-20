import type { Meta, StoryObj } from '@storybook/react';
import { Box, Container } from '@chakra-ui/react';
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
        <Container maxW="container.xl" padding={0}>
          <Header links={[]} />
          <Box paddingInline={4}>
            <HomePage />
          </Box>
        </Container>
      </>
    );
  },
};
