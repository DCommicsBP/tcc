import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer, DrawerActions, useNavigation } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Main from './app/pages/screens/Main';
import Home from './app/pages/screens/Home';
import Search from './app/pages/screens/Search';
import LastSearch from './app/pages/screens/LastSearch';
import Map from './app/pages/screens/Map';



const Drawer = createDrawerNavigator();

export const Navigator = (
    <Drawer.Navigator
      statusBarAnimation="slide"
      overlayColor="dark"
      drawerType="slide"

    >
      <Drawer.Screen name="Início" component={Home} />
      <Drawer.Screen name="Nova Busca" component={Search} />
      <Drawer.Screen name="Última Busca" component={LastSearch} />
    </Drawer.Navigator>

) 


function MyDrawer() {
  
  
  return Navigator; 
}


export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
