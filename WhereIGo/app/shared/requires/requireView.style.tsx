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
        flex: 0.3, margin:5, padding:5, position: "relative", left:'20%'
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
        top:'10%', 
        flexDirection: 'row', 
        flex: 0.1, 
        left: '5%'
    }, 
    kilometers: {
        position: 'relative', 
        top: '4%', 
        flex: 0.1,
        left:'15%', 
    }, 

    textKilometers: {
        position: "relative", 
        color: 'green', 
        width: 150, 
        fontWeight:'bold', 
        textAlign:'left', 
        top:'20%', 
        right:'9%', 
        margin:5, 
        padding:5
    },
    numberKm:{
        position: "relative", 
        left: '40%',
        color:'grey',  
        fontSize: 20, 
        fontWeight:'bold',
        top: '-55%'   
    }, 
    type:{
        position: "relative", 
        top: '10%', 
        left:'15%', 
        margin:5,
        padding:5, 
    
    }, 
    itens: {
        color: 'grey', 
        fontWeight: 'bold',
        position: "relative", 
        right:'6%', 
    }, 
    viewNotFound: {
        position:'relative', top:'15%', left:'15%'
    }
    
}); 