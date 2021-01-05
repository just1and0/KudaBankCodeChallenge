import React from 'react';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack'; 

import LandingPage from '../screens/AuthenticationScreens/LandingPage'
import SignUpScreen from '../screens/AuthenticationScreens/SignUpScreen'
import LoginScreen from '../screens/AuthenticationScreens/LoginScreen'

const AppFlow = createStackNavigator();


function AppFlowNavigator() {
  return (
    <AppFlow.Navigator
      screenOptions={{
        headerShown: false,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}>
      <AppFlow.Screen name="LandingPage" component={LandingPage} /> 
      <AppFlow.Screen name="SignUpScreen" component={SignUpScreen} /> 
      <AppFlow.Screen name="LoginScreen" component={LoginScreen} /> 
    </AppFlow.Navigator>
  );
}

export default AppFlowNavigator;
