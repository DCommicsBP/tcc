import { Dimensions } from "react-native";

export const dimensionsMain = Dimensions.get('window');

export const dimensions = {width: dimensionsMain.width, scale: dimensionsMain.scale,
    fontScale: dimensionsMain.fontScale, height: dimensionsMain.height
}

export let getNewDimensions = (width:number, height:number)=>{
    dimensions.width = dimensionsMain.width*width/100
    dimensions.height = dimensionsMain.height*height/100
    return dimensions;
}

export let getNewPosition = (leftPorcent: number, rightPorcent: number, top: number)=> {

      let positionsReturn: Positions =  {
        left: leftPorcent, 
        right:rightPorcent,
        top:top
    }
    
    return positionsReturn;

}

export default class Positions{

 right: number=0; 
 left:number = 0; 
 top: number = 0;  
}
