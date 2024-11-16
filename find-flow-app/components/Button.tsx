import { ActivityIndicator, Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
  containerStyles?: string;
  buttonStyles?: string;
  isLoading?: boolean;
};

const Button = ({
  title,
  onPress,
  containerStyles,
  buttonStyles,
  isLoading = false,
}: Props) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={onPress}
      className={`bg-secondary-300 rounded-xl py-5 flex items-center justify-center ${containerStyles} ${
        isLoading ? 'opacity-50' : 'opacity-100'
      }`}
    >
      {isLoading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text
          className={`text-white font-sRegular tracking-widest text-lg ${buttonStyles}`}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
