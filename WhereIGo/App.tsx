import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/pages/screens/Home';
import Main from './app/pages/screens/Main';
import { NavigationContainer } from '@react-navigation/native';
import Search from './app/pages/screens/Search';
import LastSearch from './app/pages/screens/LastSearch';

// main route
const Stack = createStackNavigator();

export default function App (){
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="LastSearch" component={LastSearch} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}