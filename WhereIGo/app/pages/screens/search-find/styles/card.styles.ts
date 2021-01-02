import { Dimensions, StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({

    place: {
        width: Dimensions.get('window').width - 40,
        maxHeight: 135,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        padding: 10,
        right: 0,
        borderColor: "#CCC", 
        borderWidth: 1
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 12,
        fontWeight: 'bold',
        color: "#444"
    },
    centeredView: {
        fontFamily: 'monospace',

        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 10,
        textAlign: "center"
    }

})
