
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import PlaceSearchModel from "../../../models/place.search.model";
import { showLocation } from 'react-native-map-link'

export default function Card(props: any) {


    console.log('info props 2 ===>', props)

    let model: PlaceSearchModel = {
        address: props.props.address,
        cep: props.props.cep,
        city: props.props.city,
        coordinates: props.props.coordinates,
        country: props.props.country,
        image: props.props.image,
        name: props.props.name,
        phone: props.props.phone,
        rating: props.props.rating,
        price: props.props.price,
        state: props.props.state,
        isClosed: false

    }
    return <View style={styles.place}>
        <Text>{model.name}</Text>
        <Text>{model.address}</Text>
        <Text>{model.phone}</Text>
        <Text>{model.coordinates.lat}</Text>
        <Text>{model.coordinates.lng}</Text>

    <View>
<TouchableOpacity>

            {
                showLocation({
                    latitude: 38.8976763,
                    longitude: -77.0387185,
                    sourceLatitude: -8.0870631,  // optionally specify starting location for directions
                    sourceLongitude: -34.8941619,  // not optional if sourceLatitude is specified
                    title: 'The White House',  // optional
                    googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
                    googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',  // optionally specify the google-place-id
                    alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
                    dialogTitle: 'This is the dialog Title', // optional (default: 'Open in Maps')
                    dialogMessage: 'This is the amazing dialog Message', // optional (default: 'What app would you like to use?')
                    cancelText: 'This is the cancel button text', // optional (default: 'Cancel')
                    appsWhiteList: ['google-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
                    naverCallerName: 'com.example.myapp' // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
                    // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
                    // app: 'uber'  // optionally specify specific app to use
                })
            }

                <Text>Traçar rota</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Abrir rota em outro aplicativo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Visualizar Detalhes</Text>
            </TouchableOpacity>
        </View>

    </View>
}
//waze://?ll=45.6906304,-120.810983&navigate=yes
const styles = StyleSheet.create({

    place: {
        width: Dimensions.get('window').width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        padding: 20,
        left: 20,
        right: 0,
    },


})