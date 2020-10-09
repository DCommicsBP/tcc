import * as React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';

export default class Map extends React.Component {

  state = {
    region: {
      latitudeDelta: 0, latitude: 0, longitudeDelta: 0, longitude: 0
    }
  }


  async componentDidMount() {
    console.log(this.props)

    navigator.geolocation.getCurrentPosition(

      ({ coords: { latitude, longitude } }) => {
        this.setState({
          region: {
            latitudeDelta: 0, latitude: latitude, longitudeDelta: 0, longitude: longitude
          }
        })

      },
      (error) => {

      }, {
      timeout: 2000,
      enableHighAccuracy: true,
      maximumAge: 1000,
    })

  }

  render() {
    let { region } = this.state;

    const GOOGLE_MAPS_APIKEY = '…';
    const { } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <MapView style={{ flex: 1, width: '85%', left: '5%' }}
          region={region}
          showsUserLocation
        >
          <Marker coordinate={{ latitude: 0, longitude: 0 }} />
          <Marker coordinate={{ latitude: 0, longitude: 0 }} />

          <MapViewDirections
            origin={origin}
            destination={origin}
            apikey={GOOGLE_MAPS_APIKEY}
          />
        </MapView>

      </View>
    )
  }
}

/*
TODO
Aqui devem ser renderizados os pins da busca e a rota que deve ser seguido até o local
*/