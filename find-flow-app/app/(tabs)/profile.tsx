import AppSafeAreaView from '@/components/AppSafeAreaView';
import { Button, Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';

const Profile = () => {
  const user = auth().currentUser;
  const router = useRouter();

  if (user && user.uid) {
    return (
      <AppSafeAreaView>
        <Text>Profile</Text>
        <View>
          <Text>Welcome back {user?.email}</Text>
          <Button title="Sign out" onPress={() => auth().signOut()} />
        </View>
      </AppSafeAreaView>
    );
  } else {
    router.replace('/');
  }
};

export default Profile;
