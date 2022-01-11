import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/view/detail/DetailScreen';
import HomeScreen from './src/view/home/HomeScreen';
import ExampleScreen from './src/view/example/ExampleUi';
import SplashScreen from './src/view/splash/SplashScreen';


const Stack = createNativeStackNavigator();

export default App = () => {
  return (
    // <SafeAreaView>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{title:'Features'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
    // </SafeAreaView>
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