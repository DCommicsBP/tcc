import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { mainButtonStyle } from './mainButton.style';
import { NavigationParams, NavigationScreenProp, NavigationState, NavigationInjectedProps, } from 'react-navigation';
import Home from '../../pages/screens/Home';
  
  interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }

export default class MainButton extends Component {

home(){
    return <Home/>; 
}
render(){

        return (
            <TouchableOpacity onPress={() =>{ this.home()}} >
              
                    <View style={mainButtonStyle.circleGradient}>
                        <Text style={mainButtonStyle.visit}>Entre!</Text>
                    </View>
            </TouchableOpacity>
        );
}
}
