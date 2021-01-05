/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React,{useEffect} from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppFlowNavigator from './src/Navigators/AppFlowNavigator';

import SplashScreen from 'react-native-splash-screen';

import 'react-native-gesture-handler';
import colours from './src/assets/colours';


const App = () => {
  
  useEffect(() => {
    SplashScreen.hide();
   }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: colours.black,
        }}>
        <NavigationContainer>
          <AppFlowNavigator initialRouteName={'LandingPage'} />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

export default App;
