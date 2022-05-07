
 import {NavLink} from 'react-router-dom'
 function Quick_checkout() {
     const run=()=>{
        
     }
  return (
    <h5 className="Quick_checkout" style={{"height":"500px" ,"width":"1200px","margin":"auto"}}>
        <div>
            <h5 >My Email address:</h5>
            <input id='one' required style={{"width":"600px","borderRadius":"5px","border":"1px solid gray","height":"40px","backgroundColor":"inherit"}}/>
            <p >Your order details will be sent to this email address.</p>
        </div>
        <div>
            <div className="box">
                <div>
                    <input id='two' type="radio"  required/>
                </div>
                <div>
                    <h5>Continue as guest</h5>
                    <p>You do not a password for this option</p>
                </div>
                
            </div>
            <div className="box" style={{"height":"250px"}}>
                <div>
                    <input style={{"marginbottom":"40px"}} type="radio" required/>
                </div>
                <div>
                    <h3>I have an account and password</h3>
                    <p>Sign in to your account and checkout faster</p>
                    <div style={{"width":"534px","height":"164px","border":"1px solid gray"}}>
                        <h3>Enter your password</h3>
                        <input style={{"width":"210px","height":"40px","backgroundColor":"inherit"}}/>
                        <h3><a href=''>But I forgot my password</a></h3>
                    </div>
                </div>
                
            </div>
            
        </div>
        <h5 className="NavLink" >
            <NavLink  to="/Billing_Shipping" onClick={run}>Continue</NavLink>
        </h5>
        
    </h5>
  )
}
export {Quick_checkout}