'use client';

import { Text, Box, VStack, Badge, Image, Heading, Divider, AvatarGroup, SimpleGrid } from '@chakra-ui/react';
import HeaderImage from '@/app/components/header-image';
import BaseDeails from '@/app/components/base-details';
import { Game } from '@/app/types/game';
import { GameDetails } from '@/app/types/game-details';

export default function ({ detail }: { detail: Partial<Game> & Partial<GameDetails> }) {
  return (
    <Box>
      <SimpleGrid spacing={4} columns={2}>
        <HeaderImage header_image={detail.header_image} name={detail.name} positive={detail.positive} negative={detail.negative} imageHeight="xs" />
        <BaseDeails name={detail.name} genres={detail.genres} price={detail.price} release_date={detail.release_date} listingType="single">
          <Divider />
          {detail.short_description && <Text>{detail.short_description}</Text>}
        </BaseDeails>
      </SimpleGrid>
      {detail.detailed_description && (
        <>
          <Heading>About the game:</Heading>
          <Text>{detail.detailed_description}</Text>
        </>
      )}
      <VStack gap={2} alignItems="flex-start">
        <Heading>Genres:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.genres?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <VStack gap={2} alignItems="flex-start">
        <Heading>Supported Languages:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.supported_languages?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <VStack gap={2} alignItems="flex-start">
        <Heading>Audio Languages:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.full_audio_languages?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <VStack gap={2} alignItems="flex-start">
        <Heading>Developers:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.developers?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <VStack gap={2} alignItems="flex-start">
        <Heading>Publishers:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.publishers?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <VStack gap={2} alignItems="flex-start">
        <Heading>Categories:</Heading>
        <AvatarGroup gap={6} size="sm" height="32px">
          {detail.categories?.map((item) => (
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
              {item}
            </Badge>
          ))}
        </AvatarGroup>
      </VStack>
      <Heading>Screenshots:</Heading>
      <SimpleGrid spacing={4} templateColumns="repeat(auto-fill, minmax(16rem, 1fr))">
        {detail.screenshots?.map((item) => (
          <Image src={item} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
