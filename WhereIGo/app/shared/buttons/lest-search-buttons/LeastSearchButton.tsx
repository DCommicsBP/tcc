import { TouchableOpacity } from "react-native-gesture-handler";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as React from 'react'

export default function LeastSearchButton(redirectUri: string, title: string) {
    const navigate = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigate.navigate(redirectUri)}>
            <View style={{}}>
    <Text style={{}}>{title}</Text>
            </View>
        </TouchableOpacity>
    ); 
}