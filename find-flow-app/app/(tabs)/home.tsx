import AppSafeAreaView from '@/components/AppSafeAreaView';
import { Text, View } from 'react-native';

const Home = () => {
  return (
    <AppSafeAreaView>
      <View className="flex-1 px-5 gap-8">
        <Text>Home</Text>
      </View>
    </AppSafeAreaView>
  );
};

export default Home;
