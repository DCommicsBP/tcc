
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import Search from './app/pages/screens/Search';
import LastSearch from './app/pages/screens/LastSearch';
import Home from './app/pages/screens/Home';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Draw from './app/routes/router.navigations';

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
      <Drawer.Screen name="OtherComponents" component={Draw} options={{
        drawerLabel: onkeypress = ()=> { return null}
      }} listeners={{
      }}
      
      />
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

