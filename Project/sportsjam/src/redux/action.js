import { SORT_DATA } from "./actiontypes";
import { DESCRIPTION_DATA } from "./actiontypes";

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
