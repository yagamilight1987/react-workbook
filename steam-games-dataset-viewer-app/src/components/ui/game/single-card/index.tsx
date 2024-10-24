'use client';

import { Card, CardBody } from '@chakra-ui/react/card';
import HeaderImage from '@/components/HeaderImage';
import BaseDeails from '@/components/BaseDetails';
import { Game } from '@/types/game';

type GameCardProps = {
  size?: 'sm' | 'md' | 'lg';
} & Partial<Game>;

export default function GameCard({ size = 'sm', game_id, header_image, name, genres, positive, negative, price, release_date }: GameCardProps) {
  return (
    <Card maxW="100%" size={size} variant="elevated">
      <HeaderImage header_image={header_image} name={name} positive={positive} negative={negative} borderRadius="md" imageBgOpacity={0.25} />
      <CardBody>
        <BaseDeails game_id={game_id} name={name} genres={genres} price={price} release_date={release_date} />
      </CardBody>
    </Card>
  );
}
