import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";


import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import HomeScreen from "../screens/HomeScreen";
import EventInfos from '../screens/EventInfos';
import ProfileScreen from "../screens/ProfileScreen";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Login" component={LoginScreen} />
      <Drawer.Screen name="realhome" component={HomeScreen} />
      <Drawer.Screen name="eventinfo" component={EventInfos}/>
      <Drawer.Screen name="Register" component={RegisterScreen} />
      <Drawer.Screen name="profile" component={ProfileScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;