import AppSafeAreaView from '@/components/AppSafeAreaView';
import Logo from '@/components/Logo';
import { Link } from 'expo-router';
import { View, Text } from 'react-native';

const SignIn = () => {
  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <Text className="text-secondary text-sRegular tracking-widest text-2xl mt-10">
          Login
        </Text>
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
