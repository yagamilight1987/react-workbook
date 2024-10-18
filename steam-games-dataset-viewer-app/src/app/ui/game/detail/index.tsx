'use client';

import { Text, Box, VStack, Badge, Image, Heading, Divider, AvatarGroup, SimpleGrid, LinkOverlay, LinkBox } from '@chakra-ui/react';
import HeaderImage from '@/app/components/header-image';
import BaseDetails from '@/app/components/base-details';
import EmptyData from '@/app/components/EmptyData';
import { Game } from '@/app/types/game';
import { GameDetails } from '@/app/types/game-details';
import BrowseType from '@/app/components/BrowseType';
import OsSupport from '@/app/components/OsSupport';
import { AllowedTypeValues } from '@/app/types/type-values';

type Detail = Partial<Game> & Partial<GameDetails>;

export default function ({ detail }: { detail: Detail }) {
  const buildSectionHeading = (text: string) => {
    return (
      <Heading as="h2" size="md">
        {text}
      </Heading>
    );
  };

  const buildTopSection = ({ header_image, name, positive, negative, genres, price, release_date, short_description }: Detail) => {
    return (
      <SimpleGrid spacing={4} columns={2}>
        <HeaderImage header_image={header_image} name={name} positive={positive} negative={negative} />
        <BaseDetails name={name} genres={genres} price={price} release_date={release_date} listingType="single">
          <Divider />
          {short_description && <Text>{short_description}</Text>}
        </BaseDetails>
      </SimpleGrid>
    );
  };

  const buildScreenshotSection = (screenshots: string[] | undefined) => {
    return (
      <>
        {buildSectionHeading('Screenshots')}
        {screenshots?.length ? (
          <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(16rem, 1fr))">
            {screenshots?.map((item) => (
              <Image src={item} alt={item} />
            ))}
          </SimpleGrid>
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

  return (
    <Box>
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
  );
}
