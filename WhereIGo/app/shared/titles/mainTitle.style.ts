import { StyleSheet } from 'react-native'; 
import { dimensionsMain, getNewDimensions } from '../../utils/dimansions/dimansions';
const dimensions = dimensionsMain; 

export const mainTitleStyle = StyleSheet.create({

    mainView: {
        position: 'absolute', 
        width: dimensionsMain.width, 
        height: dimensionsMain.height
    },
    
    intermediateView: {
        position: "relative", 
        backgroundColor: '#009900', 
        width: getNewDimensions(66,100).width, 
        height: getNewDimensions(100, 7).height, 
        top: '5%', 
        left: '18%'
    }, 

    viewTitle: {
        position: 'relative', 
        alignContent: "center", 
        justifyContent:'center', 
        padding: 5, 
        margin: 5, 
        left: '3%', 

        width: getNewDimensions(60,100).width, 
        backgroundColor:'#97D077', 
        top: '9%'
    }, 

    title: {
        position: "relative", 
        textAlign: "center", 
        width: dimensions.width,
        alignItems: 'center',
        fontWeight: 'bold', 
        fontSize: 20, 
        left: '-32%', 
        color: '#666600'
        
    }
})