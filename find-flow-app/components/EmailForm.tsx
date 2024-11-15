import { useState } from 'react';
import { TextInput, View, Text } from 'react-native';
import Button from './Button';

type Props = {
  onEmailSubmit: (email: string) => void;
};

const EmailForm = ({ onEmailSubmit }: Props) => {
  const [email, setEmail] = useState('');

  return (
    <View className="w-full gap-10 mt-10">
      <View className="gap-4">
        <Text className="text-secondary text-sRegular tracking-widest text-lg">
          Email Address
        </Text>
        <TextInput
          inputMode="email"
          onChangeText={setEmail}
          value={email}
          className="p-4 bg-white w-full rounded text-secondary text-sRegular"
        />
      </View>
      <Button onPress={() => onEmailSubmit(email)} title="Continue" />
    </View>
  );
};

export default EmailForm;
