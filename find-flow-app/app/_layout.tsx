import { Stack, useRouter, useSegments } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { setStatusBarStyle } from 'expo-status-bar';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { View, ActivityIndicator } from 'react-native';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();
  const router = useRouter();
  const segments = useSegments();

  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light');
    }, 0);
  }, []);

  const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  useEffect(() => {
    if (initializing) return;

    const inAuthGroup = segments[0] === '(auth)';
    const inProfile = segments[0] === '(tabs)' && segments[1] === 'profile';

    if (!user && inProfile) {
      router.replace('/');
    }

    if (user && inAuthGroup) {
      router.replace('/(tabs)/home');
    }
  }, [user, initializing]);

  const [fontLoaded, error] = useFonts({
    'Sono-ExtraBold': require('../assets/fonts/Sono-ExtraBold.ttf'),
    'Sono-Bold': require('../assets/fonts/Sono-Bold.ttf'),
    'Sono-SemiBold': require('../assets/fonts/Sono-SemiBold.ttf'),
    'Sono-Regular': require('../assets/fonts/Sono-Regular.ttf'),
    'Sono-Medium': require('../assets/fonts/Sono-Medium.ttf'),
    'Sono-Light': require('../assets/fonts/Sono-Light.ttf'),
    'Sono-ExtraLight': require('../assets/fonts/Sono-ExtraLight.ttf'),
  });

  useEffect(() => {
    if (fontLoaded || error) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded, error]);

  if (initializing || (!fontLoaded && !error))
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        }}
      >
        <ActivityIndicator size="large" />
      </View>
    );

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
