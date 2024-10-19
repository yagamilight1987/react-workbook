import type { Preview } from '@storybook/react';
import theme from '../src/app/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: 'var(--yl-colors-brand-bg)' },
        { name: 'Light', value: 'var(--yl-colors-brand-bg)' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Light',
    },
    chakra: {
      theme,
    },
  },
};

export default preview;
