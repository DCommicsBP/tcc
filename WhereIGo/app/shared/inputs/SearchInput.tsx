import React, { Component } from 'react'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Platform} from 'react-native' 

export default class SearchInput extends Component {
    render (){
        return <GooglePlacesAutocomplete
          placeholder="Para onde?"
          onPress={()=>{}}
          query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyBl_UJ_MQziKKhB-GB2MIVrXrhUwlX6IyY',
          language: 'en', // language of the results
          types: '(cities)' // default: 'geocode'
        }}
        
        textInputProps={{
          autoCapitalize:'none', 
          autoCorrect: false
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'relative', 
            top: Platform.select({ios: 60, android: 40}), 
            width: '100%', 
            backgroundColor: 'white'
            
          }, 
          textInput: {
            height: 54, 
            marginHorizontal: 20, 
            borderTopWidth: 0, 
            borderBottomWidth: 0, 
            flex: 1, 
            backgroundColor: 'white'
          }, 
          description:{

          },
          row:{

          }
        }} 
    />
   }
}