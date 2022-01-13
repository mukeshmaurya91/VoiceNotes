import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/view/detail/DetailScreen';
import HomeScreen from './src/view/home/HomeScreen';
import ExampleApiCallUi from './src/view/example/ExampleApiCallUi';
import SplashScreen from './src/view/splash/SplashScreen';
import LoginScreen from './src/view/login/LoginScreen';


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title:'Features'}}
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
            />
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#cecece',
    alignItems: 'center',
    justifyContent: 'center',
  },
});