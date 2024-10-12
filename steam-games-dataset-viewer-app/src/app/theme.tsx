import { extendTheme } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';

const theme = extendTheme({
  config: {
    cssVarPrefix: 'yl',
    initialColorMode: 'dark',
  },
  fonts: {
    body: fonts.voces.style.fontFamily,
    heading: fonts.voces.style.fontFamily,
  },
});

export default theme;
