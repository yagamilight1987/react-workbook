import { tagAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tagAnatomy.keys);

const baseStyle = definePartsStyle({
  // define the part you're going to style
  container: {
    bg: 'brand.secondary',
    color: 'white',
  },
});

export const tagTheme = defineMultiStyleConfig({ baseStyle });
