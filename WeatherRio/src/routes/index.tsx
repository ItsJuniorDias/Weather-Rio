import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../pages/Home';
import AddLocation from '../pages/AddLocation';

const NavigationMain = createStackNavigator();

const MainRoutes: React.FC = () => (
  <NavigationMain.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#E5E5E5' },
    }}
  >
    <NavigationMain.Screen name="Home" component={Home} />
    <NavigationMain.Screen name="AddLocation" component={AddLocation} />
  </NavigationMain.Navigator>
);

export default MainRoutes;
