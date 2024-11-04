import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FaDollarSign } from 'react-icons/fa';

type PriceLabelProps = {
  price?: number;
};

export default function PriceLabel({ price = 0 }: PriceLabelProps) {
  return price === 0 ? (
    <Tag size="md" variant="subtle" colorScheme="green">
      <TagLabel fontSize="sm">Free</TagLabel>
    </Tag>
  ) : (
    <Tag size="md" variant="subtle" padding={1}>
      <TagLeftIcon as={FaDollarSign} height={3} width={3} />
      <TagLabel fontSize="sm">{price}</TagLabel>
    </Tag>
  );
}
