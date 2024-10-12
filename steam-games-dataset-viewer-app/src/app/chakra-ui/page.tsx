'use client';

import { Stack } from '@chakra-ui/react';
import Headings from './headings';
import GameCard from './game-card';
import GameCardListing from './game-listing';

export default function ChakraUI() {
  return (
    <Stack spacing={10}>
      <Headings />
      <GameCard />
      <GameCardListing />
    </Stack>
  );
}
