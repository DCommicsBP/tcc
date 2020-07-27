import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './app/pages/screens/Home';
import Main from './app/pages/screens/Main';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
function MyStack() {
  
}
export default class App extends React.Component {

  nav() {
    this.props.children
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>

    );
  }
}