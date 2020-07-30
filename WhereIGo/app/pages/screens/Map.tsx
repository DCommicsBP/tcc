import * as React from 'react'; 
import { Text, View } from 'react-native';
import  MapView  from 'react-native-maps'
import { mapStyle } from '../styles/map.stye';

export default  class Map extends React.Component{
    render () {
        return   <View style={mapStyle.container}>
        <MapView style={mapStyle.mapStyle} />
      </View>
    }
}