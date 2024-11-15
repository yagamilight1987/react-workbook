import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  TAB_BAR_ActiveTintColor,
  TAB_BAR_backgroundColor,
  TAB_BAR_borderTopColor,
  TAB_BAR_InactiveTintColor,
} from '@/constants/colors';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: TAB_BAR_ActiveTintColor,
          tabBarInactiveTintColor: TAB_BAR_InactiveTintColor,
          tabBarStyle: {
            backgroundColor: TAB_BAR_backgroundColor,
            borderTopColor: TAB_BAR_borderTopColor,
            borderTopWidth: 1,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => (
              <FontAwesome name="home" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ color }) => (
              <Ionicons name="settings-sharp" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
