'use client';

import { SimpleGrid, Box } from '@chakra-ui/react';
import GameListing from '../components/game-listing';

export default function ChakraUI() {
  return (
    <SimpleGrid spacing={10}>
      <Box>
        <Headings />
      </Box>
      <GameListing />
    </SimpleGrid>
  );
}

const Headings = function () {
  return (
    <>
      <h1>Heading 1</h1>
      <h2>Heading 2</h2>
      <h3>Heading 3</h3>
      <h4>Heading 4</h4>
      <h5>Heading 5</h5>
      <h6>Heading 6</h6>
      <p>This is paragraph</p>
    </>
  );
};
