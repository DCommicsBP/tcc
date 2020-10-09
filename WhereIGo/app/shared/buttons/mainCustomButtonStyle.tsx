import { StyleSheet, TextStyle, StyleProp, ViewStyle } from "react-native";
import {getNewDimensions } from '../../utils/dimansions/dimansions'

const customDimensions = getNewDimensions(90,5); 

export let buttonView = (backgroundColor: string)=> {
        
    return {
        backgroundColor: backgroundColor,
        position: "relative",
        padding: 5,
        margin: 5,
        marginTop: 10, 
        width: '70%'
    } as StyleProp<ViewStyle>
}

export let text = function(color: string){
    return {
    color: color, 
    fontStyle: "normal", 
    fontSize: 20,
    textAlign:"center"
    } as StyleProp<TextStyle>
}

export const mainCustomButtonStyle = StyleSheet.create({
 
})