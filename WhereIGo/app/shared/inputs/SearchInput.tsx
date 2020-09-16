import React, { Component } from 'react'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchInput (props: any) {
  let values = Object.keys(props).map(key => props[key]);
  console.log(values)

  let numberValue = 0; 
   if ( values[0] === 'top'){
    numberValue = 120; 
   } else if (values[0] === 'bottom'){
    numberValue = 9; 
   }
  
 
        return <GooglePlacesAutocomplete
        
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}

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
            position: 'absolute', 
            width: '100%',
            
          }, 
          textInput: {
            borderTopWidth: 0, 
            borderBottomWidth: 0, 
            flex: 1, 
            height: 54, 
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
            backgroundColor:'blue', 
            width: '96%',
             
        
          }, 
          poweredContainer:{
              top: 50
          }, 
          separator:{
            backgroundColor:'transparent', 
            height: 2,
            width: '90%', 
            left: 20, 

          }, 
          listView: {
            top: numberValue
          }, 
          textInputContainer:{
            backgroundColor:'transparent', 
            borderBottomColor: 'transparent', 
            borderTopColor:'transparent',       
            
          }
        }} 
    />
}