import AppSafeAreaView from '@/components/AppSafeAreaView';
import Logo from '@/components/Logo';
import { Link, useRouter } from 'expo-router';
import { Text, TextInput, View } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Button from '@/components/Button';
import { useState } from 'react';

const SignUp = () => {
  const auth = getAuth();

  const [email, setEmail] = useState('ylfifa20xbox1@gmail.com');
  const [password, setPassword] = useState('FindFlow@App@123');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignup = async () => {
    setLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;
      console.log(user.toJSON());
      if (user && user.uid) {
        return router.replace('/(tabs)/home');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] justify-center">
        <Logo />
        <Text className="text-secondary font-sRegular text-2xl mt-10">
          Sign up
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
              onPress={handleSignup}
              containerStyles={`${loading ? 'opacity-50' : 'opacity-100'}`}
            />
          </View>
        </View>
        <Text className="text-secondary font-sRegular mt-10 self-center">
          Already have an account?{' '}
          <Link href="/sign-in" className="text-white font-sMedium">
            Login
          </Link>
        </Text>
      </View>
    </AppSafeAreaView>
  );
};

export default SignUp;
