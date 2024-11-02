import NextLink from 'next/link';
import { Box, Card, CardBody, Heading, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { createContext, useContext } from 'react';
import PriceLabel from '../PriceLabel';

type GameCardProps = {
  game: GameProps;
  children?: React.ReactNode;
};

type GameProps = {
  game_id?: number;
  header_image?: string;
  name?: string;
  price?: number;
  genres?: string[];
};

const GameCardContext = createContext<GameProps>({});

const useGameCard = () => useContext<GameProps>(GameCardContext);

const GameCard = ({ game, children }: GameCardProps) => {
  return (
    <GameCardContext.Provider value={game}>
      <Card variant="elevated" height="full" width="full" colorScheme="blue">
        <GameCard.HeaderImage />
        {children && <CardBody>{children}</CardBody>}
      </Card>
    </GameCardContext.Provider>
  );
};

GameCard.HeaderImage = () => {
  const { header_image } = useGameCard();
  return <Image src={header_image} width="full" borderTopLeftRadius="inherit" borderTopRightRadius="inherit" />;
};

GameCard.Name = () => {
  const { name, game_id } = useGameCard();
  return (
    <LinkBox as="article">
      <LinkOverlay as={NextLink} href={`/games/${game_id}`}>
        <Heading fontSize={{ base: 14, lg: 16 }} noOfLines={1}>
          {name}
        </Heading>
      </LinkOverlay>
    </LinkBox>
  );
};

GameCard.Price = () => {
  const { price } = useGameCard();
  return (
    <Box paddingBlock={1}>
      <PriceLabel price={price} />
    </Box>
  );
};

GameCard.Genres = () => {
  const { genres } = useGameCard();
  return (
    <Box paddingBlock={1} fontSize="12" noOfLines={1}>
      {genres?.join(', ')}
    </Box>
  );
};

export default GameCard;

export const DefaultGameCard = ({ game }: GameCardProps) => {
  return (
    <GameCard game={game}>
      <GameCard.Name />
      <GameCard.Genres />
      <GameCard.Price />
    </GameCard>
  );
};
