import * as React from "react";
import SearchInput from "../../shared/inputs/SearchInput";
import { View, Text } from "react-native";

export default class Search extends React.Component {
    state = {
        region: {
            latitudeDelta: 0, latitude: 0, longitudeDelta: 0, longitude: 0
        }
    }


    async componentDidMount() {
        navigator.geolocation.getCurrentPosition(

            ({ coords: { latitude, longitude } }) => {
                this.setState({
                    region: {
                        latitudeDelta: 0, latitude: latitude, longitudeDelta: 0, longitude: longitude
                    }
                })
            },
            (error) => {
            }, {
            timeout: 2000,
            enableHighAccuracy: true,
            maximumAge: 1000,
        });

    }

    render() {
        let { region } = this.state;
        return (

                <View style={{ top: '30%'}}>
                    <View>
                        <Text style={{
                                 marginTop: 20,
                                 marginBottom: 20,
                                 marginLeft: 20,
                                 marginRight: 20,
                                 position: 'relative',
                                 top: '-140%'
                        }}>
                            Escolha as configurações que você deseja utilizar na busca.
                        </Text>
                    </View>
                    <Text style={{
                        marginTop: 20,
                        marginBottom: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        position: 'absolute',
                        top: '-80%'
                    }}>
                        Sai de
                </Text>
                    <SearchInput />
                </View>
                
        )
    }
}
