import LocationModel from "./location.model";

export default interface PlaceModel {
    name: string; 
    address: string; 
    location: LocationModel;  
}