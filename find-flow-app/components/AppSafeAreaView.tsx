import { SafeAreaView, ScrollView } from 'react-native';

const AppSafeAreaView = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppSafeAreaView;
