import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <MapView

        initialRegion={{
          latitude: -30.033056,
          longitude: -51.230000,
          latitudeDelta: 0.0042,
          longitudeDelta: 0.0031
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0
  }
})