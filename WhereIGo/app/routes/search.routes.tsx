
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Price from '../pages/screens/search-screens/templates/Price';
import Kilometers from '../pages/screens/search-screens/templates/Kilometers';
import Informations from '../pages/screens/search-screens/templates/Informations';
import Classifications from '../pages/screens/search-screens/templates/Classifications';
import ConfigPlace from '../pages/screens/search-screens/templates/Configurations';
import Map from '../pages/screens/templates/Map';


const Stack = createStackNavigator();

export default function SearchRoutes (){
    return (
          <Stack.Navigator>
            <Stack.Screen name="Origem / Destino" component={ConfigPlace} />
            <Stack.Screen name="Valores" component={Price} />
            <Stack.Screen name="Distância" component={Kilometers} />
            <Stack.Screen name="Informações" component={Informations} />
            <Stack.Screen name="Classificação" component={Classifications} />
            <Stack.Screen name="Mapa" component={Map} />
          </Stack.Navigator>
  
      );
}