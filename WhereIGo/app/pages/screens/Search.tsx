import * as React from "react";
import { View, Text, Button } from "react-native";
import MainCustomButton from "../../shared/buttons/MainCustomButton";
import Draw from "../../routes/router.navigations";

export default function Search() {

    return (

        <React.Fragment>
            <Draw/>

            <View style={{ top: '30%' }}>
                <View>
                    <Text style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 25,
                        position: 'relative',
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontFamily: 'monospace'
                    }}>

                        Configure os filtros que deseja utilizar para realizar a sua pesquisa.
                        </Text>
                </View>
                <View style={{
                    position: 'relative',
                    top: '50%',

                }}>

                    <View style={{
                        position: 'relative',
                        left: '12%'
                    }}
                    >
                        {MainCustomButton('Configurations', 'Configurations', '#DDD', '#0768CD')}

                    </View>

                </View>
            </View>

        </React.Fragment>
    )
}

