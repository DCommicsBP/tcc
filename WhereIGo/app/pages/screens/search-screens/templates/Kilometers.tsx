import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainCustomButtonParameter from '../../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../../shared/buttons/MainReturnButton';
import { getNewDimensions } from '../../../../utils/dimansions/dimansions';
import { kilometrsStyle } from '../styles/kilometers.style';


export default function Kilometers(props: any) {

    const {price, origin, destiny} = props.route.params; 

    const [kilometrs, setKilometrs] = useState("5")

    console.log('props kilometers', props)
    return <View style={kilometrsStyle.mainView}>
        <View style={kilometrsStyle.content}>
            <Text style={kilometrsStyle.describe}>
                Até quantos quilômetros que você pretende se desviar da rota de destino? Caso você não escolha, por padrão o sistema adotará 5 km. 
          </Text>

          <TextInput
            placeholder="  Coloque um valor maior que zero"
            underlineColorAndroid='transparent'
            style={{padding:15, margin:20,  height: 50, borderColor: 'gray', borderWidth: 1, position: 'relative', top: 175, width:'20%', left: '30%' }}
            keyboardType={'numeric'}
            onChangeText={value => value.match(/[0-9]*/gm) && setKilometrs(value)}
          />
         
         <View style={{position: 'absolute', left: getNewDimensions(15, 0).width,  top: '180%', width:'100%' }}>
                { MainCustomButtonParameter('Informações', 'Próximo ->', '#FFF', '#AAA', { origin: origin, destiny: destiny, price: price, kilometers: kilometrs }) }
                {MainReturnButton('Início', 'Retornar', '#CCC', '#FFF')}
            </View>
        </View>
      
    </View>

}