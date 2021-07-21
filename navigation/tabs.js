import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from '../screens/HomeScreen';
import EventInfos from '../screens/EventInfos';
import SettingsScreen from '../screens/SettingsScreen';
import CreateEvent from '../screens/CreateEvent';

import DrawerNavigator from './Drawer';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = ()=>{
    return(
        <Tab.Navigator
        initialRouteName="Login"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-circle' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        NavigationOptions={{
          tabBarVisible: false,
        }}
        tabBarOptions={{
          activeTintColor: 'yellow',
          inactiveTintColor: 'white',
          style: {
            backgroundColor: '#336699'
          }
        }}
      >
        <Tab.Screen name="Home" component={DrawerNavigator} />
        <Tab.Screen name="PostEvent" component={CreateEvent} />
        <Tab.Screen name="Settings" component={SettingsScreen} />

        
      </Tab.Navigator>
    );
};

export default BottomTabNavigator;