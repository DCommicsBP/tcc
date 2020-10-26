import *  as React from 'react'
import { View, Text }  from 'react-native';
import SearchInput from '../../../shared/inputs/SearchInput';
import { getNewDimensions } from '../../../utils/dimansions/dimansions';
import MainCustomButtonParameter from '../../../shared/buttons/MainCustomButtonParameter';
import MainReturnButton from '../../../shared/buttons/MainReturnButton';
import LocationModel from '../../../models/location.model';


export default function ConfigPlaceOld() {

    const [origin, setOrigin] = React.useState();
    const [destiny, setDestiny] = React.useState();

    let teste = new LocationModel(); 
    return (
        <View style={{ position: 'relative', flex: 1, top: '5%', width: '100%' }}>
            <View style={{ position: 'absolute', top: '5%', width: '100%' }}>
                <Text style={{
                    paddingLeft: 15,
                    marginLeft: 15,
                    fontFamily: 'monospace',
                    flex: 0.05,
                }}>
                    Origem:
            </Text >
                <View style={{ flex: 0.05, top: '15%' }}>
                    <SearchInput newPostition="top" onSubmit={(detailValue: any) => setOrigin(detailValue)} />
                </View>
                <View style={{ position: 'absolute', top: '555%', width: '100%'}}>
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
                        <SearchInput newPostition="bottom" onSubmit={(detailValue: any) => setDestiny(detailValue)} />
                    </View>
                </View>
            </View>
            <View style={{ position: 'relative', left: getNewDimensions(15, 0).width, flex: 0.5, top: 420 }}>
                {origin != null && destiny != null ? MainCustomButtonParameter('Valores', 'Próximo ->', '#DDD', '#1C56E6', { origin: origin, destiny: destiny }) : <Text></Text>}
                {MainReturnButton('Início', 'Retornar', '#0768CD', '#8FC1F5')}
            </View>


        </View>

    );


}