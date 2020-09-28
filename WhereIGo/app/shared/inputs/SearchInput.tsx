import React, { Component } from 'react'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import LocationModel from '../../models/location.model';

export default function SearchInput (props: any) {
  let values = Object.keys(props).map(key => props[key]);
  console.log(values)
  
  let numberValue = 0; 
   if ( values[0] == 'top'){
    numberValue = 120; 
   } else if (values[0] == 'bottom'){
    numberValue = 65; 
   }
  

        return <GooglePlacesAutocomplete
    
        onChangeText={ ()=> {
          
        }}
        onPress={(data, details = null) => {
          props.onSubmit(details)
          details?.geometry
          // 'details' is provided when fetchDetails = true
          console.log('lat ===> ',  details?.geometry.location.lat);
          let locationModel: LocationModel = {
            lat: details?.geometry.location.lat, 
            lng: details?.geometry.location.lng
          }
          props.onSubmit(locationModel) ; 
         
        }}

        GooglePlacesDetailsQuery={{

        }}
          query={{
          // available options: https://developers.google.com/places/web-service/autocomplete
          key: 'AIzaSyBl_UJ_MQziKKhB-GB2MIVrXrhUwlX6IyY',
          language: 'pt-BR', // language of the results
          types: '(cities)',
           // default: 'geocode'
        }}
        
        textInputProps={{
          autoCapitalize:'none', 
          autoCorrect: false
        }}
        accessibilityViewIsModal={true}
        numberOfLines={2}
        maxLength={2}
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
            backgroundColor:'#A6C6E1', 
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
            top: numberValue,
          },

          textInputContainer:{
            backgroundColor:'transparent', 
            borderBottomColor: 'transparent', 
            borderTopColor:'transparent',       
            
          }
        }} 
    />
}