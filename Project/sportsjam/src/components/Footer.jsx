import React from "react";
import Styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div>
      <div className={Styles.top}>
        <div>
          <span
            className="iconify"
            data-icon="el:gift"
            data-width="50"
            data-height="50"
          ></span>
          <p>E-Gift Voucher</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="carbon:badge"
            data-width="50"
            data-height="50"
          ></span>
          <p>Reward Points</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="bxs:book-open"
            data-width="50"
            data-height="50"
          ></span>
          <p>Buyers Guide</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="emojione-monotone:badminton"
            data-width="50"
            data-height="50"
            style={{ marginLeft: "60px", marginBottom: "5px" }}
          ></span>
          <p>Customized Services</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="fa-solid:shipping-fast"
            data-width="50"
            data-height="50"
          ></span>
          <p>Express shipping</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="gala:secure"
            data-width="50"
            data-height="50"
          ></span>
          <p>Secure Shopping</p>
        </div>

        <div>
          <span
            className="iconify"
            data-icon="arcticons:microsoftauthenticator"
            data-width="50"
            data-height="50"
          ></span>
          <p>100% Authentic</p>
        </div>
      </div>

      <div className={Styles.bottom}>
        <div className={Styles.first}>
          <h4>GET TO KNOW US</h4>
          <br />
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>INQUIRY / FEEDBACK</p>
          <p>OUR STORIES</p>
          <p>SPORTSJAM TEAM</p>
          <div>COPYRIGHT</div>
        </div>
        <div className="second">
          <h4>HERE TO HELP</h4>
          <br />
          <p>REGISTER / LOGIN</p>
          <p>DELIVERY & CHARGES</p>
          <p>PAYMENT OPTIONS</p>
          <p>FAQ'S</p>
          <p>RETURNS POLICY</p>
          <p>TRACK MY ORDER</p>
          <p>BUY IN BULK</p>
        </div>
        <div className="third">
          <h4>PAYMENTS</h4>
          <br />
          <img src="/HomePageImages/footer-payment.webp" alt="" />
        </div>
        <div>
          <h4>SIGN UP FOR NEWSLETTER</h4>
          <br />
          <br />
          <h6>CONNECT WITH US</h6>
          <span
            className="iconify-inline"
            data-icon="ant-design:facebook-outlined"
            data-width="40"
            data-height="40"
          ></span>
          <span
            className="iconify-inline"
            data-icon="jam:twitter-square"
            data-width="40"
            data-height="40"
          ></span>
          <span
            className="iconify-inline"
            data-icon="akar-icons:instagram-fill"
            data-width="40"
            data-height="40"
          ></span>
          <span
            className="iconify-inline"
            data-icon="fa-brands:youtube-square"
            data-width="40"
            data-height="40"
          ></span>
          <br />
          <br />
          <img
            src="/HomePageImages/footer-ssl.webp"
            alt=""
            style={{ display: "block" }}
          />
          <div className={Styles.txt}>POWERED BY</div>
          <img src="/HomePageImages/capillary-white.png" alt="" width={"80px"} height={"50px"}  className={Styles.fourthImg}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
