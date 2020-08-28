import { StyleSheet, Dimensions } from "react-native";
import { getNewDimensions } from "../../utils/dimansions/dimansions";

const newMapDimensions =  getNewDimensions(90, 85)
export const mapStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      mapStyle: {
        width: 300,
        height: 300,
      },
})