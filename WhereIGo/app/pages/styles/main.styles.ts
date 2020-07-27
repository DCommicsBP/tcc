import { StyleSheet } from "react-native";
import { getNewDimensions, dimensionsMain, getNewPosition } from "../../../app/utils/dimansions/dimansions";

const imageDimensions = getNewDimensions(28.5, 30)
const imagePosition = getNewPosition(17,0,30)
console.log(imageDimensions)
console.warn(imageDimensions)
debugger; 
debugger;
export const appStyle = StyleSheet.create({
    backgoround: {
        height: dimensionsMain.height,
        width: dimensionsMain.width
    },
    imageIcon: {
        position: "relative",
        top: imagePosition.top+"%",
        left: imagePosition.left+"%",
        width:  300,
        height: 300 
    },
    title: {
        color: '#99FF99', 
        position: 'relative',
        top: imagePosition.top+9+'%', 
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 35,
        transform: [{ rotate: "340deg" }], 
        right: '11%' 


    } ,

    viewButton: {
        position: 'relative',
        top: '40%',
        left: '40%'
    }
});