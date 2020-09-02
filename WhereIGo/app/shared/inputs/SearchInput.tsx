import React, { Component } from 'react'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class SearchInput extends Component {
    render (){
        return <GooglePlacesAutocomplete
          onPress={(response)=>{console.log(response)}}
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

        style={{
          
        }}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute', 
            width: '100%', 
          }, 
          textInput: {
            borderTopWidth: 0, 
            borderBottomWidth: 0, 
            flex: 1, 
            height: 54, 
            top: 20
          }, 
          description:{
              
          },
          row:{
            height: 50, 
            marginBottom:1, 
            marginEnd: 1,
            marginLeft: 1, 
            marginTop:1, 
            left: 8, 
            backgroundColor:'white', 
            width: '96%', 
          }, 
          poweredContainer:{

          }, 
          separator:{
            backgroundColor:'transparent', 
            height: 2,
            width: '90%', 
            left: 20, 

          }, 
          
          textInputContainer:{
            backgroundColor:'transparent', 
            borderBottomColor: 'transparent', 
            borderTopColor:'transparent', 

          }
        }} 
    />
   }
}