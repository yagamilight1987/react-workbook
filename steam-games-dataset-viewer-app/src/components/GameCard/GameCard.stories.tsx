import type { Meta, StoryObj } from '@storybook/react';
import GameCard, { DefaultGameCard } from '.';
import { Box, Flex, SimpleGrid } from '@chakra-ui/react';

const meta: Meta<typeof GameCard> = {
  component: GameCard,
};

export default meta;

type Story = StoryObj<typeof GameCard>;

export const CarouselCard: Story = {
  render: () => (
    <Flex justifyContent="center">
      <Box width="4xl">
        <GameCard game={game}></GameCard>
      </Box>
    </Flex>
  ),
};

export const Default: Story = {
  render: () => (
    <Box borderColor="blue.500" borderWidth={2} paddingBlock={16}>
      <SimpleGrid columns={[1, 3]} gap={16} paddingInline={{ lg: 16 }}>
        <DefaultGameCard game={game} />
        <DefaultGameCard game={game} />
        <DefaultGameCard game={game} />
        <DefaultGameCard game={game} />
        <DefaultGameCard game={game} />
        <DefaultGameCard game={game} />
      </SimpleGrid>
    </Box>
  ),
};

const game = {
  game_id: 1,
  header_image: '/images/card-detail.jpg',
  name: 'Need for Speed Most Wanted Really Long Name',
  price: 9.99,
  genres: ['Action', 'Adventure'],
};
