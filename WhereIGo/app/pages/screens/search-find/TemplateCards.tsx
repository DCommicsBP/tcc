import { Text, View } from "react-native";
import * as React from 'react';
import Axios from "axios";
import LocationModel from "../../../models/location.model";
import PlaceSearchModel from "../../../models/place.search.model";


export default function TemplateCards(props: any) {

    let pointsLocation: LocationModel[] = [];
    let placesSearchModel: PlaceSearchModel[] = []; 

    const [points, setPoints] = React.useState(pointsLocation)
    const [pointsBreak, setPointsBreak] = React.useState(true)
    const [placesBreak, setPlacesBreak] = React.useState(true)
    const [placesSearch, setPlacesSearch] = React.useState(placesSearchModel)

    const findPoints = (origin: any, destiny: any, travelMode: any) => {
        if (!pointsBreak) return;
        Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/osmr/get-route-coordinates/{latOrign}/{lngOrigin}/{latDestiny}/{lngDestiny}?" +
            "latOrign=" + origin.lat + "&lngOrigin=" + origin.lng + "&latDestiny=" + destiny.lat + "&lngDestiny=" + destiny.lng + "&travelMode=" + travelMode)
            .then(response => {
                let p: LocationModel[] = []

                if (response.data != null) {
                    response.data.forEach((element: any) => {
                        p.push(element)
                    })
                   
                    setPoints(p); 
                    setPointsBreak(false)
                }
            });
    }


    const findPlaces= (term: string, latitude: number, longitude: number, radius: number ) =>{
       if(!placesBreak) return;
       
        Axios.get("https://where-i-do-go-api-google-maps.herokuapp.com/yelp/find-nearby-places/{term}/{latitude}/{longitude}/{radius}" +
        "?term="+term +"&latitude="+ latitude+"&longitude="+longitude+"&radius=" + radius)
        
        .then(response => {
            let placesSearches : PlaceSearchModel[] = placesSearchModel;
            response.data.forEach((element:any) => {
                let place: PlaceSearchModel; 
                place = {
                    address: '', 
                    coordinates: { lat: element.coordinates.latitude, lng: element.coordinates.longitude}, 
                    distance: element.distance, 
                    image: element.image_url, 
                    isClosed: element.isClosed, 
                    name: element.name, 
                    phone: element.phone, 
                    price: element.price, 
                    rating: element.rating, 
                    reviewCount: element.review_count
                }; 
                    placesSearches.push(place); 
            });
            setPlacesBreak(false); 
            setPlacesSearch(placesSearches) 
        });
    }


        if( props.route.params != undefined){
            const { origin, destiny, term, radius } = props.route.params; 

            findPoints(origin, destiny, 'driving')
            if(points.length > 0 ){
                points.forEach(element=> {
                    findPlaces(term, parseFloat(element.lat+ ""), parseFloat(element.lng+""), radius)
                })
            }

        }
      

    console.log(props.destiny)

    return <View>
        {placesSearch.map(element=>{ <Text>
                {JSON.stringify(element)}
            </Text>
        })

        }
        <Text>
            teste
        </Text>
    </View>
}


