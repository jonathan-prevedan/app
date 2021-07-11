import { StatusBar } from "expo-status-bar";
import React from "react";
import { render } from "react-dom";
import { StyleSheet, Text, View } from "react-native";
import AppNavigator from './navigations/navigator'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';


export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_900Black,
  });



if (!fontsLoaded) {
  return <AppLoading />;
}

  return (
    <AppNavigator/>
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