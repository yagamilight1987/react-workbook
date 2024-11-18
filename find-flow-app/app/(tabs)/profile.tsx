import AppSafeAreaView from '@/components/AppSafeAreaView';
import Button from '@/components/Button';
import { getAuth } from 'firebase/auth';
import { Text, View } from 'react-native';

const Profile = () => {
  const auth = getAuth();
  const { currentUser, signOut } = auth;

  return (
    <AppSafeAreaView>
      <View className="flex-1 gap-4 px-2">
        <Text className="font-sRegular text-white">Profile</Text>
        <Text className="font-sRegular text-white">
          Email address: {currentUser?.email}
        </Text>
        <Text className="font-sRegular text-white">
          Email address Verified: {currentUser?.emailVerified}
        </Text>
        <Text className="font-sRegular text-white">
          Created on: {currentUser?.metadata.creationTime}
        </Text>
        <Text className="font-sRegular text-white">
          Last Signin: {currentUser?.metadata.lastSignInTime}
        </Text>
        <Button title="Sign out" onPress={signOut} />
      </View>
    </AppSafeAreaView>
  );
};

export default Profile;
