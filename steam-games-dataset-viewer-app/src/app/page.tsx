'use client';

import { Heading, SimpleGrid } from '@chakra-ui/react';

export default async function Home() {
  return (
    <SimpleGrid columns={2}>
      <Heading as="h1" fontSize="8xl" fontWeight="bold">
        In The Spotlight
      </Heading>
      {/* <SpotlightCard data={} /> */}
    </SimpleGrid>
  );
}
