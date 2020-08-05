import * as React from "react";
import MainTitle from "../../shared/titles/MainTitle";
import { View } from "react-native";
import requestView from "../../shared/requires/requireView";
import SearchModel from "../../models/search.model";
import LastSearchButton from "../../shared/buttons/lest-search-buttons/LastSearchButton";

const request: SearchModel = {
    classification: 4,
    fromPlace: {
        address: 'Estrada Chapéu do Sol, 1522',
        location: {
            lat:-30.182094,lng: -51.1653637
        },
        name: 'Minha casa '

    },
    informations: ['teste 01', 'teste 02', 'teste 03','teste 04'],
    paymentValue: 0,
    quilometers: 0,
    placesType:  ['teste 01', 'teste 02', 'teste 03','teste 04'],
    toPlace: {
        address: 'Tramandaí - Rio Grande do Sul',
        location: {
            lat:-30.0285719, lng:-50.2280335
        },
        name: 'Cidade'
    }
}


export default function LastSearch() {
    return (
        <View style={{flex:1}}>
            <View style={{flex: 0.1}}>
                {MainTitle('Última Busca Realizada')}

            </View>
            <View style={{flex:0.9,  top: '5%'}}>
                {requestView(request)}
            </View>
            <View>
                {LastSearchButton('Início', 'Retornar')}
            </View>
        </View>
    );
}