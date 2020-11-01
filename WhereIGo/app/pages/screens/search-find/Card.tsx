
import { Dimensions, StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import PlaceSearchModel from "../../../models/place.search.model";

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
    return <View style={styles.mainContent}>
            <Text>{model.name}</Text>
            <Text>{model.address}</Text>
            <Text>{model.phone}</Text>
            <Text>{model.coordinates.lat}</Text>
            <Text>{model.coordinates.lng}</Text>
            <TouchableOpacity>

            </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    mainContent: { width: Dimensions.get('screen').width, height: 200, backgroundColor: '#FFF', top: -20,  margin:5
   

}


})