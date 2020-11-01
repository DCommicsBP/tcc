import Axios from 'axios';
import *  as React from 'react'
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import LocalSearchModel from '../../../../models/local.search.model';
import MainCustomButtonParameter from '../../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../../shared/buttons/MainReturnButton';
import { getNewDimensions } from '../../../../utils/dimansions/dimansions';
import { configurationStyle } from '../styles/configuration.style';

export default function ConfigPlace() {

    const [origin, setOrigin] = React.useState();
    const [destiny, setDestiny] = React.useState();
    const [require, setRequire ] = React.useState(new LocalSearchModel());
    const [textInputValueOrigin, setTextInputValueOrigin] = React.useState("") 
    const [textInputValueDestiny, setTextInputValueDestiny] = React.useState("") 

    const getPlaces = ( text: string, type: string) => {
        if(type === 'origin') setTextInputValueOrigin(text) 
        if(type=== 'destiny') setTextInputValueDestiny(text)
        if(text.length >4){

        Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/nominatim/search-box-cicties/{text}?text="+text)
        .then(response=>{
            let filteredResponse: any[] = response.data; 
            let requireInternal = new LocalSearchModel(); 
            requireInternal.places =filteredResponse.filter(element=> element!=null);  
            requireInternal.type = type; 
           
            setRequire(requireInternal)
        })
        .catch(error=>{
            setRequire(new LocalSearchModel())
        })
    }
    //truncar em 46 caracteres 
    }
    const select = (object: any, type: string) =>{
        
        if(require.type === "destiny"){

                setDestiny(object.point); 
                setTextInputValueDestiny(object.displayName); 
                setRequire(new LocalSearchModel())
        }else if(require.type === "origin"){
            setOrigin(object.point)
            setTextInputValueOrigin(object.displayName)
            setRequire(new LocalSearchModel())
        }
        console.log(object)
        console.log(require.type)
    }

    return (

        <View style={configurationStyle.principal}>
            <View style={configurationStyle.searchView}>
                <View>
                    <Text style={configurationStyle.title}>Origem</Text>
                    <TextInput
                        onChangeText={(s) => getPlaces(s, "origin")}
                        style={configurationStyle.searchInput}
                        value={textInputValueOrigin}
                    />
                </View>
                <View style={{ position: 'relative', top: 50 }}>
                    <Text style={configurationStyle.title}>Destino</Text>
                    <TextInput
                        onChangeText={(s) => getPlaces(s, "destiny")}
                        style={configurationStyle.searchInput}
                        value={textInputValueDestiny}
                    />
                </View>
            </View>
            <View style={configurationStyle.touchableOpacityView}>
                {require.type.length > 0? require.places.map((listItem: any, index: number) => (
                    <View style={configurationStyle.touchableOpacity} key={index}>
                    <TouchableOpacity key={index} onPress={ ()=> select(listItem, require.type)}>
                        <Text style={configurationStyle.opacity}>{listItem.displayName}</Text>

                    </TouchableOpacity>
                    </View>
                )):<View></View>}
            </View>
            <View style={{ position: 'absolute', left: getNewDimensions(15, 0).width, flex: 0.5, top: '70%', width:'100%' }}>
                {origin && destiny? MainCustomButtonParameter('Valores', 'Próximo ->', '#FFF', '#AAA', { origin: origin, destiny: destiny }): <Text></Text>}
                {MainReturnButton('Início', 'Retornar', '#CCC', '#FFF')}
            </View>

        </View>

    );

}