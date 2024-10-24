'use client';

import { useState } from 'react';
import { useGames } from '@/services/swr/fetcher';
import GameListing from '@/components/ui/game/listing';
import { Box, Container, Skeleton } from '@chakra-ui/react';
import { Game } from '@/types/game';
import Pagination from '@/components/ui/pagination';
import { GamesSWRType } from '@/types/fetcher';

const INITIAL_STATE = {
  page: 1,
  pageSize: 2,
  orderBy: 'name',
  orderDir: 'asc',
};

type GamesDataSWR = {
  data: { total_records: number; data: Array<Partial<Game>> };
  isLoading: boolean;
  error: unknown;
};

export default function GamesPage() {
  const [params, setParams] = useState<GamesSWRType>(INITIAL_STATE);
  const gamesData: GamesDataSWR = useGames(params);
  const [activeIndex, setActiveIndex] = useState(0);

  function handleOnPageChange(index: number) {
    setActiveIndex(index);
    setParams({
      ...params,
      page: index + 1,
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
            <Pagination variant="number" activeIndex={activeIndex} pageSize={params.pageSize} totalItems={gamesData.data.total_records} onPageChange={(index: number) => handleOnPageChange(index)} />
          </Box>
        )}
      </Box>
    </Container>
  );
}
