'use client';

import { JSXElementConstructor, ReactElement } from 'react';
import { Avatar, AvatarBadge, Text } from '@chakra-ui/react';

type ReactionProps = {
  bg: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>> | undefined;
  value: number | undefined;
};

export default function ({ bg, icon, value }: ReactionProps) {
  function getFormattedBadgeNumber(value: any) {
    if (!value) {
      return '0';
    }

    if (value < 1000) {
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
  }

  return (
    <Avatar size="md" showBorder={true} bg={bg} icon={icon}>
      <AvatarBadge boxSize="1.25em" bg={bg} borderWidth={1}>
        <Text fontSize="2xs">{getFormattedBadgeNumber(value)}</Text>
      </AvatarBadge>
    </Avatar>
  );
}
