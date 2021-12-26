import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailScreen from './src/view/detail/DetailScreen';
import HomeScreen from './src/view/home/HomeScreen';
import ExampleScreen from './src/view/example/ExampleUi';
import SplashScreen from './src/view/splash/SplashScreen';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#6a51ae"
        />
      <NavigationContainer>
        <Stack.Navigator 
        initialRouteName="Splash"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6a51ae',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen 
            name="Splash"
            component={SplashScreen}
          />
          <Stack.Screen 
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
          />
          <Stack.Screen 
            name="Example"
            component={ExampleScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
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

export default App;