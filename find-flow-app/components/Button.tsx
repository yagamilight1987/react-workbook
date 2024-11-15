import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  buttonStyles?: string;
};

const Button = ({ title, onPress, containerStyles, buttonStyles }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`bg-secondary-300 rounded-xl py-5 flex items-center justify-center ${containerStyles}`}
    >
      <Text
        className={`text-white font-sRegular tracking-widest text-lg ${buttonStyles}`}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
