/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MyTabs from './pages/navigator';
import SplashScreen from './pages/splashScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="nav" component={MyTabs} />
        <Stack.Screen name="splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
