import * as React from "react";
import SearchInput from "../../shared/inputs/SearchInput";
import { View } from "react-native";

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
            <View style={{ flex: 1 }}>
                <SearchInput />
                <SearchInput />
            </View>
        )
    }
}
