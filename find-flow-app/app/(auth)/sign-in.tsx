import AppSafeAreaView from '@/components/AppSafeAreaView';
import Button from '@/components/Button';
import Logo from '@/components/Logo';
import { Link, useRouter } from 'expo-router';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

const SignIn = () => {
  const auth = getAuth();

  const [email, setEmail] = useState('ylfifa20xbox1@gmail.com');
  const [password, setPassword] = useState('FindFlow@App@123');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignin = async () => {
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.replace('/(tabs)/home');
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <Text className="text-secondary text-sRegular tracking-widest text-2xl mt-10">
          Login
        </Text>
        <View className="w-full gap-8 mt-8">
          <View className="gap-2">
            <Text className="font-sRegular text-lg text-secondary">Email</Text>
            <TextInput
              className="px-2 py-4 bg-white font-sRegular text-lg rounded"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Email"
            />
          </View>
          <View className="gap-2">
            <Text className="font-sRegular text-lg text-secondary">
              Password
            </Text>
            <TextInput
              className="px-2 py-4 bg-white font-sRegular text-lg rounded"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Password"
              secureTextEntry
            />
          </View>
          <View>
            <Button
              title="Continue"
              onPress={handleSignin}
              containerStyles={`${loading ? 'opacity-50' : 'opacity-100'}`}
            />
          </View>
        </View>
        <Text className="text-secondary font-sRegular mt-10">
          Don't have an account?{' '}
          <Link href="/sign-up" className="text-white font-sMedium">
            Sign up
          </Link>
        </Text>
      </View>
    </AppSafeAreaView>
  );
};

export default SignIn;
