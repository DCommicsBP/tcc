import LocationModel from "./location.model";
import PlaceModel from "./place.model";

export default interface SearchModel {

    fromPlace: LocationModel; 
    toPlace: LocationModel;
    paymentValue: number; 
    kilometers: number;  
    informations: Array<string>; 
    classification: number; 
    placesArray: Array<any>; 


}