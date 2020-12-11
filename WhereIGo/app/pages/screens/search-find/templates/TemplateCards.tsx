import { Text, View } from "react-native";
import * as React from 'react';
import useAxios from 'axios-hooks'
import PlaceSearchModel from "../../../../models/place.search.model";
import Card from "./Card";
import { ScrollView } from "react-native-gesture-handler";
import Axios from "axios";

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
    const loadPlaces = function () {
        let inf = '';
        information.forEach((element: any) => {
            inf += element + ","
        });
        const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/" + inf.substring(0, inf.length - 1) + "/" + origin.lng 
        + "/" + origin.lat + "/" + destiny.lng + "/" + destiny.lat + "/" + kilometers)
            if (data) {
                let elements:any = []; 
              data.forEach((element: any) => {
                let ele: any = element;
                elements.push(ele)
                })
                
                setPlacesSearch(elements)
                setPlacesBreak(true);
                
                console.log('route axios hooks',  route)
      }
        if(error) {
            console.log('error places ==> ',  error)
        }
    }
    /*
    const gateSearch = () => {
        React.useEffect(() => {
            let inf = '';
            information.forEach((element: any) => {
                inf += element + ","
            });
            if(placesSearch.length > 0 && placesBreak) return; 
            if(placesSearch.length <= 0){

            Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/" + inf.substring(0, inf.length - 1) + "/" + origin.lng + "/" + origin.lat + "/" + destiny.lng + "/" + destiny.lat + "/" + kilometers)
                .then(response => {
                    console.log(response)
                    let data = response.data as any[]
                    if (response.data != null && placesSearch.length <=0) {
                        setPlacesSearch(response.data)
                        setPlacesBreak(true)
                        return; 
                    }
                })
                .catch(error => {
                    console.log('ERRROOOOO', error)
                    setMessage("Não foi possível encontrar as informações no momento. Aguarde mais um instante. ")
                })
            }

        }, [])

    }*/

    if(placesSearch.length == 0)
        loadPlaces(); 

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