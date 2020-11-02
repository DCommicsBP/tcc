import { Dimensions, StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({

    place: {
        width: Dimensions.get('window').width - 40,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20, 
        padding: 20,
        left: 20,
        right: 0,
    },
    text: {
        fontFamily: 'monospace',
        fontSize: 12,
        fontWeight: 'bold',
        color: "#444"
    },
    centeredView: {
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
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }

})
