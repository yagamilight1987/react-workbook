import { Stack, useRouter } from 'expo-router';
import '../global.css';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { setStatusBarStyle } from 'expo-status-bar';
import { initializeApp } from 'firebase/app';
import {
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

SplashScreen.preventAutoHideAsync();

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_apiKey,
  authDomain: process.env.EXPO_PUBLIC_authDomain,
  projectId: process.env.EXPO_PUBLIC_projectId,
  storageBucket: process.env.EXPO_PUBLIC_storageBucket,
  messagingSenderId: process.env.EXPO_PUBLIC_messagingSenderId,
  appId: process.env.EXPO_PUBLIC_appId,
  measurementId: process.env.EXPO_PUBLIC_measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default function RootLayout() {
  const router = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      router.replace('/');
    }
  });

  // Set the status bar style to light due to dark background
  useEffect(() => {
    setTimeout(() => {
      setStatusBarStyle('light');
    }, 0);
  }, []);

  // Load the fonts. Can go into a app hook.
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
