import type { Meta, StoryObj } from '@storybook/react';
import Hero from './index';
import { Container, Box, Heading } from '@chakra-ui/react';
import Header from '../header';

const meta: Meta<typeof Hero> = {
  component: Hero,
};

export default meta;

type Story = StoryObj<typeof Hero>;

export const Basic: Story = {
  render: () => <Hero />,
};

export const WithPageLayout: Story = {
  render: () => {
    return (
      <>
        <Header links={[]} />
        <Hero />
        <Container maxW="container.xl" padding={0}>
          <Box paddingInline={4}>
            <Box as="section" paddingInline={20}>
              <Heading size="4xl">Some heading</Heading>
            </Box>
          </Box>
        </Container>
      </>
    );
  },
};
