'use client';
import { Stack, Text, SimpleGrid, Box, Flex, Badge, Icon, Image } from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';

export default function ChakraUI() {
  return (
    <SimpleGrid spacing={10}>
      <Box>
        <Headings />
      </Box>
      <Cards />
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

const Cards = function () {
  return (
    <Card maxW="sm">
      <Image src="/images/card-image.jpg" alt="Galactic Bowling" rounded="md" />
      <CardBody>
        <Stack mt="6" spacing="3">
          <h5>Galactic Bowling</h5>
          <Text>Release Date: Oct 21, 2008</Text>
          <Text>Price: $19.99</Text>
          <Flex gap={2}>
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3">
              Casual
            </Badge>
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3">
              Indie
            </Badge>
            <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3">
              Sports
            </Badge>
          </Flex>
          <Flex gap={4}>
            <Box>
              <Icon as={FiThumbsUp} boxSize={10} />
              <span>6</span>
            </Box>
            <Box className='relative'>
              <Icon as={FiThumbsDown} boxSize={10} />
              11
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
