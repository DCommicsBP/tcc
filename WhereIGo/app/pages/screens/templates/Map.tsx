import useAxios from 'axios-hooks';
import * as React from 'react';
import { Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps'
import { PolylineModel } from '../../../models/polyline.model';
import { mapStyle } from '../styles/map.style';

export default function Map(props: any) {
  console.log('map props===>', props)
  let poly: PolylineModel[] = []
  const [region, setRegion] = React.useState({
    latitudeDelta: 0, latitude: 0,
    longitudeDelta: 0, longitude: 0
  });
  const [longitude, setLongitude] = React.useState(0)
  const [latitude, setLatitude] = React.useState(0)
  const [isTracking, setIsTracking] = React.useState(true);
  const [isTrackingRoute, setIsTrackingRoute] = React.useState(false);
  const [isTrackingAlternativeRoute, setIsTrackingAlternativeRoute] = React.useState(false);
  const [route, setRoute] = React.useState(poly)
  const [alternativeRoute, setAlternativeRoute] = React.useState(poly)

  React.useEffect(() => {
    if (!isTracking) return;
    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          setRegion({
            latitude: position.coords.latitude, longitude: position.coords.longitude,
            latitudeDelta: 0, longitudeDelta: 0
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

    const { origin, destiny, coordinates, model } = props.route.params;

    const loadRoute = function () {
      const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/osmr/get-route-coordinates-route/{latOrign}/{lngOrigin}/{latDestiny}/{lngDestiny}?" +
        "latOrign=" + origin.lat + "&lngOrigin=" + origin.lng + "&latDestiny=" + destiny.lat + "&lngDestiny=" + destiny.lng + "&travelMode=driving")
      if (data) {
        let poly: PolylineModel[] = [];
        data.forEach((element: any) => {
          let ele: PolylineModel = {
            latitude: element.lat,
            longitude: element.lng
          }
          poly.push(ele);
        })

        setRoute(poly)
        setIsTrackingRoute(true);

      }

      if (error) {
      }
    }

    const loadAlternativeRoute = function (model: any) {
      debugger; 
      const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/osmr/get-route-coordinates-route/{latOrign}/{lngOrigin}/{latDestiny}/{lngDestiny}?" +
        "latOrign=" + origin.lat + "&lngOrigin=" + origin.lng + "&latDestiny=" + coordinates.lat + "&lngDestiny=" + coordinates.lng + "&travelMode=driving")
      if (data) {
        let poly: PolylineModel[] = [];
        data.forEach((element: any) => {
          let ele: PolylineModel = {
            latitude: element.lat,
            longitude: element.lng
          }
          poly.push(ele);
        })

        setAlternativeRoute(poly)
        setIsTrackingAlternativeRoute(true);

      }

      if (error) {
      }
    }

    setLatitude((origin.lat + destiny.lat) / 2);
    setLongitude((origin.lng + destiny.lng) / 2);
    if (!isTrackingRoute)
      loadRoute();
    if(!isTrackingAlternativeRoute)
      loadAlternativeRoute(model)

    return <View style={mapStyle.container}>
      <MapView
        style={mapStyle.mapView} maxZoomLevel={14} minZoomLevel={14} showsUserLocation scrollEnabled={true}
        region={{
          latitude: model.coordinates.lat, longitude: model.coordinates.lng, latitudeDelta: 0.05, longitudeDelta: 0.02
        }}>
        <Marker pinColor={"#02534D"} coordinate={{ latitude: origin.lat, longitude: origin.lng }} />
        <Marker pinColor={"#AF6700"} coordinate={{ latitude: destiny.lat, longitude: destiny.lng }} />
        <Marker pinColor={"#8f1846"} coordinate={{ latitude: model.coordinates.lat, longitude: model.coordinates.lng }} />

        {route.length > 0 ? <Polyline coordinates={route} geodesic strokeWidth={5} strokeColor={"#4d9677"} /> : <View></View>}
      </MapView>
    </View>
  }
  if (typeof props.route != 'undefined')
    return <MappingDirection />
  else
    return <Mapping />
}