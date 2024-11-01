import { Box, Container, Skeleton } from '@chakra-ui/react';
import GameDetail from '@/components/ui/game/detail';
import { useGameDetails } from '@/services/swr/fetcher';

export default function GameDetailsPage({ params }: { params: { id: number } }) {
  const gameDetailsResponse = useGameDetails(params.id);

  return (
    <Container maxW="container.xl" padding={0}>
      <Box paddingInline={4}>
        <Skeleton height="container.sm" isLoaded={!gameDetailsResponse.isLoading} fadeDuration={2}>
          <GameDetail detail={gameDetailsResponse.data?.data} />
        </Skeleton>
      </Box>
    </Container>
  );
}
