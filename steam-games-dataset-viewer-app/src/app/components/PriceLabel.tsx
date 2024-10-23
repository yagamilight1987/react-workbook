import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react';
import { FaDollarSign } from 'react-icons/fa';

export default function PriceLabel({ price }: { price?: number }) {
  return price === 0 ? (
    <Tag size="md" variant="subtle" colorScheme="green">
      <TagLabel fontSize="sm">Free</TagLabel>
    </Tag>
  ) : (
    <Tag size="md" variant="subtle">
      <TagLeftIcon as={FaDollarSign} />
      <TagLabel fontSize="sm">{price}</TagLabel>
    </Tag>
  );
}
