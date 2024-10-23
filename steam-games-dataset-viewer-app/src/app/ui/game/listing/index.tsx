'use client';

import { SimpleGrid } from '@chakra-ui/react';
import GameCard from '../single-card';
import { Game } from '../../../types/game';

export default function GameListing({ games }: { games: Array<Game> }) {
  return (
    <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(16rem, 1fr))">
      {games?.map((item) => (
        <GameCard key={item.game_id} {...item} size="sm" />
      ))}
    </SimpleGrid>
  );
}
