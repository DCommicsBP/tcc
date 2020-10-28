import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import MainCustomButtonParameter from '../../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../../shared/buttons/MainReturnButton';
import { getNewDimensions, getNewPosition } from '../../../../utils/dimansions/dimansions';
import { classificationsStyle } from '../styles/classification.style'

export default function Classifications(props: any) {
    const [rating, setRating] = useState(3)

    return (
        <View style={classificationsStyle.main}>

            <View style={classificationsStyle.viewTitle}>
            <Text style={classificationsStyle.title}>
                Você poderá buscar os lugares que desejas através da avaliação disponível.
          </Text>
            </View>
            
            <View style={classificationsStyle.rating}>
                <AirbnbRating
                    reviews={["Péssimo", "Ruim", "Mais ou Menos", "Bom", "Ótimo"]}
                    onFinishRating={(rating) => setRating(rating)}
                />
            </View>
            
            <View style={{ position: 'absolute', left: getNewDimensions(15, 0).width, flex: 0.5, top: '80%', width:'100%' }}>
                {MainCustomButtonParameter('Mapa', 'Próximo ->', '#FFF', '#AAA', { ...props.route.params, rating })}
                {MainReturnButton('Início', 'Retornar', '#CCC', '#FFF')}
            </View>
            
        </View>
    );

}