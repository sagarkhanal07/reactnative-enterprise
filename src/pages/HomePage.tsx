import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StorybookUIRoot from '@storybookui';

import { env } from '@/env';

function HomePage() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>APP NAME: {env.EXPO_PUBLIC_APP_NAME}</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

let EntryPoint = HomePage;
if (env.EXPO_PUBLIC_STORYBOOK_ENABLED === 'true') {
  EntryPoint = StorybookUIRoot;
}

export default EntryPoint;
