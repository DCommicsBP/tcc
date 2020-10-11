import Axios from "axios";
import { env } from "../enviroments/enviroments";
import SearchModel from "../models/search.model";
import react from 'react'

export default function GoogleServices(searchModel: SearchModel) {

    console.log('google places search ', searchModel.placesArray)

    
    let informations  = searchModel.informations.filter(element=> element != null) 
    searchModel.placesArray.push(searchModel.fromPlace);
    searchModel.placesArray.push(searchModel.toPlace);
    console.log('informations ===> ', searchModel.placesArray)

    let places:any = [];
    informations.forEach(placeType => {
        searchModel.placesArray.forEach(async placeGeolocation => {
            if(placeGeolocation != null){

          console.log('dentro do array===> ',placeType, placeGeolocation )
            let location: string = `location=${placeGeolocation.lat},${placeGeolocation.lng}`
            let radius: string = `radius=${searchModel.kilometers *1000}`; 
            let type: string = `keyword=${placeType}`
            let key: string = `key=${env.apiKey}`

             Axios.get(`${env.nearbySearchUrl}${location}&${radius}&${type}&${key}`)
            .then(response => {
                console.log('RESPOSTA ===> ', response) 
            })
            .catch(error => { console.warn("ERROR ====> ",error)})
            }
        })
    })

    console.log('places ===> ', places)
    return places; 

}