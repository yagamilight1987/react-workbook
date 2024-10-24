'use client';

import NextLink from 'next/link';
import { Component, ReactNode } from 'react';
import { VStack, Flex, Spacer, Heading, Divider, Tag, TagLeftIcon, TagLabel, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { FaCalendar } from 'react-icons/fa6';
import BrowseType from './BrowseType';
import { AllowedTypeValues } from '../types/type-values';
import PriceLabel from './PriceLabel';

interface BaseDetailsProps {
  game_id?: number;
  name?: string;
  genres?: string[];
  price?: number;
  release_date?: string;
  listingType?: 'single' | 'multiple';
  children?: ReactNode;
}

export default class BaseDeails extends Component<BaseDetailsProps> {
  render() {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
    const { game_id, name, genres, price, release_date, listingType = 'multiple', children } = this.props;
    const formattedDate = release_date ? new Date(release_date).toLocaleString('default', options) : release_date;
    return (
      <VStack flex={1} alignItems="flex-start" spacing="3">
        <LinkBox as="article">
          <LinkOverlay as={NextLink} href={`/games/${game_id}`}>
            <Heading as="h1" size={listingType === 'multiple' ? 'xs' : 'lg'} noOfLines={listingType === 'multiple' ? 1 : Infinity} fontWeight="bold">
              {name}
            </Heading>
          </LinkOverlay>
        </LinkBox>
        {genres && (
          <Flex gap={2} alignItems="center">
            <BrowseType type={AllowedTypeValues.Genres} values={genres} max={listingType === 'multiple' ? 1 : genres?.length} />
          </Flex>
        )}
        <Divider />
        <Flex width="full">
          <PriceLabel price={price} />
          <Spacer />
          {formattedDate && (
            <Tag size="md" variant="subtle">
              <TagLeftIcon as={FaCalendar} />
              <TagLabel fontSize="sm">{formattedDate}</TagLabel>
            </Tag>
          )}
        </Flex>
        {children}
      </VStack>
    );
  }
}
