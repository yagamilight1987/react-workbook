import type { Preview } from '@storybook/react';
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';
import theme from '../src/theme';
import '../src/app/globals.css';
const dotenv = require('dotenv');

dotenv.config({ path: '.env.local' });

const customViewports = {
  PixelXL: {
    name: '720 × 992',
    styles: {
      width: '720px',
      height: '992px',
    },
  },
  iPad: {
    name: '768 × 1024',
    styles: {
      width: '768px',
      height: '1024px',
    },
  },
  iPadPro12_9_in: {
    name: '1024 × 640',
    styles: {
      width: '1024px',
      height: '640px',
    },
  },
  Laptop: {
    name: '1280 × 800',
    styles: {
      width: '1280px',
      height: '800px',
    },
  },
  LaptopLarge: {
    name: '1440 × 900',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
    // backgrounds: {
    //   values: [
    //     // 👇 Default values
    //     { name: 'Dark', value: 'var(--yl-colors-brand-bg)' },
    //     { name: 'Light', value: 'var(--yl-colors-brand-bg)' },
    //   ],
    //   // 👇 Specify which background is shown by default
    //   default: 'Light',
    // },
    chakra: {
      theme,
    },
    tags: ['autodocs'],
  },
};

export default preview;
