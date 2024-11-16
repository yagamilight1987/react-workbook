import { View, Text } from 'react-native';
import React from 'react';
import { ClerkAPIError } from '@clerk/types';

type Props = {
  errors: ClerkAPIError[];
};

const ClerkErrors = ({ errors }: Props) => {
  return (
    errors.length > 0 && (
      <View className="bg-red-300 w-full p-2 mt-10 rounded-md">
        {errors.map((error, index) => (
          <Text key={index} className="text-red-800">
            • {error.longMessage}
          </Text>
        ))}
      </View>
    )
  );
};

export default ClerkErrors;
