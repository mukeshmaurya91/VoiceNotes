import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/view/detail/DetailScreen';
import HomeScreen from './src/view/home/HomeScreen';
import ExampleApiCallUi from './src/view/example/ExampleApiCallUi';
import SplashScreen from './src/view/splash/SplashScreen';
import LoginScreen from './src/view/login/LoginScreen';
import ImageSearchScreen from './src/view/image/ImageSearchScreen';
import ExampleFlexbox from './src/view/example/ExampleFlexbox';


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Features' }}
        />
        <Stack.Screen
          name="ExampleApiCall"
          component={ExampleApiCallUi}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ImageSearch"
          component={ImageSearchScreen}
        />
         <Stack.Screen
          name="FlexBoxExample"
          component={ExampleFlexbox}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}