import React,{useState} from "react";
import "./PDetails.css"

const CartButton = (props) => {
      const [count, setCount] = useState(0);

    const handleInc=() =>{
      setCount(count+1)
  };
const handleDec=()=>{
  if(count>0){
  setCount(count-1)
  }
}

    
  return <>
 

  <div className="btn">
      <button  onClick={handleInc} className="minus-btn">+</button>
      <p className="count-item">{count}</p>
      <button  onClick={handleDec}  className="plusbtn">-</button>
  </div>
  </>;
};
export default CartButton