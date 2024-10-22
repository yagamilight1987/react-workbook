'use client';

import { Box, Container, Skeleton } from '@chakra-ui/react';
import GameDetail from '@/app/ui/game/detail';
import { useGameDetails } from '@/app/services/swr/fetcher';

export default function ({ params }: { params: { id: number } }) {
  const gameDetailsResponse = useGameDetails(params.id);

  return (
    <Container maxW="container.xl" padding={0}>
      <Box paddingInline={4}>
        <Skeleton height="container.sm" isLoaded={!gameDetailsResponse.isLoading} fadeDuration={2}>
          <GameDetail detail={gameDetailsResponse.data} />
        </Skeleton>
      </Box>
    </Container>
  );
}
