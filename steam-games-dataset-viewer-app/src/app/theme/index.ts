import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';
import { tagTheme } from './components/Tag';
import { buttonTheme } from './components/Button';
import Badge from './components/Badge';

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
  colors: {
    brand: {
      bg: '#FFFFD9',
      text: '#535353',
      primary: '#F7436E',
      secondary: '#535353',
      tertiary: '#CCCCCC',
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.bg',
        color: 'brand.text',
      },
    },
  },
  components: {
    Tag: tagTheme,
    Button: buttonTheme,
    Badge,
  },
});

export default theme;
