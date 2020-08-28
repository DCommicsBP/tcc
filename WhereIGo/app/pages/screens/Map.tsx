import * as React from 'react'; 
import { Text, View } from 'react-native';
import  MapView  from 'react-native-maps'
import { mapStyle } from '../styles/map.stye';
import SearchInput from '../../shared/inputs/SearchInput';

export default function Map(props: any){
        return   <View style={mapStyle.container}>
        <MapView style={mapStyle.mapStyle} />
      </View>
}