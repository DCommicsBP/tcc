import *  as React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Button } from 'react-native';
import MainCustomButton from '../../../shared/buttons/MainCustomButton';
import SearchInput from '../../../shared/inputs/SearchInput';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';


export default function ConfigPlace() {
    const navigate = useNavigation();

    return (
        <View style={{ flex: 1, top: '5%' }}>
            <Text style={{
                paddingLeft: 15,
                marginLeft: 15,
                fontFamily: 'monospace',
            }}>
                Origem:
            </Text >
            <View style={{ flex: 0.15 }}>
                <SearchInput newPostition="120" />
            </View>
            <Text style={{
                paddingLeft: 15,
                marginLeft: 15,
                fontFamily: 'monospace',
                flex: 0.15, 
                top: '10%'
            }}>
                Destino
            </Text>
            <View style={{ flex: 0.1, top: '2%' }}>
                <SearchInput newPostition="9" />
            </View>

        </View>



    );


}