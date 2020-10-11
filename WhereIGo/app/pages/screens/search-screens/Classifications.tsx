import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { AirbnbRating, Rating } from 'react-native-ratings';
import MainCustomButtonParameter from '../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../shared/buttons/MainReturnButton';
import { getNewDimensions, getNewPosition } from '../../../utils/dimansions/dimansions';




export default function Classifications(props: any) {

    const { origin, destiny, price, kilometers, information } = props.route.params
    const [rating, setRating] = useState(3)

    return (
        <View>

            <Text style={{ position: 'absolute', fontWeight: '700', color: '#777', padding: 10, margin: 20, fontSize: 16, top: getNewPosition(0, 0, 20).top }}>
                Você poderá buscar os lugares que desejas através da avaliação disponível. 
          </Text>
            <View style={{ position: 'relative', top: getNewPosition(0, 0, 120).top}}>
            <AirbnbRating
                reviews={["Péssimo", "Ruim", "Mais ou Menos", "Bom", "Ótimo"]}
                onFinishRating={(rating) => setRating(rating)}
            />
            </View>
            <View style={{ position: 'relative', left: getNewDimensions(15, 0).width, top: 270 }}>
                { MainCustomButtonParameter('Mapa', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny, price: price, kilometers: kilometers, information: information , rating:rating })}
                {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
            </View>
        </View>
    );

}