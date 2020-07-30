import PlaceModel from "./place.model";

export default interface SearchModel {

    fromPlace: PlaceModel; 
    toPlace: PlaceModel;
    paymentValue: number; 
    quilometers: number;  
    informations: Array<string>; 
    placesType: Array<string>;
    classification: number;  

}