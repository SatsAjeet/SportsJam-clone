import React from "react";
import Styles from "./Section1.module.css";
import { Link, useNavigate } from 'react-router-dom'


const Section1 = () => {

  const navigate=useNavigate();

  return (
    <div className={Styles.sec1}>

      <div className={Styles.container}>
        <div className={Styles.content}>
            <div className={Styles.contentoverlay}></div>
            <img
              className={Styles.contentimage}
              src="\HomePageImages\sport1.webp" alt=""
            />
            <div className={`${Styles.contentdetails} ${Styles.fadeInbottom}`}>
              <h2 className={Styles.contenttitle}>SPORTS</h2>
              <h4 className={Styles.contenttext}>A huge collection of running shoes and sports equipments.</h4>
              {/* product page routing */}
              <div className={Styles.btn} onClick={()=>navigate("/products")}>BADMINTON</div>
              <div className={Styles.btn}>FOOTBALL</div>
              <div className={Styles.btn}>TENNIS</div>
            </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.content}>
            <div className={Styles.contentoverlay}></div>
            <img
              className={Styles.contentimage}
              src="\HomePageImages\sport2.webp" alt=""
            />
            <div className={`${Styles.contentdetails} ${Styles.fadeInbottom}`}>
              <h2 className={Styles.contenttitle}>FITNESS</h2>
              <h4 className={Styles.contenttext}>A large selection of gym shoes & gym wear designed to keep you cool and dry whilst looking good in the gym..</h4>
              <div className={Styles.btn}>GYM ACCESSORIES</div>
              <div className={Styles.btn}>RUNNING</div>
              <div className={Styles.btn}>STRENGTH TRAINING</div>
            </div>
        </div>
      </div>

      <div className={Styles.container}>
        <div className={Styles.content}>
            <div className={Styles.contentoverlay}></div>
            <img
              className={Styles.contentimage}
              src="\HomePageImages\sport3.webp" alt=""
            />
            <div className={`${Styles.contentdetails} ${Styles.fadeInbottom}`}>
              <h2 className={Styles.contenttitle}>SHOES</h2>
              <h4 className={Styles.contenttext}>Looking for Hiking Boots, Walking Shoes, Sandals or Outdoor Wear? Choose from a large range today.</h4>
              <div className={Styles.btn}>SHOES-SQUASH</div>
              <div className={Styles.btn}>FOOTBALL</div>
              <div className={Styles.btn}>RUNNING</div>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Section1;
