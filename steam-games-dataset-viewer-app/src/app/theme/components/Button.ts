import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

const brandPrimary = defineStyle({
  background: 'brand.secondary',
  color: 'white',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'brand.secondary',
    color: 'white',
  },
});

const brandPrimaryActive = defineStyle({
  background: 'brand.primary',
  color: 'white',

  // let's also provide dark mode alternatives
  _dark: {
    background: 'brand.primary',
    color: 'white',
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, brandPrimaryActive },
});
