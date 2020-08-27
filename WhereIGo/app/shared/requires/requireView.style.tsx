import { StyleSheet } from "react-native"
import { getNewDimensions } from "../../utils/dimansions/dimansions";

export const makeSearchRequestStyle = StyleSheet.create({
    mainView: {
        position: 'relative', 
    }, 
    // al main title in init session
    title: {
        color: '#2459D3', 
        fontWeight: 'bold', 
        fontSize:20, 
        margin:5, 
        padding:5, 
    }, 

    // places session
    
    widthMainBox: {
        display:'flex',flexDirection:'row', margin:10, padding:10, position: 'relative'
    },

    viewPlaces: {
        width: getNewDimensions(45,2).width, margin: 5, 
        right: '10%',
        color: '#09318C'
    }, 
    
    describe: {
        color: '#09318C', 
        fontSize:18, 
    }, 

    latlng: {
        color: 'grey', 
        fontWeight:'bold'
    }, 

    // price and kilometers session 

    priceAndKilometers: {
        position: 'relative', display:'flex', flexDirection:'row', 
    }, 

    priceAndKmColor: {
        color: 'grey', position:'relative', top: '-2%', fontSize: 30       
    }, 

    // type and informations sessions
    typeAndPlacesBox: {
        position: 'relative', 
        display:"flex", 
        flexDirection:'row'
    },

    itens: {
         position: 'relative', 
         left: '30%'       
    },

    // infos and places not found

    viewInfosNotFound: {
        position: 'relative',
        
    }, 
    
    viewPlacesNotFound: {
        position: 'relative',
        top: '15%', 
        right: '640%'
        
    }, 
    
}); 