import { getNewDimensions } from "../../../utils/dimansions/dimansions"
import { StyleProp, TextStyle } from "react-native"

const buttonDimensions = getNewDimensions(30,10)
export const mainButtonStyle = {
  
    circleGradient: {
        backgroundColor: "transparent",
        border: 5,
        borderBottom: 5, 
        borderTop: 5,
        width: 100, 
        height:40,
      },
      visit: {
        borderWidth: 1,
        borderColor: "whitesmoke",
        fontSize:30,
        color: 'whitesmoke', 
        textAlign: 'center', alignSelf: 'stretch', 

      } as StyleProp<TextStyle>
}