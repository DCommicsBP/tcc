import * as React from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { env } from '../../enviroments/enviroments';
import MainCustomButtonParameter from '../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../shared/buttons/MainReturnButton';
import { getNewDimensions } from '../../utils/dimansions/dimansions';

export default function Map(props: any) {

  const [region, setRegion] = React.useState({ latitudeDelta: 0, latitude: 0, longitudeDelta: 0, longitude: 0 });

  const [longitude, setLongitude] = React.useState(0)
  const [latitude, setLatitude] = React.useState(0)
  let [mapView, setMapView] = React.useState([null])

  const GOOGLE_MAPS_APIKEY = env.apiKey;

  const [isTracking, setIsTracking] = React.useState(true);



  React.useEffect(() => {
    if (!isTracking) return;
    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          setRegion({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            latitudeDelta: 0,
            longitudeDelta: 0
          });
          setIsTracking(false)

        },
        error => alert(error.message),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
      );
    }
    let getLocationInterval = setInterval(getLocation, 500);
    return () => clearInterval(getLocationInterval);
  }, [isTracking]);


  const Mapping = () => {
    return <MapView style={{ flex: 1, width: '85%', left: '5%' }}
      region={region}
      showsUserLocation
      zoomControlEnabled
      maxZoomLevel={6}
      minZoomLevel={6}
      zoomTapEnabled
      zoomEnabled
    >
    </MapView>
  }

  const MappingDirection = () => {


    const { origin, destiny } = props.route.params;

    setLatitude((origin.lat + destiny.lat) / 2);
    setLongitude((origin.lng + destiny.lng) / 2);

    function teste(teste2: any){
      console.log('teste ===> ',teste2)
      return "teste"; 
    }

    return <View style={{ flex: 1, width: '85%', left: '5%', }}>
      <MapView style={{ flex: 0.7, width: '95%', left: '5%' }}

        region={{
          latitude: (origin.lat + destiny.lat) / 2,
          longitude: (origin.lng + destiny.lng) / 2,
          latitudeDelta: 0.05,
          longitudeDelta: 0.02
        }}
        maxZoomLevel={10}
        minZoomLevel={7}
        showsUserLocation

      >
        <View>
          {DirectionsMap(origin, destiny)}
        </View>
    
      </MapView>

    </View>
  }
  const DirectionsMap = (origin: any, destination: any) => {

    return <MapViewDirections
      origin={{ latitude: origin.lat, longitude: origin.lng }}
      destination={{ latitude: destination.lat, longitude: destination.lng }}
      apikey={GOOGLE_MAPS_APIKEY}
      strokeWidth={5}
      strokeColor={"hotpink"}
      onStart={() => {

      }}
      onReady={(onReadyObject?: any) => {

        for (let i = 2; i <= 7; i++) {
          mapView.push(onReadyObject.coordinates[parseInt(((onReadyObject.coordinates.length / 7) * (i - 1)).toString())])
        }
        return;
      }}
    />
  }

  if (typeof props.route != 'undefined') {

    console.log('map view antes de renderizar o mapa', mapView)
    let map = <MappingDirection />
    console.log('map view depois de renderizar o mapa', mapView)
    return map;

  } else {
    return <Mapping />
  }

}

