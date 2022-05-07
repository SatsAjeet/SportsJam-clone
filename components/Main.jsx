import React,{useState} from "react";
import CartButton from './CartButton'
import main from '../main.json';
import "./PDetails.css"
const Main = ()=>{

const [count, setCount] = useState(0);

    const counter =()=>{
        setCount(count+1);
    }
    return(
        <div>
     
        <div className="container2">
            <div className="font1">YONEX ASTROX 99 PRO BADMINTON RACKET (CHERRY SUNBURST, UNSTRUNG)</div>
            <a>Be the first to write the review</a>
            <div className="line"></div>
            <div className="heading">Yonex Astrox 99 Pro Badminton Racket (Cherry Sunburst, Unstrung)</div>
           
            {main.map(item => (
                <div key={item.id}>
                   
                  
                    <h4>{item.mrp}</h4>
                    <h3>{item.sellingPrice} <h className="orange">{item.discount}</h> </h3>
                   
                    <button onClick={counter} className="addcart">Add to Cart</button><br/>
                   
                   
                    <refer className="r">Remove | Refer to your friend</refer>
                    <div className="logo"> 
                    <img src={item.twitter} alt={item.name} />
                    <img src={item.facebook} alt={item.name} />
                    <img src={item.google} alt={item.name} />
                    <img src={item.pin} alt={item.name} /> 
                    </div>    

                    <div className="enter">Enter you pin to check availvelity</div> 
                    <input className="input"></input><div className="check">Check</div>
                    <div className="deliver">Delivered in 2-5 working days*</div>
                    <img className="yonex" src={item.yonex} alt={item.name} /> 
                                <report className="report">Report incorrect product information</report>                        
                   
                    <CartButton/>  
                     
                  </div>
                  
                    ))}
                    </div>
 </div>
    )
}
export default Main