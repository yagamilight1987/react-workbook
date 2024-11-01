import { Alert, AlertIcon } from '@chakra-ui/react';
import { PiEmptyBold } from 'react-icons/pi';

export default function EmptyData() {
  return (
    <Alert status="success" variant="left-accent">
      <AlertIcon as={PiEmptyBold} />
      No data available!
    </Alert>
  );
}
