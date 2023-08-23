import { View } from 'react-native';

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

// Global Decorator
export const decorators = [
  (Story) => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Story />
    </View>
  ),
];
