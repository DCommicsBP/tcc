
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ConfigPlace from '../pages/screens/search-screens/Configurations';
import Price from '../pages/screens/search-screens/Price';

const Stack = createStackNavigator();


export default function SearchRoutes (){
    return (
          <Stack.Navigator>
            <Stack.Screen name="Origem / Destino" component={ConfigPlace} />
            <Stack.Screen name="Condições de Acesso" component={Price} />
          </Stack.Navigator>
  
      );
}