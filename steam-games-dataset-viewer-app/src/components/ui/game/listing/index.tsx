'use client';

import { SimpleGrid } from '@chakra-ui/react';
import GameCard from '../single-card';
import { Game } from '../../../types/game';
import SpotlightCard from '../spotlight-card';

export default function GameListing({ games, cardType = 'game' }: { games: Array<Partial<Game>>; cardType?: 'game' | 'spotlight' }) {
  return (
    <SimpleGrid spacing={4} columns={[1, null, 2, 4, 5]}>
      {games?.map((game) => {
        switch (cardType) {
          case 'spotlight':
            return <SpotlightCard key={game.game_id} {...game} />;
          case 'game':
          default:
            return <GameCard key={game.game_id} {...game} size="sm" />;
        }
      })}
    </SimpleGrid>
  );
}
