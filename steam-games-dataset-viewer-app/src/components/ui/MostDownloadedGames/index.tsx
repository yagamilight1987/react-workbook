import Numeral from '@/components/Numeral';
import PriceLabel from '@/components/PriceLabel';
import { useMostDownloadedGames } from '@/services/swr/fetcher';
import { MostDownloadedGamesType } from '@/types/fetcher';
import { Game } from '@/types/game';
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, LinkBox, LinkOverlay, Text, Image, Heading, Skeleton, Box } from '@chakra-ui/react';

const MostDownloadedGames = () => {
  const { data, isLoading }: MostDownloadedGamesType = useMostDownloadedGames();

  return (
    <Box as="section" paddingBlock={16}>
      <Heading as="h2" fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }} fontWeight="bold" textAlign="center" paddingBlock={8}>
        Most Downloaded Games
      </Heading>
      {isLoading && <Skeleton height={80} />}
      {data?.data?.length && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>#</Th>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Price</Th>
                <Th>Downloads</Th>
              </Tr>
            </Thead>
            <Tbody>
              {data?.data.map((game: Partial<Game> & { median: number }, index: number) => (
                <Tr key={game.game_id}>
                  <Td>{index + 1}</Td>
                  <Td width={64}>
                    <Image src={game.header_image} alt={game.name} width="full" height={10} borderRadius="md" />
                  </Td>
                  <Td>
                    <LinkBox>
                      <LinkOverlay href={`/games/${game.game_id}`}>
                        <Text fontWeight="bold" noOfLines={1}>
                          {game.name}
                        </Text>
                      </LinkOverlay>
                    </LinkBox>
                  </Td>
                  <Td>
                    <PriceLabel price={game.price} />
                  </Td>
                  <Td>
                    <Numeral value={game.median} />
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </Box>
  );
};

export default MostDownloadedGames;
