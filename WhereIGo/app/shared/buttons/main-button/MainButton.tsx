import React, { Component, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { mainButtonStyle } from './mainButton.style';
import { useNavigation } from '@react-navigation/native';
  
export default function MainButton () {
  const navigate = useNavigation();
return  (
    
    <TouchableOpacity onPress={() => navigate.navigate('Home')}>
      
            <View style={mainButtonStyle.circleGradient}>
                <Text style={mainButtonStyle.visit}>Entre!</Text>
            </View>
    </TouchableOpacity>
);

  
}