import React,{useState} from "react";
import data from './data.json'

import "./PDetails.css"
const ProductDetails = ()=>{

    return(
        <div>
      
        <div className="container">
            
         
            {data.map(item => (
                <div key={item.id}>
                   
                    <div className="card-image">
                        <img src={item.imgURL} alt={item.name} />
                    </div>
                     
                   
                  </div>
                    ))}
                    </div>

        </div>
    )
}
export default ProductDetails