import products from "../products.json";
import cartdata from "../cartdata.json"
import { DESCRIPTION_DATA, SORT_DATA, CART_DATA, DELETE_CART_DATA } from "./actiontypes";

const initState = {
    products: [...products],
    cartdata: [...cartdata],
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
         case CART_DATA: {
             return {
                 ...state,
                 cartData: payload
             }
         }
         case DELETE_CART_DATA: {
             return {
                 ...state,
                 cartData: cartdata.filter((item)=>item.desc!= payload)
             }
         }
         default :{
             return state
         }
     }
}