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
      <LinkBox as="article">
        <LinkOverlay as={NextLink} href={`/games/${game.game_id}`}>
          <Card variant="elevated" height="full" width="full" colorScheme="blue">
            <GameCard.HeaderImage />
            {children && <CardBody>{children}</CardBody>}
          </Card>
        </LinkOverlay>
      </LinkBox>
    </GameCardContext.Provider>
  );
};

GameCard.HeaderImage = function HeaderImage({ minHeight = '56' }) {
  const { header_image, name } = useGameCard();
  return <Image src={header_image} alt={name} width="full" borderTopLeftRadius="inherit" borderTopRightRadius="inherit" minHeight={minHeight} />;
};

GameCard.Name = function Name() {
  const { name } = useGameCard();
  return (
    <Heading fontSize={{ base: 14, lg: 16 }} noOfLines={1}>
      {name}
    </Heading>
  );
};

GameCard.Price = function Price() {
  const { price } = useGameCard();
  return (
    <Box paddingBlock={2}>
      <PriceLabel price={price} />
    </Box>
  );
};

GameCard.Genres = function Genres() {
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
