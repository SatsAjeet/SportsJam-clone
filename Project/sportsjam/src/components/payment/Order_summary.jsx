import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Order_summary() {
    let style1={
        lineHeight:"0px"
    }
  return (
      
    <h5 className="Quick_checkout" style={{"height":"350px" ,"width":"1200px","margin":"auto"}}>
    <div style={{"display":"flex","gap":"30px"}}>
        <div>
            <h2 style={{"color":"gray"}}>Order Details</h2>
            <table>
                <tr>
                    <th style={{"width":"348px","height":"35px"}}>Products in your order</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Taxes</th>
                    <th>Total Price</th>
                </tr>
                <tr>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                    <td>data</td>
                </tr>
            </table>
            <div style={{"width":"821px","height":"121px","backgroundColor":"rgb(218, 209, 209","marginTop":"20px","borderRadius":"5px"}}>
                <b>Use your voucher code</b>
                <p>Only one coupon code can be used per order at this time.</p>
                <b>Voucher code<input style={{"backgroundColor":"white" ,"border":"none","borderRadius":"5px"}}/> <button style={{"width":"54px","height":"26px","margin":"30px","border":"none"}}>Apply</button></b>
            </div>
        </div>
        
       <div >
            <h2 style={{"color":"gray"}}>Invoice</h2>
            <div style={{"display":"flex","gap":"10px"}}>
                <div >
                    <h3 style={style1}>Cart sub total  </h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>Sipping & Handling Price </h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>GST 18%  </h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>Total payable  </h3>
                    <hr style={style1}></hr>
                </div>
                <hr></hr>
                <div>
                    <h3 style={style1}>data</h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>data</h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>data</h3>
                    <hr style={style1}></hr>
                    <h3 style={style1}>data</h3>
                    <hr style={style1}></hr>
                </div>
            </div>
            
       </div>
       
        
    </div>
    <h5 className="NavLink">
        <NavLink  to="/Payment">Continue</NavLink>
    </h5>
    
</h5>
  )
}
