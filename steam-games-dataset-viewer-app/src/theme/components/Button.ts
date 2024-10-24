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

const carouselButton = defineStyle({
  background: 'whiteAlpha.600',
  padding: '0',
  height: 'full',
  borderRadius: '0',
  _hover: {
    background: 'whiteAlpha.800',
    _disabled: {
      background: 'whiteAlpha.600',
    },
  },
});

export const buttonTheme = defineStyleConfig({
  variants: { brandPrimary, brandPrimaryActive, carouselButton },
});
