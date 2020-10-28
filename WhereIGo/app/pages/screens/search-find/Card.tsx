  
import { Dimensions, Text, View } from "react-native";
import * as React from 'react';
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Card (props: any){
    const { info } = props

    console.log('info props ===>',info)
    return <View style={{width: Dimensions.get('screen').width - 40, height: 200, backgroundColor: '#FFF', marginHorizontal: 20, top: -20}}>
        <Text>{info.name}</Text>
        <Text>{info.address}</Text>
        <Text>{info.businessStatus}</Text>
        <Text>Custo:  R$ 23,00 reais </Text> 
        <TouchableOpacity>
            <Text>Informações</Text>
            </TouchableOpacity>   
    </View>
}