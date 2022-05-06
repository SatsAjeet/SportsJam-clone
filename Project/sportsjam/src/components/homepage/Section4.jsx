import React from "react";
import Styles from "./Section4.module.css";

const Section4 = () => {
  return (
    <div>
      <div className={Styles.sec3}>
        <div className={Styles.left}>
          <img src="/HomePageImages/sec4.webp" alt="" className={Styles.img} />
        </div>
        <div className={Styles.right}>
          <h3>ABOUT SPORTSJAM</h3>
          <br />
          <p>
            Let's get going to dig out the best products in your game & make 'em
            available right at your doorstep. We will be glad to serve you in
            any city in India & speedily, so that you enjoy your product in the
            coming weekend! All this, with no shipping charges if you purchase
            above Rs.1000.
          </p>
          <br />
          <p>
            Scout through your favourite brands with latest technologies. Just
            click & be its proud owner, at the best available price in the
            market. Come, help us help you to fly high with your new & improved
            game with high quality sportsgear!
          </p>
          <br />
          <br />
          <div className={Styles.btn}>Find Our Store</div>
        </div>
      </div>
      <h2 className={Styles.head}>TESTIMONIALS</h2>
      <p className={Styles.subhead}>Amazing products and Excellent Service. Whenever I have called, I have got professional, prompt and consistent reply. Even during giving the free tshirt, you guys called to know the size, but unfortunately the size is large</p>
      <p className={Styles.subhead}>on me. Any chances I can exchange with M size. Although I am loving my new racquet. - Rajnish, New Delhi</p>
      <br />
      <div className={Styles.btn2}>View All</div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Section4;
