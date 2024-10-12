'use client';

import { Code, Heading, Stack } from '@chakra-ui/react';
import MainMenu from '@/app/components/main-menu';

export default function () {
  return (
    <Stack gap={10}>
      <Heading>Main Menu</Heading>
      <MainMenu links={dummyLinks} />
      <Code>
        {`
          const links = [
            {
              text: 'Link 1',
              href: '/link1',
            },
            {
              text: 'Link 2',
              href: '/link2',
            },
            {
              text: 'Link 3',
              href: '/link3',
            },
            {
              text: 'Link 4',
              href: '/link4',
            },
          ];

          <MainMenu links={links} />
        `}
      </Code>
    </Stack>
  );
}

const dummyLinks = [
  {
    text: 'Link 1',
    href: '/link1',
  },
  {
    text: 'Link 2',
    href: '/link2',
  },
  {
    text: 'Link 3',
    href: '/link3',
  },
  {
    text: 'Link 4',
    href: '/link4',
  },
];
