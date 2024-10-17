'use client';

import { Box, Image, Flex } from '@chakra-ui/react';
import Reaction from './reaction';
import { FiThumbsDown, FiThumbsUp } from 'react-icons/fi';

type HeaderImageProps = {
  header_image?: string;
  name?: string;
  positive?: number;
  negative?: number;
  borderRadius?: string;
  imageHeight?: string;
  imageBgOpacity?: number;
};

const HeaderImage = ({
  header_image,
  name,
  positive,
  negative,
  borderRadius,
  imageHeight = 'full',
  imageBgOpacity = 0,
}: HeaderImageProps) => {
  return (
    <Box position="relative">
      <Image
        width="100%"
        src={header_image}
        alt={name}
        roundedTopLeft={borderRadius}
        roundedTopRight={borderRadius}
        height="full"
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        bottom={0}
        right={0}
        bg={`rgba(0, 0, 0, ${imageBgOpacity})`}
        roundedTopLeft={borderRadius}
        roundedTopRight={borderRadius}
      ></Box>
      <Flex gap={4} position="absolute" right="8px" top="8px">
        <Reaction bg="green.500" value={positive} icon={<FiThumbsUp fontSize="1.5rem" />} />
        <Reaction bg="red.500" value={negative} icon={<FiThumbsDown fontSize="1.5rem" />} />
      </Flex>
    </Box>
  );
};

export default HeaderImage;
