import { StyleSheet } from "react-native";
import { getNewPosition, getNewDimensions} from "../../../../utils/dimansions/dimansions";

const newDimensions = getNewPosition(175, 10, 40);
const newDimensionsInput = getNewPosition(175, 10, 120);
const mainPosition = getNewDimensions(100, 100);

export const priceStyle = StyleSheet.create({

    principal :{ backgroundColor: 'white', width: mainPosition.width, height: mainPosition.height},
    viewTitle: { width: '70%', left: '15%', right: 0 },
    describe: { position: 'relative', color: '#777', textAlign:'center', top:40, fontSize:15, fontFamily:'monospace', margin: 10, padding: 10},
        
    
    checkbox: { position: 'relative', top: newDimensions.top, left: newDimensions.left  },
    checkboxView: {position: "relative",top: newDimensions.top }, 
    textInputView: {position:'relative', width: '100%', height:100, top: newDimensionsInput.top }, 
    textInput: { width: 50, height: 50, backgroundColor: '#EEE', top: 20, paddingLeft: 11, paddingRight: 10,  marginLeft: 21, marginRight: 20, marginBottom: 5, marginTop: 5, borderWidth:1, borderColor:'#BBB', left: '38%'}, 

}); 