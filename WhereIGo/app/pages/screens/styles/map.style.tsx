import { StyleSheet, Dimensions } from "react-native";
import { getNewDimensions } from "../../../utils/dimansions/dimansions";

const { height, width } = Dimensions.get('window');
const newMapDimensions = getNewDimensions(90, 85)
export const mapStyle = StyleSheet.create({
  mapStyle: {
    width: newMapDimensions.width,
    height: newMapDimensions.height,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: 'transparent'
  },
  placesContainer: {
    width: '100%',
    marginHorizontal: 20,
  },

  mapView: {
    position: 'absolute',
    top: 0, left: 0, right: 0,
    bottom: 0,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: 'transparent',
  },

  description: {
    color: '#999',
    fontSize: 12,
    marginTop: 5,
  },
});
