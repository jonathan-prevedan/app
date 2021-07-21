import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useFonts } from 'expo-font';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createDrawerNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './navigation/tabs';
import DrawerNavigator from './navigation/Drawer';
const Tab = createBottomTabNavigator();

export default function App() {
  const [loaded] = useFonts({
    "RobotoSlab-Black" : require('./assets/fonts/RobotoSlab-Black.ttf'),
    "RobotoSlab-Bold" : require('./assets/fonts/RobotoSlab-Bold.ttf'),
    "RobotoSlab-Regular" : require('./assets/fonts/RobotoSlab-Regular.ttf'),

  })
  
  if(!loaded){
    return null;
  }
  const Drawer = createDrawerNavigator();
 

const [isLoading, setIsLoading] = useState(true)
const [user, setUser] = useState(null);

useEffect(() =>{
  setTimeout(()=>{
    setIsLoading(!isLoading);
    // setUser({})
  }, 500)
})

  return (
    <NavigationContainer>
      
     {
       isLoading ? (<Loading/>) : user ? (<BottomTabNavigator/>) : (<DrawerNavigator/>)
     }
    
    </NavigationContainer>
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
