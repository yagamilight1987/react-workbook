import Image from 'next/image';
import {
  Stack,
  Text,
  SimpleGrid,
  Box,
  Flex,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import cardImage from '@/public/images/card-image.jpg';

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
        {/* Image from chakraui does not work with local images */}
      <Image
        src={cardImage}
        alt="Galactic Bowling"
        style={{
          borderTopRightRadius: 'var(--card-radius)',
          borderTopLeftRadius: 'var(--card-radius)',
        }}
      />
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
                {/* Icon with as={} does not work */}
              <Icon boxSize={10}>
                <FiThumbsUp />
              </Icon>
              <p>6</p>
            </Box>
            <Box>
              <Icon boxSize={10}>
                <FiThumbsDown />
              </Icon>
              11
            </Box>
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
