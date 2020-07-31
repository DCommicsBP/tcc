import * as React from 'react'
import SearchModel from "../../models/search.model";
import { View, Text } from "react-native";
import { makeSearchRequestStyle } from './requireView.style';
import Positions from '../../utils/dimansions/dimansions';


const teste = (model: string[]): any[] => {
    let textS: any = []
    model.forEach(element => {
        textS.push(<Text>{element}</Text>)
    })
    console.warn(textS)
    return textS;
}
export default function makeSearchRequest(searchRequest: SearchModel) {

    return (
        <View style={makeSearchRequestStyle.mainView}>
            <View style={{ flexDirection: 'row', flex: 0.2 }}>

                <View style={makeSearchRequestStyle.viewPlaces} >
                    <Text style={makeSearchRequestStyle.title}> Saindo de </Text>
                    <Text style={makeSearchRequestStyle.describe}> {searchRequest.fromPlace.address}, {searchRequest.fromPlace.name}</Text>

                    <View>
                        <Text style={makeSearchRequestStyle.latlng} > Lat: {searchRequest.fromPlace.location.lat} </Text>
                        <Text style={makeSearchRequestStyle.latlng} > Lng: {searchRequest.fromPlace.location.lng} </Text>

                    </View>
                </View>
                <View style={makeSearchRequestStyle.viewPlaces}>
                    <Text style={makeSearchRequestStyle.title}> Com destino  </Text>
                    <Text style={makeSearchRequestStyle.describe}> {searchRequest.toPlace.address}, {searchRequest.toPlace.name}</Text>

                    <View>
                        <Text style={makeSearchRequestStyle.latlng} > Lat: {searchRequest.toPlace.location.lat} </Text>
                        <Text style={makeSearchRequestStyle.latlng} > Lng: {searchRequest.toPlace.location.lng} </Text>

                    </View>

                </View>

            </View>
            <View style={makeSearchRequestStyle.price}>
                <Text style={makeSearchRequestStyle.title}> Você pode pagar até </Text>
                <Text style={makeSearchRequestStyle.priceColor}> R$ {searchRequest.paymentValue} reais </Text>
            </View>

            <View style={makeSearchRequestStyle.kilometers}>
                <Text style={makeSearchRequestStyle.textKilometers}> Quilometros que você está disposto a percorrer, desviando de sua rota  </Text>
                <Text style={makeSearchRequestStyle.numberKm}>{searchRequest.quilometers} Km. </Text>

            </View>
            <View style={{ flex: 0.4, marginTop: 15, paddingTop: 15 }}>
                {searchRequest.informations.length > 0 ?
                    <View style={makeSearchRequestStyle.type}>
                        <Text style={makeSearchRequestStyle.title}>Informações: </Text>
                        {searchRequest.informations.map(element => <Text style={makeSearchRequestStyle.itens}>{element}</Text>)}
                    </View> : <View style={makeSearchRequestStyle.viewNotFound}><Text style={makeSearchRequestStyle.title}>Informações não especificadas</Text></View>}
                {searchRequest.placesType.length > 0 ? <View style={makeSearchRequestStyle.type}>
                    <Text style={makeSearchRequestStyle.title}>Tipos de Lugares: </Text>
                    {searchRequest.placesType.map(element => <Text style={makeSearchRequestStyle.itens}>{element}</Text>)}
                </View> : <View style={makeSearchRequestStyle.viewNotFound}><Text style={makeSearchRequestStyle.title}>Tipos de lugares não especificados</Text></View>}
            </View>
            <View style={{ flex: 0.1 }}>
            </View>
        </View>
    )


}