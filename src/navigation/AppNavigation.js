import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../pages/Signup';
import OtpScreen from '../pages/Otp';
import Dashboard from '../pages/dashboard';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            headerShown: false,
          }}
        /> 
      <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{
            headerShown: false,
          }}
        /> 
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
