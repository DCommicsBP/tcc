import React from 'react'
import { Button, Text, Dimensions, TouchableOpacity, View } from 'react-native'
import { mainButtonStyle } from './mainButton.style';

const { height, width } = Dimensions.get('window');

const buttonDimensions = {
    buttonWidth: width, buttonHeight: height
}

export default class MainButton extends React.Component {

    render = () => {
        return (
            <TouchableOpacity onPress={() => alert('funfa?')} >
              
                    <View style={mainButtonStyle.circleGradient}>
                        <Text style={mainButtonStyle.visit}>Entre!</Text>
                    </View>
            </TouchableOpacity>
        );
    }
}
