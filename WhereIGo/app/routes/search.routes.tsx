
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ConfigPlace from '../pages/screens/search-screens/Configurations';
import Price from '../pages/screens/search-screens/Price';
import Kilometers from '../pages/screens/search-screens/Kilometers';
import Informations from '../pages/screens/search-screens/Informations';

const Stack = createStackNavigator();


export default function SearchRoutes (){
    return (
          <Stack.Navigator>
            <Stack.Screen name="Origem / Destino" component={ConfigPlace} />
            <Stack.Screen name="Valores" component={Price} />
            <Stack.Screen name="Distância" component={Kilometers} />
            <Stack.Screen name="Informações" component={Informations} />
          </Stack.Navigator>
  
      );
}