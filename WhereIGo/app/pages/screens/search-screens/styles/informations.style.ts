import { StyleSheet } from "react-native";
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

export const informationsStyle = StyleSheet.create({

    main: {
        backgroundColor: 'white', 
        width:'100%', 
        height: '100%'

    },
    viewTitle:{
        position:'relative',
        top: '15%', 
        width: '70%', 
        left: '15%'
    },
    viewDropdown: {
        position: 'relative',
        top: '20%',
        left: '10%'
    }, 

    title: {
        fontSize: 20,
        fontFamily: 'monospace',
        left: '5%'
    }, 
})