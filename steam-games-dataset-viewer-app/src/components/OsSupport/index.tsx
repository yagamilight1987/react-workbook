import { Avatar, AvatarBadge, HStack, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';
import { FaWindows } from 'react-icons/fa6';
import { FaApple } from 'react-icons/fa6';
import { FcLinux } from 'react-icons/fc';

interface OsSupportProps {
  windows?: boolean;
  apple?: boolean;
  linux?: boolean;
}

const OsSupport = ({ windows, apple, linux }: OsSupportProps) => {
  const renderBadge = (value: boolean | undefined) => {
    return (
      <AvatarBadge borderColor="white" bg="white" borderWidth={0.5}>
        {value ? <Icon as={FaCheckCircle} color="green.500" /> : <Icon as={MdError} color="red.500" />}
      </AvatarBadge>
    );
  };

  return (
    <HStack gap={10} alignItems="center">
      <Avatar size="md" icon={<Icon as={FaWindows} color="blue.500" boxSize="8" />} boxSize="16" bg="white">
        {renderBadge(windows)}
      </Avatar>

      <Avatar size="md" icon={<Icon as={FaApple} color="white" boxSize="8" />} boxSize="16" bg="black">
        {renderBadge(apple)}
      </Avatar>

      <Avatar size="md" icon={<Icon as={FcLinux} color="white" boxSize="10" />} boxSize="16" bg="white">
        {renderBadge(linux)}
      </Avatar>
    </HStack>
  );
};

export default OsSupport;
