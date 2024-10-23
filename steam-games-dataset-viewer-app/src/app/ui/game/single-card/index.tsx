'use client';

import NextLink from 'next/link';
import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import HeaderImage from '@/app/components/header-image';
import BaseDeails from '@/app/components/base-details';
import { Game } from '../../../types/game';

type GameCardProps = {
  size?: 'sm' | 'md' | 'lg';
} & Partial<Game>;

export default function GameCard({ size = 'sm', game_id, header_image, name, genres, positive, negative, price, release_date }: GameCardProps) {
  return (
    <LinkBox as="article">
      <LinkOverlay as={NextLink} href={`/game/${game_id}`}>
        <Card maxW="100%" size={size} variant="elevated">
          <HeaderImage header_image={header_image} name={name} positive={positive} negative={negative} borderRadius="md" imageBgOpacity={0.25} />
          <CardBody>
            <BaseDeails name={name} genres={genres} price={price} release_date={release_date} />
          </CardBody>
        </Card>
      </LinkOverlay>
    </LinkBox>
  );
}
