
import { Dimensions, StyleSheet, Text, View, Modal, TouchableHighlight, Alert } from "react-native";
import * as React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";
import PlaceSearchModel from "../../../models/place.search.model";
import { Popup } from 'react-native-map-link'

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

    const Modal2 = () =>{
        console.log('entrei no popup')
        return   <View style={styles.centeredView}>
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
                    appsWhiteList={['apple-maps','google-maps','citymapper','uber','lyft','transit','truckmap','waze','yandex','moovit','yandex-taxi','yandex-maps','kakaomap','mapycz','maps-me','osmand','gett','navermap']}
                    options={{ 
                        title: `${model.name}, ${model.cep}`,
                        latitude: parseFloat(model.coordinates.lat+''), 
                        longitude: parseFloat(model.coordinates.lng+''), 
                    }}
            />
        </Modal>
      </View>
    }

    return <View style={styles.place}>
        <Text style={styles.text}>{model.name}</Text>
        <Text>{model.address ? model.address + '-' : ''} {model.city} - {model.state && model.city ? ' - ' + model.state : model.state}</Text>
        <Text>{model.phone}</Text>
        <View>
            <TouchableOpacity style={{ alignContent: 'center' }} onPress={ ()=> setIsVisible(!isVisible)} >
                <Text>Traçar rota no GPS</Text>
                {isVisible == true? Modal2(): <Text></Text>}
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Mostrar rota no aplicativo</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Visualizar Detalhes do lugar</Text>
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
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 10,
        borderTopEndRadius: 10,
        borderBottomEndRadius: 10,
        padding: 20,
        left: 20,
        right: 0,
        top: -10
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 12,
        fontWeight: 'bold',
        color: "#444"
    }, 
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }

})

/*
<Popup
                    isVisible={isVisible}
                    onCancelPressed={() => setIsVisible(false)}
                    onAppPressed={() => setIsVisible(false)}
                    onBackButtonPressed={() => setIsVisible(false)}
                    modalProps={{ // you can put all react-native-modal props inside.
                        animationIn: 'slideInUp'
                    }}
                    appsWhiteList={['waze', 'google-maps', 'moovit']}
                    options={{ 
                        title: 'TESTE',
                        latitude: parseFloat(model.coordinates.lat+''), 
                        longitude: parseFloat(model.coordinates.lng+''), 
                        
                    }}
                
*/ 