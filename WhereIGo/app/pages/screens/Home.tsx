import * as React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Map from './Map';


export default function Home() {

    const navigation = useNavigation(); 
    return (<Map/>)
}

