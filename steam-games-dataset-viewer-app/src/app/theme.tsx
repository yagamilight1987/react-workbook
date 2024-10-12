import { extendTheme } from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'yl',
    initialColorMode: 'dark',
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: 'inherit',
        lineHeight: 'base',
      },
      p: {
        fontSize: 'md',
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
