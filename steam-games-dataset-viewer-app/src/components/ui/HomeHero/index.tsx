import NextLink from 'next/link';
import { Image, Box, Heading, LinkBox, LinkOverlay, Skeleton } from '@chakra-ui/react';
import { useRandomGame } from '@/services/swr/fetcher';

export default function HomeHero() {
  const { data, isLoading } = useRandomGame();

  return (
    <Box as="section" paddingTop={2}>
      <LinkBox as="article">
        <LinkOverlay as={NextLink} href={`/games/${data?.data?.game_id}`}>
          {isLoading ? (
            <Box as="section" width="full" height={{ base: 'xs', sm: 'md', md: 'container.sm' }}>
              <Skeleton height="inherit" />
            </Box>
          ) : (
            <>
              <Heading as="h1" fontSize="xl">{data?.data?.name}</Heading>
              <Box as="section" width="full" height={{ base: 'xs', sm: 'md', md: 'container.sm' }}>
                <Image src={data?.data?.header_image} alt={data?.data?.name} height="inherit" width="inherit" fallback={<Skeleton height="inherit" />} />
              </Box>
            </>
          )}
        </LinkOverlay>
      </LinkBox>
    </Box>
  );
}
