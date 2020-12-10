
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, Alert } from "react-native";
import * as React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import PlaceSearchModel from "../../../../models/place.search.model";
import { Popup } from 'react-native-map-link'
import { cardStyles } from "../styles/card.styles";

export default function Card(props: any) {
    const [isVisible, setIsVisible] = React.useState(false);
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

    const setMark = (c: any) => {
        props.coordinates(c);
        console.log('coordinates', c)


    }
    const Modal2 = () => {
        console.log('entrei no popup')
        return <View style={cardStyles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={isVisible}
                onRequestClose={() => {
                }}
            >
                <Popup
                    isVisible={isVisible}
                    onCancelPressed={() => setIsVisible(false)}
                    onAppPressed={() => setIsVisible(false)}
                    onBackButtonPressed={() => setIsVisible(false)}
                    modalProps={{ // you can put all react-native-modal props inside.
                        animationIn: 'slideInUp'
                    }}
                    appsWhiteList={['apple-maps', 'google-maps', 'citymapper', 'uber', 'lyft', 'transit', 'truckmap', 'waze', 'yandex', 'moovit', 'yandex-taxi', 'yandex-maps', 'kakaomap', 'mapycz', 'maps-me', 'osmand', 'gett', 'navermap']}
                    options={{
                        title: `${model.name}, ${model.cep}`,
                        latitude: parseFloat(model.coordinates.lat + ''),
                        longitude: parseFloat(model.coordinates.lng + ''),
                    }}
                />
            </Modal>
        </View>
    }

    return <View style={cardStyles.place}>
        <Text style={cardStyles.text}>{model.name}</Text>
        <Text>{model.address ? model.address + '-' : ''} {model.city} {model.state && model.city ? ' - ' + model.state : model.state}</Text>
        <Text>{model.phone}</Text>
        <View style={{ flexDirection: 'row', width: 480, right: 25, margin: 10, top: 20 }}>
            <TouchableOpacity style={style.buttons} onPress={() => setIsVisible(!isVisible)} >
                <Text style={style.textButtons}>Traçar rota no GPS</Text>
            </TouchableOpacity>

            {isVisible == true ? Modal2() : <Text></Text>}
        </View>
    </View>
}

const style = StyleSheet.create({

    textButtons: {
        fontFamily: 'monospace',
        fontSize: 12, textAlign: 'center'

    },


    buttons: {
        width: 210,
        height: 40, 
        left: '30%',
        right: 0,   
        padding: 5, margin: 5,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderColor: "#999",
        borderWidth: 2,

    }
})