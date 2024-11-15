import React from 'react';
import { useClerk, useUser } from '@clerk/clerk-expo';
import { Redirect, useRouter } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';
import AppSafeAreaView from '@/components/AppSafeAreaView';

export default function Profile() {
  const { user } = useUser();
  const clerk = useClerk();
  const router = useRouter();

  async function handleSignOut() {
    await clerk.signOut();
    router.replace('/');
  }

  if (user === undefined) {
    return (
      <AppSafeAreaView>
        <View className="flex-1 items-center justiy-center">
          <Text className="text-secondary">Loading...</Text>
        </View>
      </AppSafeAreaView>
    );
  }

  if (user === null) {
    return <Redirect href="/(auth)/sign-in" />;
  }

  return (
    <AppSafeAreaView>
      <View>
        <Text className="text-secondary">
          {user.primaryEmailAddress?.emailAddress}
        </Text>
      </View>

      <View>
        <InfoItem label="Username" value={user.username || 'Not set'} />
        <InfoItem label="ID" value={user.id} />
        <InfoItem
          label="Created"
          value={new Date(user.createdAt!).toLocaleDateString()}
        />
        <InfoItem
          label="Last Updated"
          value={new Date(user.updatedAt!).toLocaleDateString()}
        />
      </View>

      <TouchableOpacity onPress={handleSignOut}>
        <Text className="text-secondary">Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/home')}>
        <Text className="text-secondary">Back</Text>
      </TouchableOpacity>
    </AppSafeAreaView>
  );
}

const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <View>
    <Text className="text-secondary">{label}:</Text>
    <Text className="text-secondary">{value}</Text>
  </View>
);
