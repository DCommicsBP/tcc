import Axios from 'axios';
import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import { PolylineModel } from '../../models/polyline.model';
import TemplateCards from './search-find/TemplateCards';

export default function MapOld(props: any) {

  const [region, setRegion] = React.useState({ latitudeDelta: 0, latitude: 0, longitudeDelta: 0, longitude: 0 });

  const [longitude, setLongitude] = React.useState(0)

  const [latitude, setLatitude] = React.useState(0)

  let [mapView, setMapView] = React.useState([null])

  const [places, setPlaces] = React.useState([
    {
      id: 1, description: 'Teste mais um teste', title: 'Titulo'
    }
  ])

  const [isTracking, setIsTracking] = React.useState(true);
  const [isTrackingRoute, setIsTrackingRoute] = React.useState(true);

  let poly: PolylineModel[] = []
  const [routes, setRoutes] = React.useState(poly)

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
      region={region} showsUserLocation
      zoomControlEnabled maxZoomLevel={6}
      minZoomLevel={6} zoomTapEnabled zoomEnabled
    >
    </MapView>
  }
  let polyline: PolylineModel[] = []
  const MappingDirection = () => {
    console.log(props.route.params)

    debugger
    const { origin, destiny, price, rating, kilometers , information} = props.route.params;
    
    Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/osmr/get-route-coordinates-route/{latOrign}/{lngOrigin}/{latDestiny}/{lngDestiny}?" +
      "latOrign=" + origin.lat + "&lngOrigin=" + origin.lng + "&latDestiny=" + destiny.lat + "&lngDestiny=" + destiny.lng + "&travelMode=driving")
      .then(response => {
        if (response.data != null) {
          response.data.forEach((element: any) => {
            let ele: PolylineModel = {
              latitude: element.lat,
              longitude: element.lng
            }
            polyline.push(ele);
          });
          setIsTrackingRoute(false)
        }
        if (isTrackingRoute)
          setRoutes(polyline)
      });
    setLatitude((origin.lat + destiny.lat) / 2);
    setLongitude((origin.lng + destiny.lng) / 2);

    return  <View style={styles.container}>
    <MapView
      style={styles.mapView} maxZoomLevel={7} minZoomLevel={2} showsUserLocation scrollEnabled={false}
        region={{
          latitude: latitude, longitude: longitude, latitudeDelta: 0.05, longitudeDelta: 0.02
        }}
    >
        <Marker pinColor={"#02534D"} coordinate={{ latitude: origin.lat, longitude: origin.lng }} />
        <Marker pinColor={"#AF6700"} coordinate={{ latitude: destiny.lat, longitude: destiny.lng }} />
      <Polyline coordinates={routes} geodesic strokeWidth={5} strokeColor={"#9E8868"}
      />
    </MapView>
    <ScrollView style={styles.placesContainer} horizontal pagingEnabled showsHorizontalScrollIndicator={false}>
        <TemplateCards origin={origin} destiny={destiny} routes={routes}  price={price} rating={rating} kilometers={kilometers} information={ information } />
    </ScrollView>
    </View>
  }

  if (typeof props.route != 'undefined') 
    return <MappingDirection />
   else
    return <Mapping />
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  mapView: {
    position: 'relative',
    width: '100%',
    height: '100%',
    bottom: 0,
  },

  placesContainer: {
    width: '90%',
    maxHeight: 200,
    height: 200,
    position: 'absolute',
    backgroundColor:'#EEE', 
    right: '5%',
  },

  place: {
    width: width - 40,
    maxHeight: 200,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});