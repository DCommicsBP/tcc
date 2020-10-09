import React, { useState } from "react";
import { Text, TextInputComponent, View } from "react-native";
import { sin } from "react-native-reanimated";
import api from '../../../services/TypeService';
import axios from 'axios';
import data from '../../../data/types.json'
import PlaceModel from "../../../models/place.model";
import TypeModel from "../../../models/type.model";
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from "react-native-elements";
import { getNewDimensions, getNewPosition } from "../../../utils/dimansions/dimansions";
import MainCustomButtonParameter from "../../../shared/buttons/MainCustomButtonParameter";
import MainReturnButton from "../../../shared/buttons/MainReturnButton";

export default function Informations(props: any) {
    const dimensions = getNewDimensions(0, 30);

    const [information, setInformation] = useState([])


    let items: { label: any; value: any; icon?: (() => JSX.Element) | undefined; disabled?: boolean | undefined; selected?: boolean | undefined; }[] = [];

    let informations: any[] = [];
    data.map(d => {

        items.push({
            label: d.nameTranslatedPortuguese,
            value: d.googleMapsNameType,
            icon: () => <Icon name="flag" size={18} color="#900" />,
            disabled: false,
            selected: false
        })

    });

    console.log(informations)
    return <View style={{ position: 'absolute', height: dimensions.height }}>
        <Text style={{ position: 'relative', fontWeight: '700', color: '#777', padding: 10, margin:20, fontSize: 16, top: getNewPosition(0, 0, 20).top }}>
            Selecione os tipos de lugares que você deseja conhecer. Para realizar a busca corretamente você deve selecionar pelo menos um tipo de lugar e no máxímo dez tipos de lugares. 
          </Text>
          <View style={{ position:'relative', top: getNewPosition(0,0,90).top}}>
          
        <DropDownPicker
            items={items}
            multiple={true}
            multipleText="Você selecionou %d itens"
            min={1}
            max={10}
            placeholder={'Você deve selecionar pelo menos um item'}
            defaultValue={information}
            containerStyle={{ height: 40 }}
            itemStyle={{
                justifyContent: 'flex-start'
            }}
            onChangeItem={ items => informations.push(items) }
        />
        </View>
        <View style={{ position: 'relative', left: getNewDimensions(15, 0).width, flex: 0.5, top: 270 }}>
                { MainCustomButtonParameter('Classificação', 'Próximo ->', '#DDD', '#1C56E6', { ...props.route.params, informations })}
                {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
            </View>

    </View>

}