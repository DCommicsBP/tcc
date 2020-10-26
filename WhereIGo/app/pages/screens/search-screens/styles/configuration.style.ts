import { Dimensions, StyleSheet } from "react-native";
import { getNewDimensions } from "../../../../utils/dimansions/dimansions";

const { width, height} = Dimensions.get('window')

export const configurationStyle = StyleSheet.create({

    principal: {
        backgroundColor: 'white',
        top: 0, 
        bottom: 0, left: 0,
        right: 0, 
        width: width, 
        height:height, 
    },

     title : {
         fontSize: 20,
         fontFamily: 'monospace',
         left: '5%'
    }, 
    searchView: {
        position: "relative", 
        top: '5%'
    },

    searchInput: {
        width: '90%', height: 50, backgroundColor: '#EEE', top: 20, paddingLeft: 10, paddingRight: 10,  marginLeft: 20, marginRight: 20, marginBottom: 5, marginTop: 5, borderWidth:1, borderColor:'#BBB'

    },
    touchableOpacityView: {
        position: 'relative', 
        top: '15%', 
        width: '90%', 
        left: '5%',
        height: '30%'
    }, 
    touchableOpacity: {
        borderColor: '#CCC',
        borderWidth: 5, 
        height: 50,
    },
    opacity: {

        margin: 5, 
        padding: 10
    }



})