'use client';

import NextLink from 'next/link';
import { Heading, LinkBox, LinkOverlay, VStack, Text, TagLabel, Tag, TagLeftIcon } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import HeaderImage from '@/app/components/header-image';
import BaseDeails from '@/app/components/base-details';
import { Game } from '../../../types/game';
import { FaDollarSign } from 'react-icons/fa6';

type SpotlightCardProps = {} & Partial<Game>;

export default function ({ game_id, name, release_date, price, positive, negative, header_image }: SpotlightCardProps) {
  return (
    <LinkBox as="article">
      <LinkOverlay as={NextLink} href={`/game/${game_id}`}>
        <Card maxW="100%" position="relative">
          <HeaderImage header_image={header_image} name={name} imageBgOpacity={0} />
          <CardBody position="absolute" bottom="10px" right="10px" padding={0}>
            <VStack flex={1} alignItems="flex-start" spacing="0">
              <Tag size="md" variant="solid">
                <Heading as="h1" fontSize="md" noOfLines={1} fontWeight="bold">
                  {name}
                </Heading>
                <TagLeftIcon as={FaDollarSign} marginInlineEnd={0} marginInlineStart={2} />
                <TagLabel>
                  <Text fontWeight="bolder" fontSize="md">{price}</Text>
                </TagLabel>
              </Tag>
            </VStack>
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
}
