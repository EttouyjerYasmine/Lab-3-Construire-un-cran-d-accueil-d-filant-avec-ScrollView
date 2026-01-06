import * as React from 'react';
import { View } from 'react-native';

import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={{ flex: 1, backgroundColor: '#495E57' }}>
        <WelcomeScreen />
      </View>
    </>
  );
}