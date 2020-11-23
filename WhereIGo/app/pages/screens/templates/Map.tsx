import Axios from 'axios';
import * as React from 'react';
import { View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps'
import { PolylineModel } from '../../../models/polyline.model';
import TemplateCards from '../search-find/templates/TemplateCards';
import { mapStyle } from '../styles/map.style';

export default function MapOld(props: any) {
  let poly: PolylineModel[] = []
  const [region, setRegion] = React.useState({ latitudeDelta: 0, latitude: 0, 
    longitudeDelta: 0, longitude: 0 });
  const [longitude, setLongitude] = React.useState(0)
  const [newLong, setNewLong] = React.useState(0)
  const [newLat, setNewLat] = React.useState(0)
  const [latitude, setLatitude] = React.useState(0)
  const [isTracking, setIsTracking] = React.useState(true);
  const [isTrackingRoute, setIsTrackingRoute] = React.useState(true);
  const [routes, setRoutes] = React.useState(poly)

  React.useEffect(() => {
    if (!isTracking) return;
    function getLocation() {
      navigator.geolocation.getCurrentPosition(
        position => {
          setRegion({
            latitude: position.coords.latitude,longitude: position.coords.longitude,
            latitudeDelta: 0,longitudeDelta: 0
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

    const { origin, destiny, price, rating, kilometers, information } = props.route.params;
    if (isTrackingRoute && routes.length > 0) {

    React.useEffect(() => {
        Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/osmr/get-route-coordinates-route/{latOrign}/{lngOrigin}/{latDestiny}/{lngDestiny}?" +
          "latOrign=" + origin.lat + "&lngOrigin=" + origin.lng + "&latDestiny=" + destiny.lat + "&lngDestiny=" + destiny.lng + "&travelMode=driving")
          .then(response => {
            if (response.data != null && response.data != undefined) {
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
    }, [isTrackingRoute, routes])
  }

    const setNewMarker = (c: any) => {
      setNewLong(c.lng)
      setNewLat(c.lat)
      setIsTracking(false)
      setRoutes(routes)
      

      console.log('set new marker', c)
    }

    setLatitude((origin.lat + destiny.lat) / 2);
    setLongitude((origin.lng + destiny.lng) / 2);
    
    return <View style={mapStyle.container}>
      <MapView
        style={mapStyle.mapView} maxZoomLevel={7} minZoomLevel={2} showsUserLocation scrollEnabled={false}
        region={{
          latitude: latitude, longitude: longitude, latitudeDelta: 0.05, longitudeDelta: 0.02
        }}>
        <Marker pinColor={"#02534D"} coordinate={{ latitude: origin.lat, longitude: origin.lng }} />
        <Marker pinColor={"#AF6700"} coordinate={{ latitude: destiny.lat, longitude: destiny.lng }} />
        <Polyline coordinates={routes} geodesic strokeWidth={5} strokeColor={"#9E8868"}/>
      </MapView>
        <View style={mapStyle.placesContainer}>
      <TemplateCards newMarker={(c:any)=> setNewMarker(c) } origin={origin} destiny={destiny} routes={routes} price={price} rating={rating} kilometers={kilometers} information={information} />
      </View>
    </View>
  }

  if (typeof props.route != 'undefined')
    return <MappingDirection />
  else
    return <Mapping />
}