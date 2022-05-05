import React from 'react'
import Styles from "./Section3.module.css";


const Section3 = () => {
  return (
    <div>
      <div>
        <img src="HomePageImages\sec3-img1.jpg" alt="" className={Styles.left}/>
        <img src="HomePageImages\sec3-img2.jpg" alt="" className={Styles.right}/>
        <h2 className={Styles.leftText}>VICTOR SHOES</h2>
        <h2 className={Styles.rightText}>SLINGER GRAND SLAM PACK</h2>
      </div>
      <br />
      <br/>
      <img src="HomePageImages\sec3-img3.jpg" alt="" className={Styles.img} />
      <br />
    </div>
  )
}

export default Section3