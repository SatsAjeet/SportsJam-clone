import { Quick_checkout } from "./Quick_checkout"
import Billing_Shipping from "./Billing_Shipping"
import Order_summary from "./Order_summary"
import Payment from "./Payment"
import styles from "./payment.module.css"
 function Main() {
  return (
      <>
        <div style={{"width":"100%","height":"90px","textAlign":"center"}}>
                <img style={{"marginTop":"5px"}} src="https://storage.sg.content-cdn.io/in-resources/b368029c-a4dd-448a-a888-58348cb1b144/Images/userimages/logo.jpg"/>
            </div>    
            <div id="Main">
                <div className={styles.steps}>
                    <div className={styles.innerstep}>STEP 1</div>
                    <div>Fast Track Secure Checkout</div>
                </div>
               <Quick_checkout/>
                <div className={styles.steps}>
                    <div className={styles.innerstep}>STEP 2</div>
                    <div>Billing & shipping Information</div>
                </div>
                <Billing_Shipping/>
                <div className={styles.steps}>
                    <div className={styles.innerstep}>STEP 3</div>
                    <div>Order Summary & Logistic</div>
                </div>
                <Order_summary/>
                <div className={styles.steps}>
                    <div className={styles.innerstep}>STEP 4</div>
                    <div>Payment Option</div>
                </div>
                <Payment/>
            </div>
            
      </>

           
    
      
      
  )
}

export {Main}
