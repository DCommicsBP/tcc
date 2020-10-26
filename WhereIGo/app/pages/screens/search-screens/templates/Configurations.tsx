import *  as React from 'react'
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MainCustomButtonParameter from '../../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../../shared/buttons/MainReturnButton';
import { getNewDimensions } from '../../../../utils/dimansions/dimansions';
import { configurationStyle } from '../styles/configuration.style';

export default function ConfigPlace() {

    const [origin, setOrigin] = React.useState();
    const [destiny, setDestiny] = React.useState();
    const [list, setList] = React.useState([]);
    const [search, setSearch] = React.useState("");


    return (

        <View style={configurationStyle.principal}>
            <View style={configurationStyle.searchView}>
                <View>
                    <Text style={configurationStyle.title}>Origem</Text>
                    <TextInput
                        onChangeText={(s) => setSearch(s)}
                        style={configurationStyle.searchInput}
                    />
                </View>
                <View style={{ position: 'relative', top: 50 }}>
                    <Text style={configurationStyle.title}>Destino</Text>
                    <TextInput
                        onChangeText={(s) => setSearch(s)}
                        style={configurationStyle.searchInput}
                    />
                </View>
            </View>
            {list.map((listItem: any, index: number) => (
                <View style={{}}>
                    <Text style={{}}>Teste 1</Text>
                    <Text style={{}}>teste 2</Text>
                </View>
            ))}

            <View style={{ position: 'relative', left: getNewDimensions(15, 0).width, flex: 0.5, top: 420 }}>
                {MainCustomButtonParameter('Valores', 'Próximo ->', '#FFF', '#AAA', { origin: origin, destiny: destiny })}
                {MainReturnButton('Início', 'Retornar', '#CCC', '#FFF')}
            </View>

        </View>

    );

}