import { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { FirebaseError } from 'firebase/app';
import AppSafeAreaView from '@/components/AppSafeAreaView';
import Logo from '@/components/Logo';
import { Link } from 'expo-router';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = async () => {
    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      alert('Check your emails!');
    } catch (e: any) {
      const err = e as FirebaseError;
      alert('Registration failed: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <KeyboardAvoidingView behavior="padding" className="w-full gap-5 mt-7">
          <View className="gap-2">
            <Text className="text-white font-sRegular">Email</Text>
            <TextInput
              className="rounded bg-white text-secondary font-sRegular px-2 py-4 "
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
            />
          </View>
          <View className="gap-2">
            <Text className="text-white font-sRegular">Password</Text>
            <TextInput
              className="rounded bg-white text-secondary px-2 py-4 "
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Password"
            />
          </View>
          {loading ? (
            <ActivityIndicator size={'small'} style={{ margin: 28 }} />
          ) : (
            <Button onPress={signUp} title="Create account" />
          )}
        </KeyboardAvoidingView>
        <Text className="text-secondary font-sRegular mt-10">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-white font-sMedium">
            Login
          </Link>
        </Text>
      </View>
    </AppSafeAreaView>
  );
}
