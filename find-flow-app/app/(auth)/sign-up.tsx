import AppSafeAreaView from '@/components/AppSafeAreaView';
import Logo from '@/components/Logo';
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

const SignUp = () => {
  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 min-h-[85vh] items-center justify-center">
        <Logo />
        <Text className="text-secondary text-sRegular tracking-widest text-2xl mt-10">
          Sign up
        </Text>
        <Text className="text-secondary font-sRegular mt-10">
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
