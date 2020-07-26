import React from 'react';
import { Text, View, Button, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { appStyle } from './app.style'
import MainButton from './app/shared/buttons/mainButton';
import { getNewDimensions } from './app/utils/dimansions/dimansions';

const dimensions = getNewDimensions(100, 100)
export default class App extends React.Component {
  render() {
    return (
      <LinearGradient
        colors={['rgba(0,102,51,1)', 'rgba(190,19,190,190) 100%']}
        style={appStyle.backgoround}
      >
        <Text style={appStyle.title}>Where I Go?</Text>
        <Image
          source={require('./assets/imageIcon.png')}
          style={appStyle.imageIcon}
        />

        <View style={appStyle.viewButton}>
          <MainButton />
        </View>
      </LinearGradient>

    );
  }
}