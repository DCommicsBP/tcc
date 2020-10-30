import { Alert, Text, View } from "react-native";
import * as React from 'react';
import Axios from "axios-hooks";
import axios from "axios";
import LocationModel from "../../../models/location.model";
import PlaceSearchModel from "../../../models/place.search.model";
import useAxios from "axios-hooks";


export default function TemplateCards(props: any) {

    let pointsLocation: LocationModel[] = [];
    let placesSearchModel: PlaceSearchModel[] = [];

    const [points, setPoints] = React.useState(pointsLocation)
    const [pointsBreak, setPointsBreak] = React.useState(true)
    const [placesBreak, setPlacesBreak] = React.useState(true)
    const [placesSearch, setPlacesSearch] = React.useState(placesSearchModel)


        React.useEffect(()=> {
            const {origin, destiny,  price, rating, kilometers, information } = props
            if(props.origin != undefined){
                let inf = ''; 
                information.forEach((element:any) => {
                    inf+=element+","
                });
                axios.get("http://localhost:8080/search-places-controller/places-service/"+ inf+"/"+origin.lat+"/"+ origin.lng+"/"+ destiny.lat+"/"+destiny.lng+"/"+ kilometers)
                .then(response=> {
                    response.data.forEach((element:PlaceSearchModel)=> {
                            console.log('element===>', element)
                    })
                })
                .catch(error=> Alert.alert("Não foi possível encontrar os lugares solicitados")); 
                
            }

        })




    return <View>

        <Text>
            teste
        </Text>
    </View>
}
