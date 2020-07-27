import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { mainButtonStyle } from './mainButton.style';
import { NavigationParams, NavigationScreenProp, NavigationState, NavigationInjectedProps, } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';
  
  interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  }
const MainButton = () => {
  const navigate = useNavigation()

        return (
            <TouchableOpacity onPress={() => navigate.navigate('Home')}>
              
                    <View style={mainButtonStyle.circleGradient}>
                        <Text style={mainButtonStyle.visit}>Entre!</Text>
                    </View>
            </TouchableOpacity>
        );
}
export default MainButton;