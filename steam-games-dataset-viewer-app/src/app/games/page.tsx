'use client';

import { useState } from 'react';
import { useGames } from '@/services/swr/fetcher';
import GameListing from '@/components/ui/game/listing';
import { Box, Container, Skeleton } from '@chakra-ui/react';
import { Game } from '@/types/game';
import NumberPagination from '@/components/NumberPagination';
import { GamesSWRType } from '@/types/fetcher';

const INITIAL_STATE = {
  page: 1,
  pageSize: 10,
  orderBy: 'name',
  orderDir: 'asc',
};

type GamesDataSWR = {
  data: { total_count: number; data: Array<Partial<Game>> };
  isLoading: boolean;
  error: unknown;
};

export default function GamesPage() {
  const [params, setParams] = useState<GamesSWRType>(INITIAL_STATE);
  const gamesData: GamesDataSWR = useGames(params);

  function handleOnPageChange(index: number) {
    setParams({
      ...params,
      page: index,
    });
  }

  return (
    <Container maxW="container.xl" padding={0}>
      <Box paddingInline={4}>
        {gamesData.isLoading ? (
          <Skeleton height="container.sm" fadeDuration={2} />
        ) : (
          <Box>
            <GameListing games={gamesData.data.data} />
            <NumberPagination pageCount={gamesData.data.total_count / params.pageSize} onPageChange={(selectedItem: { selected: number }) => handleOnPageChange(selectedItem.selected)} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
