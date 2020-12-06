import { Text, View } from "react-native";
import * as React from 'react';
import Axios from "axios";
import useAxios from 'axios-hooks'
import PlaceSearchModel from "../../../../models/place.search.model";
import Card from "./Card";
import { ScrollView } from "react-native-gesture-handler";
import { PolylineModel } from "../../../../models/polyline.model";

export default function TemplateCards(props: any) {

    let placesSearchModel: any[] = [];

    const [placesBreak, setPlacesBreak] = React.useState(false)
    const [routeBreak, setRouteBreak] = React.useState(false)
    const [placesSearch, setPlacesSearch] = React.useState(placesSearchModel)
    const { origin, destiny, price, rating, kilometers, information } = props
    const [route, setRoute] = React.useState([])
    const [message, setMessage] = React.useState("Carregando...")

 

    const setCoordinates = (c: any) => {
        props.newMarker(c)
        console.log('cooordinates template ===> ', c)
    }


    const loadData = function () {
        let inf = '';
        information.forEach((element: any) => {
            inf += element + ","
        });
        const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/" + inf.substring(0, inf.length - 1) + "/" + origin.lat + "/" + origin.lng + "/" + destiny.lat + "/" + destiny.lng + "/" + kilometers)
  
        if (loading) {
            return <View style={{ flex: 1 }}><Text> Teste ...</Text></View>
        }
  
        if (data && !placesBreak) {
            debugger; 
            setPlacesBreak(true)
            setPlacesSearch(data)
            console.log('data do use axioa ==>', data)
        }
  
        if (error) {
            return <View style={{ flex: 1 }}></View>
        }
    }

    loadData(); 
  
  return <ScrollView style={{}} horizontal pagingEnabled showsHorizontalScrollIndicator={false}  >
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
            return <Card key={index + ''} props={place} coordinates={(c: any) => setCoordinates(c)} />
        }) : <View><Text>{message}</Text></View>}
    </ScrollView>

}