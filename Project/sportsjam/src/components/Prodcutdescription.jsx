import React from "react";
import { useSelector } from "react-redux";
const ProductDescription = ()=>{
    const ProductDis = useSelector((state)=>state.discriptionData);
    console.log(ProductDis,"somethi")
    return (
        <>
           <h1>Details</h1>
        </>
    )
}
export default ProductDescription;