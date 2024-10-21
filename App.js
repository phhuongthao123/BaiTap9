// App.js
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { PhoneProvider } from './PhoneContext'; // Import PhoneProvider

const Stack = createStackNavigator();

export default function App() {
  return (
    <PhoneProvider>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Stack.Navigator initialRouteName="LoginScreen">
          <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen} 
            options={{ title: 'Đăng nhập' }}
          />

          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ title: 'Trang chủ' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PhoneProvider>
  );
}
