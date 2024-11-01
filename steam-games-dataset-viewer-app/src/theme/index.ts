import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';

const config: ThemeConfig = {
  cssVarPrefix: 'yl',
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    body: fonts.voces.style.fontFamily,
    heading: fonts.voces.style.fontFamily,
  },
});

export default theme;
