'use client';

import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from '@/components/ui/pagination';

const Carousel = ({ children, activeIndex = 0 }: { children: React.ReactNode; activeIndex: number }) => {
  let pagination: React.ReactNode | undefined = undefined;

  const renderChildren = () => (
    <Flex width="full" height="full">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          if (child.type === Carousel.Pagination) {
            pagination = child;
          } else {
            return <Box width="full" display={activeIndex === index ? 'block' : 'none'}>{child}</Box>;
          }
        }
      })}
    </Flex>
  );

  const renderPagination = () => {
    if (pagination) {
      return pagination;
    }
  };

  return (
    <Flex direction="column" alignItems="center" gap={4} position="relative" width="full" height="full">
      {renderChildren()}
      {renderPagination()}
    </Flex>
  );
};

Carousel.Pagination = Pagination;

export default Carousel;
