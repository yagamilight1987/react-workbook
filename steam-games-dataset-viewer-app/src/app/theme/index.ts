import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { fonts } from '@/app/fonts';
import { buttonTheme } from './components/Button';

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

      dark: {
        bg: '#2F4858'
      }
    },
  },
  styles: {
    global: {
      body: {
      },
    },
  },
  components: {
    Button: buttonTheme,
  },
});

export default theme;
