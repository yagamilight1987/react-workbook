import { images } from '@/constants';
import { Image } from 'react-native';

const Logo = () => {
  return (
    <Image
      source={images.logo}
      className="w-[75%] h-[77px]"
      resizeMode="contain"
    />
  );
};

export default Logo;
