import * as React from 'react';
import { Alert, Text, View } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { env } from '../../enviroments/enviroments';
import GetLocation from 'react-native-get-location'
import LocationModel from '../../models/location.model';

export default function Map(props: any) {

  const [region, setRegion] = React.useState({ latitudeDelta: 0, latitude: 0, longitudeDelta: 0, longitude: 0 });

  const GOOGLE_MAPS_APIKEY = env.apiKey;

  GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
  })
    .then(location => {
      setRegion({
        latitudeDelta: 0, longitudeDelta: 0, latitude: location.latitude, longitude: location.longitude
      })
    })
    .catch(error => {
      const { code, message } = error;
    })

  const Mapping = () => {
    return <MapView style={{ flex: 1, width: '85%', left: '5%' }}
      region={region}
      showsUserLocation
      zoomControlEnabled
    >
    </MapView>
  }

  const MapingDirection = () => {

    const { kilometers, price, rating, origin, destiny, information } = props.route.params;
    let region = {
      latitude: destiny.lat, longitude: destiny.lng, latitudeDelta: 0, longitudeDelta: 0
    }
    return <MapView style={{ flex: 1, width: '85%', left: '5%' }}
      region={region}
      showsUserLocation
      loadingEnabled={true}
      toolbarEnabled={true}
      zoomControlEnabled={true}
    >
      {DirectionsMap(origin, destiny)}
    
    </MapView>
  }

  const DirectionsMap = (origin: any, destination: any) => {
    return <MapViewDirections
      origin={{ latitude: origin.lat, longitude: origin.lng }}
      destination={{ latitude: destination.lat, longitude: destination.lng }}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={5}
      strokeColor={"hotpink"}
      
    />

  }

  if (typeof props.route != 'undefined') {
    return <MapingDirection />
  } else {
    return <Mapping />
  }

}




