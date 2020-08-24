import * as React from 'react'
import SearchModel from "../../models/search.model";
import { View, Text } from "react-native";
import { makeSearchRequestStyle } from './requireView.style';
import MainCustomButton from '../buttons/MainCustomButton';


const teste = (model: string[]): any[] => {
    let textS: any = []
    let key = 0; 
    model.forEach(element => {
        let keyInt = key+""; 
        textS.push(<Text key={keyInt}>{element}</Text>)
        key ++; 
    })
    return textS;
}
export default function makeSearchRequest(searchRequest: SearchModel) {

    return (
        <View style={makeSearchRequestStyle.mainView}>
            <View style={makeSearchRequestStyle.widthMainBox}>
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
            <View style={makeSearchRequestStyle.priceAndKilometers}>
                <Text style={makeSearchRequestStyle.title}> Você pode pagar até </Text>
                <Text style={makeSearchRequestStyle.priceAndKmColor}> R$ {searchRequest.paymentValue} reais </Text>
            </View>
            <View style={makeSearchRequestStyle.priceAndKilometers}>
                <Text style={makeSearchRequestStyle.title}> Desvio de rota  </Text>
                <Text style={makeSearchRequestStyle.priceAndKmColor}>{searchRequest.quilometers} Km. </Text>
            </View>
            <View style={makeSearchRequestStyle.typeAndPlacesBox}>
                {searchRequest.informations.length > 0 ?
                    <View >
                        <Text style={makeSearchRequestStyle.title}>Informações: </Text>
                        {searchRequest.informations.map(element => <Text style={makeSearchRequestStyle.itens}>{element}</Text>)}
                    </View> : <View style={makeSearchRequestStyle.viewInfosNotFound}><Text style={makeSearchRequestStyle.title}>Informações não especificadas</Text></View>}
                {searchRequest.placesType.length > 0 ? <View >
                    <Text style={makeSearchRequestStyle.title}>Tipos de Lugares: </Text>
                    {searchRequest.placesType.map(element => <Text style={makeSearchRequestStyle.itens}>{element}</Text>)}
                </View> : <View style={makeSearchRequestStyle.viewPlacesNotFound}><Text style={makeSearchRequestStyle.title}>Tipos de lugares não especificados</Text></View>}
            </View>
            <View >
            {MainCustomButton('Início', 'Buscar', '#DDD', '#1C56E6')}
            {MainCustomButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}


            </View>
        </View>
    )
}

//http://paletton.com/#uid=53M0b0kpPUceqXqkxVNvsRCN6IV