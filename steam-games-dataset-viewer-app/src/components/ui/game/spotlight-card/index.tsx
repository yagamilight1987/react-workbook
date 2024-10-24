'use client';

import NextLink from 'next/link';
import { Heading, LinkBox, LinkOverlay, Tag, Image, VStack } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import { Game } from '@/types/game';
import PriceLabel from '@/components/PriceLabel';

type SpotlightCardProps = {} & Partial<Game>;

export default function SpotlightCard({ game_id, name, price, header_image }: SpotlightCardProps) {
  return (
    <LinkBox as="article" height="full">
      <LinkOverlay as={NextLink} href={`/games/${game_id}`}>
        <Card maxW="100%" position="relative" height="full">
          <Image width="full" height="full" src={header_image} alt={name} rounded="md" minH={40} />
          <CardBody position="absolute" bottom="10px" right="10px" marginLeft="10px" width="fit-content" padding={0}>
            <Tag size="md" variant="subtle">
              <VStack alignItems="flex-end" gap="0">
                <Heading as="h1" fontSize="sm" noOfLines={1} fontWeight="bold">
                  {name}
                </Heading>
                <PriceLabel price={price} />
              </VStack>
            </Tag>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
}
