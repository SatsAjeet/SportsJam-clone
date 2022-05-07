import { Quick_checkout } from "./Quick_checkout"
import { BrowserRouter  ,Route,Routes} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Billing_Shipping from "./Billing_Shipping"
import Order_summary from "./Order_summary"
import Payment from "./Payment"
 function Main() {
  return (
      <BrowserRouter>
        <div style={{"width":"100%","height":"90px","textAlign":"center"}}>
                <img style={{"marginTop":"5px"}} src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/logo.jpg"/>
            </div>    
            <div id="Main">
                <div>
                    <div>Step 1</div>
                    <div>Fast Track Secure Checkout</div>

               
                    
                </div>
               
                   <Routes >
                        <Route path="/" element={<Quick_checkout/>}/>
                   </Routes>
                    
               
               
                <div>
                    <div>Step 2</div>
                    <div>Billing & shipping Information</div>
                </div>
                <Routes>
                    <Route path="/Billing_Shipping" element={<Billing_Shipping/>}/>
                </Routes>
                <div>
                    <div>Step 3</div>
                    <div>Order Summary & Logistic</div>
                </div>
                <Routes>
                    <Route path="/Order_summary" element={<Order_summary/>}/>
                </Routes>
                <div>
                    <div>Step 4</div>
                    <div>Payment Option</div>
                </div>
                <Routes>
                    <Route path="/Payment" element={<Payment/>}/>
                </Routes>
            </div>
            
      </BrowserRouter>

           
    
      
      
  )
}

export {Main}
