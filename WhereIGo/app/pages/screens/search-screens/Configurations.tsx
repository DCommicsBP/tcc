import *  as React from 'react'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { View, Text, Button, Vibration } from 'react-native';
import MainCustomButton from '../../../shared/buttons/MainCustomButton';
import SearchInput from '../../../shared/inputs/SearchInput';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { getNewDimensions } from '../../../utils/dimansions/dimansions';
import LocationModel from '../../../models/location.model';
import MainCustomButtonParameter from '../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../shared/buttons/MainReturnButton';


export default function ConfigPlace() {

    const [origin, setOrigin] = React.useState(); 
    const [destiny, setDestiny] = React.useState(); 

       
    
    const navigate = useNavigation();

    return (
        <View style={{ flex: 1, top: '5%' }}>
            <Text style={{
                paddingLeft: 15,
                marginLeft: 15,
                fontFamily: 'monospace',
                flex: 0.05, 
            }}>
                Origem:
            </Text >
            <View style={{ flex: 0.05 }}>
                <SearchInput newPostition="top" onSubmit={(detailValue:any)=> setOrigin(detailValue)}  />
            </View>
            <Text style={{
                paddingLeft: 15,
                marginLeft: 15,
                fontFamily: 'monospace',
                flex: 0.15,
                top: '13%'
            }}>
                Destino:
            </Text>
            <View style={{ flex: 0.05, top: '2%' }}>
                <SearchInput  newPostition="bottom" onSubmit={(detailValue:any)=> setDestiny(detailValue)} />
            </View>
            <View style={{position: 'relative', left: getNewDimensions(15,0).width, flex: 0.5, top: 250}}>
                {MainCustomButtonParameter('Condições de Acesso', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny })}
                {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
            </View>


        </View>

    );


}