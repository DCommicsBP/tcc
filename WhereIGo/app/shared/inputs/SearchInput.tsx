import React, { Component } from 'react'; 
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'; 

export default class SearchInput extends Component {
    render (){
        return <GooglePlacesAutocomplete
            placeholder="Para onde? "
            onPress={(e)=> {console.warn(e)}}
            query= {{
                key:"AIzaSyCbavXQ8_kR6zm9bZcjAuRmeLpWh8dNb4Q",
                language: 'pt-BR'
            }}
            textInputProps={{
                autoCapitalize:"none", 
                autoCorrect: false,
                autoCompleteType:'street-address'
            }}
            fetchDetails={true}
            placeholderTextColor="#333"
            enablePoweredByContainer={false}
        />
    }
}