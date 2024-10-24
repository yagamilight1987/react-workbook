import { useColorMode, IconButton } from '@chakra-ui/react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return <IconButton aria-label="Toggle color mode" icon={colorMode === 'light' ? <IoMdMoon /> : <IoMdSunny />} onClick={toggleColorMode} variant="ghost" />;
};

export default ColorModeToggle;
