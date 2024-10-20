'use client';

import { Button, ButtonGroup } from '@chakra-ui/react';

type PaginationProps = {
  totalItems: number;
  variant?: 'prev/next' | 'circle' | 'number';
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
        <Button key={index} variant={activeIndex === index ? 'brandPrimaryActive' : 'brandPrimary'} onClick={() => handleClick(index)} padding="0" minWidth="3" w="3" h="3" borderRadius="full"></Button>,
      );
    }

    return <ButtonGroup spacing="6">{buttons.map((button) => button)}</ButtonGroup>;
  };

  switch (variant) {
    case 'prev/next':
      return renderPrevNextVariant();
    case 'number':
      return renderNumberVariant();
    case 'circle':
      return renderCircleVariant();
    default:
      return renderPrevNextVariant();
  }
};

export default Pagination;
