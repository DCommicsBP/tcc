import * as React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { appStyle } from '../styles/main.styles';
import { Text, Image, View } from 'react-native';

export default class Main extends React.Component {
    render() {
        return (
            <LinearGradient
                colors={['rgba(0,102,51,1)', 'rgba(190,19,190,190) 100%']}
                style={appStyle.backgoround}
            >
                <Text style={appStyle.title}>Where Do I Go?</Text>
                <Image
                    source={require('../../../assets/imageIcon.png')}
                    style={appStyle.imageIcon}
                />

                <View style={appStyle.viewButton}>
                </View>
            </LinearGradient>

        );
    }
}