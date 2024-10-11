// theme.ts (Version 2 needs to be a tsx file, due to usage of StyleFunctions)
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const theme = extendTheme({
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'inherit',
        lineHeight: 'base',
      },
      p: {
        fontSize: 'md',
        pt: '4',
        pb: '4',
      },
      h6: {
        fontSize: 'xl',
      },
      h5: {
        fontSize: '2xl',
      },
      h4: {
        fontSize: '3xl',
      },
      h3: {
        fontSize: '4xl',
      },
      h2: {
        fontSize: '5xl',
      },
      h1: {
        fontSize: '6xl',
      },
    }),
  },
});

export default theme;
