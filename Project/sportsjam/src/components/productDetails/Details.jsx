import React from "react";
//import "./PDetails.css"
import styles from "./Details.module.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

const Details = () => {
    const navigate = useNavigate()
    const disData = JSON.parse(localStorage.getItem("productdetails"));
    const handleclick = () => {
        const cartdata = JSON.parse(localStorage.getItem("cartdata")) || []
        var flag= false
        console.log("cart",cartdata)
        for (var i = 0; i < cartdata.length; i++) {
            if (cartdata[i].id == disData.id) {
                cartdata[i].qty += 1
                localStorage.setItem("cartdata", JSON.stringify(cartdata));
                flag = true
                break;
            }
            else {
                flag= false
            }
        }
        if (flag == false) {
            console.log("fail")
            cartdata.push(disData)
            localStorage.setItem("cartdata", JSON.stringify(cartdata))
        }
        navigate("/cart")
    }
    
    return (<>
        <div>
           <div className= {styles.mainDetails}>
                <div style={{margin: "Auto"}}>
                        <img style={{width:"600px", height:"600px"}} src ={disData.img}/>
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
                     <div onClick={handleclick} className={styles.addcart}>ADD TO CART</div> 
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
        </>
        
    )
}

export default Details;