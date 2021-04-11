import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import { NavigationContainer } from '@react-navigation/native';

import store from './store';

import Routes from './routes';

const App: React.FC = () => (
  <Provider store={store}>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#E5E5E5" />
      <View style={{ flex: 1, backgroundColor: '#E5E5E5' }}>
        <Routes />
      </View>
    </NavigationContainer>
  </Provider>
);

export default App;
