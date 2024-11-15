import { Stack } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { setStatusBarStyle } from 'expo-status-bar';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light');
    }, 0);
  }, []);

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

  if (!fontLoaded && !error) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
}
