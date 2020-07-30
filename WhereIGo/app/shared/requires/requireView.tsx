import * as React from 'react'
import SearchModel from "../../models/search.model";
import { View, Text } from "react-native";
import { makeSearchRequestStyle } from './requireView.style';


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
                <Text style={makeSearchRequestStyle.title}> Saindo de </Text>
                

            </View>
        </View>
    )


}