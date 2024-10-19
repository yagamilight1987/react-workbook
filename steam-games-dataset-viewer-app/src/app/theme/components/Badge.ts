import { defineStyleConfig } from '@chakra-ui/react';

const Badge = defineStyleConfig({
  baseStyle: {
    color: 'brand.secondary',
    boxShadow: 'inset 0 0 0 1px var(--yl-colors-brand-secondary)',
  },
});

export default Badge;
