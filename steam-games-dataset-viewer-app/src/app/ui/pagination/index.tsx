'use client';

import { Button, ButtonGroup, Icon } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type PaginationProps = {
  totalItems: number;
  variant?: 'prev/next' | 'circle' | 'number' | 'inline';
  activeIndex?: number;
  onPageChange: (index: number) => void;
};

const Pagination = ({ variant = 'prev/next', activeIndex = 0, totalItems = 1, onPageChange }: PaginationProps) => {
  const handleClick = (index: number): void => {
    if (index === activeIndex) {
      return;
    }

    onPageChange(index);
  };

  const renderPrevNextVariant = () => {
    return (
      <ButtonGroup variant="brandPrimary" spacing="6">
        <Button disabled={activeIndex === 0} onClick={() => handleClick(activeIndex - 1)}>
          Prev
        </Button>
        <Button disabled={activeIndex === totalItems - 1} onClick={() => handleClick(activeIndex + 1)}>
          Next
        </Button>
      </ButtonGroup>
    );
  };

  const renderNumberVariant = () => {
    const buttons = [];
    for (let index = 0; index < totalItems; index++) {
      buttons.push(
        <Button key={index} variant={activeIndex === index ? 'brandPrimaryActive' : 'brandPrimary'} onClick={() => handleClick(index)}>
          {index + 1}
        </Button>,
      );
    }

    return <ButtonGroup spacing="6">{buttons.map((button) => button)}</ButtonGroup>;
  };

  const renderCircleVariant = () => {
    const buttons = [];
    for (let index = 0; index < totalItems; index++) {
      buttons.push(
        <Button
          key={index}
          variant={activeIndex === index ? 'brandPrimaryActive' : 'brandPrimary'}
          onClick={() => handleClick(index)}
          padding="0"
          minWidth={{ base: 2, md: 3 }}
          w={{ base: 2, md: 3 }}
          h={{ base: 2, md: 3 }}
          borderRadius="full"
        ></Button>,
      );
    }

    return <ButtonGroup spacing={{ base: 4, md: 6 }}>{buttons.map((button) => button)}</ButtonGroup>;
  };

  const renderInlineVariant = () => {
    return (
      <>
        <Button disabled={activeIndex === 0} onClick={() => handleClick(activeIndex - 1)} variant="carouselButton" position="absolute" left="0">
          <Icon boxSize="8" as={FaChevronLeft} />
        </Button>
        <Button disabled={activeIndex === totalItems - 1} onClick={() => handleClick(activeIndex + 1)} variant="carouselButton" position="absolute" right="0">
          <Icon boxSize="8" as={FaChevronRight} />
        </Button>
      </>
    );
  };

  switch (variant) {
    case 'prev/next':
      return renderPrevNextVariant();
    case 'number':
      return renderNumberVariant();
    case 'circle':
      return renderCircleVariant();
    case 'inline':
      return renderInlineVariant();
    default:
      return renderPrevNextVariant();
  }
};

export default Pagination;
