import { Text, View } from "react-native";
import * as React from 'react';
import useAxios from 'axios-hooks'
import PlaceSearchModel from "../../../../models/place.search.model";
import Card from "./Card";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";

export default function TemplateCards(props: any) {

    let placesSearchModel: any[] = [];
    let breakPlaces: boolean = false; 

    let placesSearch: any[] = []; 
    const { origin, destiny, price, rating, kilometers, information } = props

    const loadRoute = function () {
        let inf = '';
        information.forEach((element: any) => {
            inf += element + ","
        });

        const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/"
        + inf.substring(0, inf.length - 1) + "/" + origin.lng
        + "/" + origin.lat + "/" + destiny.lng + "/" + destiny.lat + "/" + kilometers)
            if (data) {
            let places: PlaceSearchModel [] = [];
              data.forEach((element: any) => {
                let ele: PlaceSearchModel = element as PlaceSearchModel; 
                    
                places.push(ele);
                })
                
                placesSearch = places; 
                breakPlaces = !breakPlaces; 
                console.log('places search', placesSearch)
      }
  
        if(error) {
            console.log('error places ==> ',  error)
        }
    }
  
    const setCoordinates = (c: any) => {
        props.newMarker(c)
        console.log('cooordinates template ===> ', c)
    }
if(!breakPlaces){
//  fetchData()
loadRoute()

}
 
    return    <ScrollView style={{}} pagingEnabled showsHorizontalScrollIndicator={false}  >
    {placesSearch.length > 0 ? placesSearch.map((element: any, index: number) => {
        console.log('element', element)
        let place: PlaceSearchModel = {
            address: element.address,
            cep: element.cep,
            city: element.city,
            coordinates: element.coordinates,
            country: element.country,
            image: element.image,
            name: element.name,
            phone: element.phone,
            rating: element.rating,
            price: element.price,
            state: element.state,
            isClosed: false

        }
      //  return <Card key={index + ''} props={place} coordinates={(c: any) => setCoordinates(c)} />
    }) : <View><Text>nao deus</Text></View>}
</ScrollView>;    

}

  