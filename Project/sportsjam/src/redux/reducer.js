import products from "../products.json";
import { DESCRIPTION_DATA, SORT_DATA, CART_DATA, DELETE_CART_DATA,INCREASE_QTY,DECREASE_QTY } from "./actiontypes";

const initState = {
    products: [...products],
    cartdata: [],
}

export const dataReducer = (state = initState, { type, payload }) => {
     switch (type) {
         case SORT_DATA: {
             return {
                 ...state,
                 sortedData: [...payload]

             }
         }
          case DESCRIPTION_DATA : {
              return {
                  ...state,
                  discriptionData:payload
              }
         }
         case CART_DATA:{
             return {
                 ...state,
                 cartdata: payload
             }
        }
         case DELETE_CART_DATA: {
             return {
                 ...state,
                 cartData: state.cartdata.filter((item) =>  item.id !== payload )
             }
         }
         case INCREASE_QTY: {
             return {
                 ...state,
                 cartData: state.cartdata.map((item) => {
                     if (item.id == payload) {
                         ++item.qty
                     }
                 })
             }
         }
         case DECREASE_QTY: {
             return {
                 ...state,
                 cartData: state.cartdata.map((item) => {
                     if (item.id == payload) {
                         --item.qty
                     }
                 })
             }
         }
         default :{
             return state
         }
     }
}