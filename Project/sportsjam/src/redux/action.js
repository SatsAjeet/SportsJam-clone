import { SORT_DATA } from "./actiontypes";
import { DESCRIPTION_DATA } from "./actiontypes";
import { CART_DATA, DELETE_CART_DATA,INCREASE_QTY,DECREASE_QTY, } from "./actiontypes";

export const sorted_data= (dispatch,payload)=>{
    dispatch({
        type:SORT_DATA,
        payload,
    })
  
}
export const description_data = (dispatch,payload)=>{
    dispatch({
        type:DESCRIPTION_DATA,
        payload
    })
}

export const delete_cart_data = (payload) => {
    return {
        type: DELETE_CART_DATA,
        payload
    }
}
export const increase_qty = (payload) => {
    return {
        type: INCREASE_QTY,
        payload
    }
}
export const decrease_qty = (payload) => {
    return {
        type: DECREASE_QTY,
        payload
    }
}
export const cart_data = (payload) => {
    return {
        type: CART_DATA,
        payload
    }
}
