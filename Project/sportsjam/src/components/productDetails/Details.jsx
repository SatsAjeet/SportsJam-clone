import React from "react";
//import "./PDetails.css"
import styles from "./Details.module.css"
import { useSelector } from "react-redux";

const Details = ()=>{
    const disData = useSelector(state=>state.discriptionData);
    return (
        <div>
           <div className= {styles.mainDetails}>
                <div className="card-image">
                        <img src ={disData.img}/>
                </div>
                <div className={styles.container2}>
                 <div>
                    <h2>{disData.title}</h2>
                    <p>{disData.desc}</p>
                 </div>
                 
                  <div className={styles.report}>
                      <div className={styles.price}> 
                           <h3>MRP:{disData.mrp}</h3>
                           <s>PRICE:{disData.price}</s>
                           <h4>Discount:{disData.discount}</h4> 
                      </div>
                     <div className={styles.addcart}>ADD TO CART</div> 
                    <p >Remove | Refer to your friend</p>
                    <div> 
                    <img src ="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/twitter_share.png"/>
                    <img src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/fb_share.png"/>
                    <img src="https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/gplus_share.png" />
                    <img src= "https://assets.sg.content-cdn.io/css/themes/mjt02012432/images/main/pinit_share.png" /> 
                    </div>    

                    <div>Enter you pin to check availvelity</div>
                    <div>
                        <input></input><div className="check">Check</div>
                    </div> 
                    <div>Delivered in 2-5 working days*</div>
                    <img className={styles.yonex} src ="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/brandlogonew/yonexnew.png"/> 
                    <h2>Report incorrect product information</h2>                         
                   </div>
                  
                 </div>
            </div>
        </div>
        
    )
}

export default Details;