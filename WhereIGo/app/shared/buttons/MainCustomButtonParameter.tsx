import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from 'react'
import { buttonView, text } from './mainCustomButtonStyle'

export default function MainCustomButtonParameter(redirectUri: string, title: string, fontColor: string='', backgroundColor: string='', objectToRecive: any ) {
   
    const navigate = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.navigate(redirectUri, objectToRecive) }>
            <View style={buttonView(backgroundColor)}>
                <Text style={text(fontColor)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

