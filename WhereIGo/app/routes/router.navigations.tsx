
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Configurations from '../pages/screens/Configurations';
import Test from '../pages/screens/Test';

const Stack = createStackNavigator();


export default function Draw (){
    return (
          <Stack.Navigator>
            <Stack.Screen name="Configurations" component={Configurations} />
            <Stack.Screen name="Test" component={Test} />
          </Stack.Navigator>
  
      );
}