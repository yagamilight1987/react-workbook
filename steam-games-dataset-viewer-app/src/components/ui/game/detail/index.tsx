import { Text, Box, VStack, Image, Heading, Card, CardBody, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/react';
import EmptyData from '@/components/EmptyData';
import { Game } from '@/types/game';
import { GameDetails } from '@/types/game-details';
import OsSupport from '@/components/OsSupport';
import { FaChevronRight } from 'react-icons/fa6';

type Detail = Partial<Game> & Partial<GameDetails>;

export default function GameDetail({ detail }: { detail: Detail }) {
  const buildSectionHeading = (text: string) => {
    return (
      <Heading as="h2" size="md">
        {text}
      </Heading>
    );
  };

  const buildTopSection = ({ header_image, name, genres, price, release_date, short_description }: Detail) => {
    return (
      <Card variant="unstyled" bg="inherit" color="inherit" gap={10}>
        <Image width="100%" src={header_image} alt={name} rounded="inherit" height="full" />
        <CardBody>{name}{genres}{price}{release_date}{short_description}</CardBody>
      </Card>
    );
  };

  const buildScreenshotSection = (screenshots: string[] | undefined) => {
    return (
      <>
        {buildSectionHeading(`Screenshots (${screenshots?.length})`)}
        {screenshots?.length ? (
          <Box width="full" height="lg">
            {screenshots?.map((item) => (
              <Image key={item} src={item} alt={item} height="full" width="full" />
            ))}
          </Box>
        ) : (
          <EmptyData />
        )}
      </>
    );
  };

  const buildSupportedOsSection = ({ windows, mac, linux }: { windows?: boolean; mac?: boolean; linux?: boolean }) => {
    return (
      <>
        {buildSectionHeading('Supported Operating Systems')}
        <OsSupport windows={windows} apple={mac} linux={linux} />
      </>
    );
  };

  function buildBreadcrumb(game_id: number | undefined): React.ReactNode {
    return (
      <Breadcrumb spacing="8px" separator={<FaChevronRight color="brand.primary" size="10" />} paddingBlock={5}>
        <BreadcrumbItem>
          <BreadcrumbLink as={Link} href="/">
            Home
          </BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
          <BreadcrumbLink as={Link} href={`/game/${game_id}`} color="brand.primary">
            [{game_id}]
          </BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );
  }

  return (
    detail && (
      <Box>
        {buildBreadcrumb(detail.game_id)}
        {buildTopSection(detail)}
        <VStack gap={10} paddingBlock={10} alignItems="flex-start">
          {detail.detailed_description && (
            <>
              {buildSectionHeading('About the game')}
              <Text>{detail.detailed_description}</Text>
            </>
          )}
          {buildSupportedOsSection(detail)}
          {buildScreenshotSection(detail.screenshots)}
        </VStack>
      </Box>
    )
  );
}
