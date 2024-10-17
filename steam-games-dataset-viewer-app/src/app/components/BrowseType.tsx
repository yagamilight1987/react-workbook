'use client';

import NextLink from 'next/link';
import { AvatarGroup, Badge, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';
import EmptyData from './EmptyData';

type BrowseTypeProps = { heading: string; values: string[] | undefined; max?: number };

export default function ({ heading, values, max }: BrowseTypeProps) {
  if (!values?.length) {
    return <EmptyData />;
  }

  return (
    <>
      <Heading as="h2" size="md">
        {heading}
      </Heading>

      <AvatarGroup max={max} gap={6} size="sm" height="32px">
        {values.map((item) => {
          return (
            <LinkBox as="article">
              <Badge variant="outline" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
                <LinkOverlay as={NextLink} href={`/browse?type=${heading.toLowerCase()}&value=${item}`}>
                  {item}
                </LinkOverlay>
              </Badge>
            </LinkBox>
          );
        })}
      </AvatarGroup>
    </>
  );
}
