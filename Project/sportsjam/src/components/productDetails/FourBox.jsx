import React,{useState} from "react";
import fourbox from './fourbox.json'
//import "./PDetails.css" 

const FourBox = ()=>{
    return(
        <div>
        <h1 className="mini">YOU MAY ALSO LIKE</h1>
        <div className="racket">
              {fourbox.map(item => (
                <div className="card3" key={item.id}>
                   
                    <div className="card-image">
                        <img src={item.imgURL} alt={item.name} />
                    </div>
                       <p>{item.title}</p>                            
                    <div className="price2">
                   <s>{item.mrp}</s> 
                    <p>{item.sellingPrice}</p>                                           
                    </div>             
                </div>
            ))}
        </div>
        
        </div>
    )
}
export default FourBox