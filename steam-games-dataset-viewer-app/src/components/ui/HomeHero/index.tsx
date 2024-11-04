import NextLink from 'next/link';
import { Image, Box, Heading, LinkBox, LinkOverlay, Skeleton } from '@chakra-ui/react';
import { useRandomGame } from '@/services/swr/fetcher';
import { RandomGameType } from '@/types/fetcher';

export default function HomeHero() {
  const { data, isLoading }: RandomGameType = useRandomGame();

  return (
    <Box as="section">
      <LinkBox as="article">
        <LinkOverlay as={NextLink} href={`/games/${data?.data?.game_id}`}>
          {isLoading ? (
            <Box as="section" width="full" height={{ base: 'xs', sm: 'md', md: 'container.sm' }}>
              <Skeleton height="inherit" />
            </Box>
          ) : (
            <>
              <Box as="section" width="full" height={{ base: 'xs', sm: 'md', md: 'container.sm' }}>
                <Image src={data?.data?.header_image} alt={data?.data?.name} height="inherit" width="inherit" fallback={<Skeleton height="inherit" />} />
              </Box>
              <Heading as="h1" fontSize="xl" padding={2} bg="gray.100" _dark={{ bg: 'white' }} color="black" borderBottomLeftRadius="md" borderBottomRightRadius="md">
                {data?.data?.name}
              </Heading>
            </>
          )}
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
}
