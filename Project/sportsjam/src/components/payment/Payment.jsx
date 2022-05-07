import React from 'react'
import { NavLink } from 'react-router-dom'


export default function Payment() {
    
  return (
    <h5 className="Quick_checkout" style={{"height":"319px" ,"width":"1200px","margin":"auto"}}>
        <div>
            <h5 >My Email address:</h5>
            <input  style={{"width":"600px","borderRadius":"5px","border":"1px solid gray","height":"40px","backgroundColor":"inherit"}}/>
            <p >Your order details will be sent to this email address.</p>
        </div>
        <div>
            <div className="box">
                <div>
                    <input type="radio" />
                </div>
                <div>
                    <h5>Continue as guest</h5>
                    <p>You do not a password for this option</p>
                </div>
                
            </div>
            <div className="box">
                <div>
                    <input type="radio"/>
                </div>
                <div>
                    <h3>I have an account and password</h3>
                    <p>Sign in to your account and checkout faster</p>
                </div>
                
            </div>
        
        </div>
        
    </h5>
  )
}
