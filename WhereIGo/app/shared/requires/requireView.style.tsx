import { StyleSheet } from "react-native"

export const makeSearchRequestStyle = StyleSheet.create({
    mainView: {
        flex:1, 
        position: "relative", 
        left: '10%', 
        
    }, 
    title: {
        color: 'green', 
        fontSize: 21, 
        fontWeight:'bold', 
        right:'10%'
    }, 

    priceColor: {
        position:'relative', 
        color: '#666600', 
        fontWeight:'bold', 
        top:'2%'
    }, 

    viewPlaces: {
        flex: 0.5, margin:5, padding:5, position: "relative", right:'20%'
    }, 

    describe: {
        position:'relative', 
        color: '#666600', 
        fontWeight:'bold'
    }, 

    latlng: {
        position: "relative", 
        color: 'grey', 
        fontWeight:'bold', 
        left: '5%', 
        top: '25%'

    }, 
    price: {
        position:'relative', 
        color: '#666600', 
        fontWeight:'bold',
        top:'5%', 
        flexDirection: 'row', 
        flex: 0.1
    }, 
    kilometers: {
        
    }
    
})