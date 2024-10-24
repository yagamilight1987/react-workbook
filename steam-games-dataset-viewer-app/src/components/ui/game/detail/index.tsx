'use client';

import { Text, Box, VStack, Image, Heading, Divider, Card, CardBody, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Link } from '@chakra-ui/react';
import BaseDetails from '@/app/components/base-details';
import EmptyData from '@/app/components/EmptyData';
import { Game } from '@/types/game';
import { GameDetails } from '@/types/game-details';
import BrowseType from '@/app/components/BrowseType';
import OsSupport from '@/app/components/OsSupport';
import { AllowedTypeValues } from '@/types/type-values';
import Carousel from '@/app/ui/carousel';
import { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa6';

type Detail = Partial<Game> & Partial<GameDetails>;

export default function GameDetail({ detail }: { detail: Detail }) {
  const [screenshotActiveIndex, setScreenshotActiveIndex] = useState<number>(0);

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
        <CardBody>
          <BaseDetails name={name} genres={genres} price={price} release_date={release_date} listingType="single">
            <Divider />
            {short_description && <Text>{short_description}</Text>}
          </BaseDetails>
        </CardBody>
      </Card>
    );
  };

  const buildScreenshotSection = (screenshots: string[] | undefined) => {
    return (
      <>
        {buildSectionHeading('Screenshots')}
        {screenshots?.length ? (
          <Box width="full" height="lg">
            <Carousel activeIndex={screenshotActiveIndex}>
              {screenshots?.map((item) => (
                <Image key={item} src={item} alt={item} height="full" width="full" />
              ))}
              <Carousel.Pagination variant="inline" activeIndex={screenshotActiveIndex} totalItems={screenshots.length} onPageChange={(index: number) => setScreenshotActiveIndex(index)} />
            </Carousel>
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
          <BrowseType type={AllowedTypeValues.SupportedLanguages} heading="Supported Languages" values={detail.supported_languages} />
          <BrowseType type={AllowedTypeValues.AudioLanguages} heading="Audio Languages" values={detail.full_audio_languages} />
          <BrowseType type={AllowedTypeValues.Developers} heading="Developers" values={detail.developers} />
          <BrowseType type={AllowedTypeValues.Publishers} heading="Publishers" values={detail.publishers} />
          <BrowseType type={AllowedTypeValues.Categories} heading="Categories" values={detail.categories} />
        </VStack>
      </Box>
    )
  );
}
