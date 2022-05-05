import products from "../products.json";
import { DESCRIPTION_DATA, SORT_DATA } from "./actiontypes";

const initState = {
    products:[...products]
}

export const dataReducer = (state=initState, {type,payload})=>{
     switch (type) {
         case  SORT_DATA :
             return {
                ...state,
                sortedData:[...payload]

             }
          case DESCRIPTION_DATA : {
              return {
                  ...state,
                  discriptionData:payload
              }
          }
         default :{
             return state
         }
     }
}