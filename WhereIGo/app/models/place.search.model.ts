import LocationModel from "./location.model";

export default interface PlaceSearchModel {
    
    distance: number; 
    rating: number; 
    coordinates: LocationModel; 
    reviewCount: number; 
    price: number; 
    phone: string; 
    name: string;
    address: string; 
    isClosed: boolean; 
    image: string; 
}
