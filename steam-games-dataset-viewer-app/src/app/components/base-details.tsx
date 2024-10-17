'use client';

import { Component, ReactNode } from 'react';
import { VStack, Text, Flex, Badge, Spacer, Heading, Divider, AvatarGroup, Tag, TagLeftIcon, TagLabel } from '@chakra-ui/react';
import { FaCalendar, FaDollarSign } from 'react-icons/fa6';

interface BaseDetailsProps {
  name?: string;
  genres?: string[];
  price?: number;
  release_date?: string;
  listingType?: 'single' | 'multiple';
  children?: ReactNode;
}

export default class BaseDeails extends Component<BaseDetailsProps> {
  render() {
    const { name, genres, price, release_date, listingType = 'multiple', children } = this.props;
    return (
      <VStack flex={1} alignItems="flex-start" spacing="3">
        <Heading as="h1" size={listingType === 'multiple' ? 'md' : 'xl'} noOfLines={listingType === 'multiple' ? 1 : Infinity} fontWeight="bold">
          {name}
        </Heading>
        <Flex gap={2}>
          <AvatarGroup max={listingType === 'multiple' ? 1 : genres?.length} gap={6} size="sm" height="32px">
            {genres?.map((item) => (
              <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
                {item}
              </Badge>
            ))}
          </AvatarGroup>
        </Flex>
        <Divider />
        <Flex width="full">
          <Tag size="md" variant="solid">
            <TagLeftIcon as={FaDollarSign} />
            <TagLabel>
              <Text fontWeight="bold">{price}</Text>
            </TagLabel>
          </Tag>
          <Spacer />
          <Tag size="md" variant="solid">
            <TagLeftIcon as={FaCalendar} />
            <TagLabel>
              <Text fontWeight="bold">{release_date}</Text>
            </TagLabel>
          </Tag>
        </Flex>
        {children}
      </VStack>
    );
  }
}
