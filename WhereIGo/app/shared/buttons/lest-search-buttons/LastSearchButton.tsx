import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from 'react'
import Map from "../../../pages/screens/Map";
import { lastSearchStyle } from './lastSearchButton.style'

export default function LastSearchButton(redirectUri: string, title: string) {
    const navigate = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.navigate(redirectUri) }>
            <View style={lastSearchStyle.buttonView}>
                <Text style={{}}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

const callMap = function () {
    return <Map />
}