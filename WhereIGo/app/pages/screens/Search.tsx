import * as React from "react"; 
import { View, Text } from "react-native";
import MainTitle from "../../shared/titles/MainTitle";

import RNGooglePlaces from 'react-native-google-places';

export default class Search extends React.Component{
    render(){
        return<View>
            {MainTitle('Nova Busca')}
            

        </View>
    }
}