
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ConfigPlace from '../pages/screens/search-screens/Configurations';
import Test from '../pages/screens/search-screens/Test';

const Stack = createStackNavigator();


export default function SearchRoutes (){
    return (
          <Stack.Navigator>
            <Stack.Screen name="Origem / Destino" component={ConfigPlace} />
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
  
      );
}