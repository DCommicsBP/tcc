import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from 'react'
import { buttonView, text } from './mainCustomButtonStyle'

export default function MainReturnButton(redirectUri: string, title: string, fontColor: string='', backgroundColor: string='' ) {
   
    const navigate = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.goBack() }>
            <View style={buttonView(backgroundColor)}>
                <Text style={text(fontColor)}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
}

