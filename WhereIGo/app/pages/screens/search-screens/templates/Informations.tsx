import React, { useState } from "react";
import { Text, View } from "react-native";
import data from '../../../../data/types.json'
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from "react-native-elements";
import { getNewDimensions, getNewPosition } from "../../../../utils/dimansions/dimansions";
import MainCustomButtonParameter from "../../../../shared/buttons/MainCustomButtonParameter";
import MainReturnButton from "../../../../shared/buttons/MainReturnButton";
import { informationsStyle } from "../styles/informations.style";

export default function Informations(props: any) {
    const [information, setInformation] = useState([])

    let items: { label: any; value: any; icon?: (() => JSX.Element) | undefined; disabled?: boolean | undefined; selected?: boolean | undefined; }[] = [];

    data.map(d => {
        items.push({
            label: d.nameTranslatedPortuguese,
            value: d.googleMapsNameType,
            icon: () => <Icon name="find-replace" size={20} color="#666" />,
            disabled: false,
            selected: false, 

        })
    });

    return <View style={informationsStyle.main}>
        <View style={informationsStyle.viewTitle}>
            <Text style={informationsStyle.title}>
                Selecione os tipos de lugares que você deseja conhecer. Para realizar a busca corretamente você deve selecionar pelo menos um tipo de lugar e no máxímo dez tipos de lugares.
            </Text>
        </View>
        <View style={informationsStyle.viewDropdown}>

            <DropDownPicker
                style={{width: '80%'}}
                items={items}
                multiple={true}
                multipleText="Você selecionou %d itens"
                min={1}
                max={5}
                placeholder={'Você deve selecionar pelo menos um item'}
                defaultValue={information}
                containerStyle={{ height: 40 }}
                itemStyle={{
                    justifyContent: 'flex-start',
                    width: '80%'
                }}
                activeLabelStyle={{
                    color: "#AAA"
                }}
                labelStyle={{
                    fontFamily: 'monospace',
                    width: '80%'

                }}
                dropDownStyle={{
                    width: '80%'
                }}
                onChangeItem={items => setInformation(items)}
            />
        </View>
        <View style={{position: 'absolute', left: getNewDimensions(15, 0).width, flex: 0.5, top: '80%', width:'100%'}}>
            {information.length > 0? MainCustomButtonParameter('Classificação', 'Próximo ->','#FFF', '#AAA', { ...props.route.params, information }): <View></View>}
            {MainReturnButton('Início', 'Retornar', '#CCC', '#FFF')}
        </View>
    </View>

}
