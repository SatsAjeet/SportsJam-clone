import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Billing_Shipping() {
    let style1={
     color:"red",
     display:"inline",     
    }
  return (
      
    <h5 className="Quick_checkout" style={{"height":"800px" ,"width":"1200px","margin":"auto"}}>
        <div style={{"display":"flex"}}>
            <h3>Shipping address</h3> 
            <h3 style={{"color":"red","padding":""}}>*</h3>
            <p style={{"paddingTop":"7px"}}>Required fields</p>
        </div>
        <form className="form">
            <div>
                <h4>Name<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Last Name<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Address<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Landmark<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Post/Zip code<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Country<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>State<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>City<h3 style={style1}>*</h3></h4><input required />
            </div>
            <div>
                <h4>Telephone</h4><input value="91" style={{"width":"50px","marginRight":"10px"}}/><input required  style={{"width":"300px"}}></input>
            </div>
            <div>
                <h4>Mobile<h3 style={style1}>*</h3></h4><input value="91" style={{"width":"50px","marginRight":"10px"}}/><input required style={{"width":"300px"}}></input>
            </div> 
            
            
        </form>
        <div style={{"paddingLeft":"30px"}} >
            <div style={{"display":"flex" ,"alignItems":"center"}}>
                <input type="radio"/>
                <h5>Send this product as gift</h5>
            </div>
            <p>Type in your message in less than 400 charactors and the product will sent as gift with the message of yours.</p>
            <textarea/>
            <div style={{"display":"flex","marginTop":"10px"}}>
                <h4>Delivery date</h4>
                <input value=" " style={{"backgroundColor":"inherit","borderRadius":"20px"}} type="date"/>
            </div>
        </div>
        <h5 className="NavLink">
            <NavLink  to="/Order_Summary">Continue</NavLink>
        </h5>
        
    </h5>
  )
}
