'use client';

import {
  Stack,
  Text,
  Box,
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
} from '@chakra-ui/react';
import { Card, CardBody } from '@chakra-ui/react/card';
import { FiThumbsUp } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { FaCalendar } from 'react-icons/fa';
import { FaMoneyCheckDollar } from 'react-icons/fa6';
import { Game } from '../types/game';

type GameCardProps = {
  size: 'sm' | 'md' | 'lg';
} & Partial<Game>;

export default function GameCard({
  size,
  header_image,
  name,
  genres,
  positive,
  negative,
  price,
  release_date,
}: GameCardProps) {
  const getFormattedBadgeNumber = (value: number | undefined): string => {
    if (!value) {
      return "0";
    }

    if(value < 1000) {
      return value.toString();
    }

    if (value >= 1000 && value < 10000) {
      return `${value?.toString().substring(0, 1)}K`;
    }

    if (value >= 10000 && value < 100000) {
      return `${value?.toString().substring(0, 2)}K`;
    } else {
      return `${value?.toString().substring(0, 1)}L`;
    }
  };

  return (
    <Card maxW="xs" size={size} position="relative">
      <Box position="relative">
        {/* <Image src={header_image} alt={name} roundedTopLeft="md" roundedTopRight="md" /> */}
        <Image src="/images/card-image.jpg" alt={name} roundedTopLeft="md" roundedTopRight="md" />
        <Box
          position="absolute"
          top={0}
          left={0}
          bottom={0}
          right={0}
          bg="rgba(0, 0, 0, 0.25)"
          roundedTopLeft="md"
          roundedTopRight="md"
        ></Box>
      </Box>
      <CardBody>
        <Stack spacing="3">
          <Heading as="h2" size="md" noOfLines={1} fontWeight="bold">
            {name}
          </Heading>
          <Flex gap={2}>
            <AvatarGroup max={1} gap={6} size="sm" height="32px">
              {genres?.map((item) => (
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
          </Flex>
          <Divider />
          <Flex>
            <Flex justify="center" alignItems="center" gap="2">
              <Icon as={FaMoneyCheckDollar} fontSize="1.5rem" color="blackAlpha.700" />
              <Text fontWeight="bold">{price}</Text>
            </Flex>
            <Spacer />
            <Flex justify="center" alignItems="center" gap="2">
              <Icon as={FaCalendar} color="blackAlpha.700" />
              <Text fontWeight="bold">{release_date}</Text>
            </Flex>
          </Flex>
        </Stack>
      </CardBody>
      <Flex gap={4} position="absolute" right="8px" top="8px">
        <Avatar size="md" showBorder={true} bg="green.500" icon={<FiThumbsUp fontSize="1.5rem" />}>
          <AvatarBadge boxSize="1.25em" bg="green.500" borderWidth={1}>
            <Text fontSize="2xs">{getFormattedBadgeNumber(positive)}</Text>
          </AvatarBadge>
        </Avatar>

        <Avatar size="md" showBorder={true} bg="red.500" icon={<FiThumbsDown fontSize="1.5rem" />}>
          <AvatarBadge boxSize="1.25em" bg="red.500" borderWidth={1}>
            <Text fontSize="2xs">{getFormattedBadgeNumber(negative)}</Text>
          </AvatarBadge>
        </Avatar>
      </Flex>
    </Card>
  );
}
