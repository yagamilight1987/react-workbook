'use client';

import NextLink from 'next/link';
import { AvatarGroup, Badge, Heading, LinkBox, LinkOverlay } from '@chakra-ui/react';
import EmptyData from './EmptyData';
import { AllowedTypeValues } from '../types/type-values';

type BrowseTypeProps = { type: AllowedTypeValues; heading?: string; values: string[] | undefined; max?: number };

export default function BrowseType({ heading, type, values, max }: BrowseTypeProps) {
  return (
    <>
      {heading && (
        <Heading as="h2" size="md">
          {heading}
        </Heading>
      )}
      {!values?.length ? (
        <EmptyData />
      ) : (
        <AvatarGroup max={max} gap={6} size="xs" flexWrap="wrap">
          {values.map((item) => {
            return (
              <LinkBox as="article" key={item}>
                <Badge variant="subtle" borderRadius="lg" paddingBlock="0.5" paddingInline="3" key={item}>
                  <LinkOverlay as={NextLink} href={`/browse?type=${type}&value=${item}`}>
                    {item}
                  </LinkOverlay>
                </Badge>
              </LinkBox>
            );
          })}
        </AvatarGroup>
      )}
    </>
  );
}
