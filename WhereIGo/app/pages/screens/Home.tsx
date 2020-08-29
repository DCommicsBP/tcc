import * as React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Map from './Map';
import SearchInput from '../../shared/inputs/SearchInput';


export default function Home() {

    const navigation = useNavigation(); 
    return (<View style={{flex:1}}>
        <Map/>
    </View>)
}

