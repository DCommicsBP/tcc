import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainCustomButtonParameter from '../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../shared/buttons/MainReturnButton';
import { getNewDimensions } from '../../../utils/dimansions/dimansions';


export default function Kilometers(props: any) {

    const {price, origin, destiny} = props.route.params; 

    const [kilometers, setKilometrs] = useState("0")

    console.log(' kilometers', kilometers)
    return <View>
        <View style={{position:'relative', width: '70%', left: '15%' }}>
            <Text style={{ position: 'relative', fontWeight: '700', color: '#777', top: 100,fontSize: 20 }}>
                Até quantos quilômetros que você pretende se desviar da rota de destino? Caso você não escolha, por padrão o sistema adotará 5 km. 
          </Text>

          <TextInput
            placeholder="  Coloque um valor maior que zero"
            underlineColorAndroid='transparent'
            style={{padding:15, margin:20,  height: 50, borderColor: 'gray', borderWidth: 1, position: 'relative', top: 175, width:'20%', left: '30%' }}
            keyboardType={'numeric'}
            onChangeText={value => value.match(/[0-9]*/gm) && setKilometrs(value)}
          />
           <View style={{position:'absolute',  width: '140%', top: '180%',  }}>
                { MainCustomButtonParameter('Informações', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny, price: price, kilometers: kilometers}) }
                {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
            </View>

        </View>
    </View>

}