import useAxios from "axios-hooks";
import { Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import PlaceSearchModel from "../../../../models/place.search.model";
import Card from "../../search-find/templates/Card";
import React from 'react';
import { useNavigation } from "@react-navigation/native";

export default function TemplateCards(props: any) {
    debugger
    let placesSearchModel: any[] = [];
    let breakPlaces: boolean = false;

    let placesSearch: any[] = [];
    const { origin, destiny, price, rating, kilometers, information } = props

    const loadPlaces = function () {
        let inf = '';
        information.forEach((element: any) => {
            inf += element + ","
        });

        const [{ data, loading, error }, refetch] = useAxios("https://where-i-do-go-api-google-maps.herokuapp.com/search-places-controller/places-service/"
            + inf.substring(0, inf.length - 1) + "/" + origin.lng
            + "/" + origin.lat + "/" + destiny.lng + "/" + destiny.lat + "/" + kilometers)
        if (data) {
            let places: PlaceSearchModel[] = [];
            data.forEach((element: any) => {
                let ele: PlaceSearchModel = element as PlaceSearchModel;

                places.push(ele);
            })

            placesSearch = places;
            breakPlaces = !breakPlaces;

        }

        else if (loading) {
            return <View><Text>Carregando ...</Text></View>
        }

        else if (error) {
            return <View><Text>Não foi possível retornar as informações.Tente novamente mais tarde.</Text></View>
        }
    }

    if (!breakPlaces)
        loadPlaces()
        
    return (<ScrollView style={{}} pagingEnabled showsVerticalScrollIndicator={false}  >
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
            return <Card key={index + ''} props={place} />
        }) : <View></View>}
    </ScrollView>
    )
}