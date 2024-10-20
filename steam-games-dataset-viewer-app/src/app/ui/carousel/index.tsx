'use client';

import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import Pagination from '../pagination';

const Carousel = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const renderChildren = () => (
    <Flex>
      {React.Children.map(children, (child, index) => {
        return <Box display={activeIndex === index ? 'block' : 'none'}>{child}</Box>;
      })}
    </Flex>
  );

  const renderPagination = () => {
    const totalItems = React.Children.count(children);
    if (totalItems > 1) {
      return <Pagination activeIndex={activeIndex} totalItems={totalItems} onPageChange={(index: number) => setActiveIndex(index)} />;
    }
  };

  return (
    <Flex direction="column" alignItems="center" gap={4}>
      {renderChildren()}
      {renderPagination()}
    </Flex>
  );
};

export default Carousel;
