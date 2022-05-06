import React from 'react'
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
        <div className={Styles.top}>

            <div>
                <span className="iconify" data-icon="el:gift" data-width="50" data-height="50"></span>
                <p>E-Gift Voucher</p>
            </div>

            <div>
                <span className="iconify" data-icon="carbon:badge" data-width="50" data-height="50"></span>
                <p>Reward Points</p>
            </div>

            <div>
                <span className="iconify" data-icon="bxs:book-open" data-width="50" data-height="50"></span>
                <p>Buyers Guide</p>
            </div>

            <div>
            <span className="iconify" data-icon="emojione-monotone:badminton" data-width="50" data-height="50" style={{marginLeft:"60px",marginBottom:"5px"}}></span>
                <p>Customized Services</p>
            </div>

            <div>
                <span className="iconify" data-icon="fa-solid:shipping-fast" data-width="50" data-height="50"></span>
                <p>Express shipping</p>
            </div>

            <div>
                <span className="iconify" data-icon="gala:secure" data-width="50" data-height="50"></span>
                <p>Secure Shopping</p>
            </div>

            <div>
                <span className="iconify" data-icon="arcticons:microsoftauthenticator" data-width="50" data-height="50"></span>
                <p>100% Authentic</p>
            </div>

        </div>


        <div className={Styles.bottom}>

            <div className="first">

            </div>
            
            <div className="second"></div>
            <div className="third"></div>
            <div className="fourth"></div>
        </div>



        <br />
        <br />
    </div>
  )
}

export default Footer