import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
    <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
