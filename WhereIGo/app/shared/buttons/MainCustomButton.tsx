import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from 'react'
import Map from "../../pages/screens/Map";
import { buttonView, text } from './mainCustomButtonStyle'

export default function MainCustomButton(redirectUri: string, title: string, fontColor: string='', backgroundColor: string='' ) {
    const navigate = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.navigate(redirectUri) }>
            <View style={buttonView(backgroundColor)}>
                <Text style={text(fontColor)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

