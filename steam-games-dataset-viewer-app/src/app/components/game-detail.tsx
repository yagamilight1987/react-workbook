'use client';

import { Game } from '@/app/types/game';
import { GameDetails } from '@/app/types/game-details';
import {
  Stack,
  Text,
  Box,
  VStack,
  Flex,
  Badge,
  Icon,
  Image,
  Avatar,
  AvatarBadge,
  Spacer,
  Heading,
  Divider,
  AvatarGroup,
  HStack,
  SimpleGrid,
} from '@chakra-ui/react';
import GameCard from './game/single-card';

export default function ({ detail }: { detail: Partial<Game> & Partial<GameDetails> }) {
  return (
    <GameCard {...detail} />
  );
}

{/* <Box>
      <VStack alignItems="flex-start">
        <Image
          width="100%"
          maxHeight="lg"
          src={detail.header_image}
          alt={detail.name}
        />
        <Flex width="100%">
          <Heading size="2xl">{detail.name}</Heading>
          <Spacer />
          <Heading size="2xl">{detail.price}</Heading>
        </Flex>
        {detail.short_description && <Text>{detail.short_description}</Text>}
        {detail.detailed_description && <><Heading>About the game:</Heading><Text>{detail.detailed_description}</Text></>}
        <VStack gap={2} alignItems="flex-start">
          <Heading>Genres:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.genres?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Heading>Supported Languages:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.supported_languages?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Heading>Audio Languages:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.full_audio_languages?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Heading>Developers:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.developers?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Heading>Publishers:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.publishers?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </VStack>
        <VStack gap={2} alignItems="flex-start">
          <Heading>Categories:</Heading>
          <AvatarGroup gap={6} size="sm" height="32px">
            {detail.categories?.map((item) => (
              <Badge
                variant="outline"
                borderRadius="lg"
                paddingBlock="0.5"
                paddingInline="3"
                key={item}
              >
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
      </VStack>
    </Box> */}