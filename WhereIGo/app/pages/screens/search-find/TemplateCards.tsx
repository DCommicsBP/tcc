import { StyleSheet, Text, View } from "react-native";
import * as React from 'react';
import Axios from "axios";
import PlaceSearchModel from "../../../models/place.search.model";
import Card from "./Card";
import { ScrollView } from "react-native-gesture-handler";


export default function TemplateCards(props: any) {

    let placesSearchModel: any[] = [];

    const [placesBreak, setPlacesBreak] = React.useState(false)
    const [placesSearch, setPlacesSearch] = React.useState(placesSearchModel)
    const { origin, destiny, price, rating, kilometers, information } = props
    const [message, setMessage] = React.useState("Carregando...")

    let inf = '';
    information.forEach((element: any) => {
        inf += element + ","
    });



    const gateSearch = () => {
        React.useEffect(() => {
            if(placesBreak) return; 
            if(placesSearch.length <= 0){

            Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/" + inf.substring(0, inf.length - 1) + "/" + origin.lat + "/" + origin.lng + "/" + destiny.lat + "/" + destiny.lng + "/" + kilometers)
                .then(response => {
                    console.log(response)
                    let data = response.data as any[]
                    if (response.data != null && placesSearch.length <=0) {
                        setPlacesSearch(data)
                        setPlacesBreak(true)
                    }
                })
                .catch(error => {
                    console.log('ERRROOOOO', error)
                    setMessage("Não foi possível encontrar as informações no momento. Aguarda mais um instante. ")
                })
            }

        })

    }

    gateSearch()
    console.log('places ====> ', placesSearch)
    return<ScrollView style={styles.placesContainer} horizontal pagingEnabled showsHorizontalScrollIndicator={true}  >
            {placesSearch.length > 0? placesSearch.map((element:any, index: number)=>{ 
            console.log('element', element)
            let place:PlaceSearchModel ={
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
            let placeString: string = JSON.stringify(place)
            return <Card  key={index+''} props={place} />
            }): <View><Text>{message}</Text></View>}
        </ScrollView>
        
}


const styles=StyleSheet.create({
 placesContainer: {
    maxHeight: 200,
    height: 200,
    position: 'relative',
    

  },

})