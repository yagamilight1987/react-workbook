import AppSafeAreaView from '@/components/AppSafeAreaView';
import CustomButton from '@/components/Button';
import Logo from '@/components/Logo';
import { images } from '@/constants';
import { Link } from 'expo-router';
import { Text, View, Image } from 'react-native';
import { useAuth0 } from 'react-native-auth0';

export default function Index() {
  const { authorize, user } = useAuth0();

  const handleLogin = async () => {
    try {
      console.log('\n calling authorize');
      const credentials = await authorize();

      console.log(`\nCredentials: ${credentials}`);

      console.log('\nUser: ' + user);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <AppSafeAreaView>
        <View className="flex-1 items-center justify-center px-5 gap-8">
          <Logo />
          <Text className="font-sMedium text-white text-center text-2xl">
            Go with the flow, find what you need.
          </Text>
          <Image
            source={images.bg}
            className="h-[150px]"
            resizeMode="contain"
          />
          <Text className="font-sLight text-white text-center text-xl">
            A seamless way to explore and post listings on the go.
          </Text>
          <View className="w-full items-center">
            <CustomButton
              title="Continue with email"
              onPress={handleLogin}
              containerStyles="w-full"
            />
            <Text className="text-white my-5">or</Text>
            <Link
              href="/home"
              className="text-white font-sRegular tracking-widest"
            >
              Skip
            </Link>
          </View>
        </View>
      </AppSafeAreaView>
    </>
  );
}
