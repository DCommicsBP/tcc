import LocationModel from "./location.model";

export default interface PlaceSearchModel {
    
    image:string;
    coordinates:LocationModel;
    phone:string;
    address: string;
    state:string;
    city:string;
    cep:string;
    country:string;
    isClosed:boolean;
    rating:string;
    price:string;
    name: string;
}
