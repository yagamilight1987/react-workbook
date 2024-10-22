'use client';

import { Skeleton } from '@chakra-ui/react';
import GameDetail from '@/app/ui/game/detail';
import { useGameDetails } from '@/app/services/swr/fetcher';

export default function ({ params }: { params: { id: number } }) {
  const gameDetailsResponse = useGameDetails(params.id);

  if (gameDetailsResponse.isLoading) {
    return <Skeleton />;
  }

  return <GameDetail detail={gameDetailsResponse.data} />;
}
