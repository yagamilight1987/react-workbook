import { useState } from 'react';
import { View, Text } from 'react-native';
import { OtpInput } from 'react-native-otp-entry';
import Button from './Button';

type Props = {
  onCodeSubmit: (code: string) => void;
};

const OneTimePasswordForm = ({ onCodeSubmit }: Props) => {
  const [code, setCode] = useState('');

  return (
    <View className="w-full items-center mt-10 gap-10">
      <Text className="text-secondary text-sRegular tracking-widest text-lg">
        Check your email to continue to your app
      </Text>

      <OtpInput
        type="numeric"
        focusColor="rgb(238, 26, 152)"
        theme={{
          containerStyle: { marginBottom: 15 },
          pinCodeTextStyle: { color: 'rgb(238, 26, 152)' },
          filledPinCodeContainerStyle: { borderColor: 'rgb(135, 0, 117)' },
        }}
        numberOfDigits={6}
        onTextChange={setCode}
      />

      <Button
        title="Continue"
        onPress={() => onCodeSubmit(code)}
        containerStyles="w-full"
      />
    </View>
  );
};

export default OneTimePasswordForm;
