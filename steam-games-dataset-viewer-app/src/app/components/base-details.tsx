'use client';

import { Component, ReactNode } from 'react';
import { VStack, Text, Flex, Badge, Spacer, Heading, Divider, AvatarGroup, Tag, TagLeftIcon, TagLabel, Center } from '@chakra-ui/react';
import { FaCalendar, FaDollarSign } from 'react-icons/fa6';
import BrowseType from './BrowseType';

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
        <Heading as="h1" size={listingType === 'multiple' ? 'md' : 'lg'} noOfLines={listingType === 'multiple' ? 1 : Infinity} fontWeight="bold">
          {name}
        </Heading>
        <Flex gap={2} alignItems="center">
          <BrowseType heading="Genres" values={genres} max={listingType === 'multiple' ? 1 : genres?.length} />
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
