import React from "react";
import Styles from "./Section2.module.css";

const Section2 = () => {
  const [state, setState] = React.useState(1);

  const handlestate = (value) => {
    setState(value);
  };
//   console.log(state);
  return (
    <div>
      <h1 className={Styles.sec2head}>OUR CUSTOMIZED SERVICES</h1>

      {state == 1 ? (
        <div className={Styles.sec2}>
          <div className={Styles.left}>
            <img
              src="/HomePageImages/sec3-img1.webp"
              alt=""
              className={Styles.img}
            />
            <div className={Styles.nav}>
              <div onMouseOver={() => handlestate(1)}>RACKET STRINGING</div>
              <div onMouseOver={() => handlestate(2)}>HYBRID STRINGING</div>
              <div onMouseOver={() => handlestate(3)}>TT ASSEMBLY</div>
              <div onMouseOver={() => handlestate(4)}>BAT KNOCKING</div>
            </div>
          </div>
          <div className={Styles.right}>
            <h3>BADMINTON RACKET STRINGING</h3>
            <br />
            <p>
              Some players prefer to have the comfort, power and flexibility to
              choose a combination of features on a single string. For this, few
              tennis brands offer Hybrid Strings, which have one string for
              Mains and a different string for Crosses. Now, YOU can also create
              your very own hybrid string!
            </p>
            <br />
            <p>
              To avail of this service at Sportsjam.in, add your favourite
              racquet in your order, along with Tennis String for Mains and
              Tennis String for Crosses (Hybrid Stringing). Please note that a
              good understanding of string features are required to achieve an
              optimum balance between comfort, durability, control and power.
            </p>
            <br />
            <div className={Styles.btn}>Read More</div>
          </div>
        </div>
      ) : state == 2 ? (
        <div className={Styles.sec2}>
          <div className={Styles.left}>
            <img
              src="/HomePageImages/sec3-img2.webp"
              alt=""
              className={Styles.img}
            />
            <div className={Styles.nav}>
              <div onMouseOver={() => handlestate(1)}>RACKET STRINGING</div>
              <div onMouseOver={() => handlestate(2)}>HYBRID STRINGING</div>
              <div onMouseOver={() => handlestate(3)}>TT ASSEMBLY</div>
              <div onMouseOver={() => handlestate(4)}>BAT KNOCKING</div>
            </div>
          </div>
          <div className={Styles.right}>
            <h3>HYBRID RACKET STRINGING</h3>
            <br />
            <p>
              Intermediate and advanced rackets usually come in unstrung
              condition. We help you with stringing it with your choice of
              strings, to get your racket perform as per your playing style.
            </p>
            <br />
            <p>
              At Sportsjam.in , we offer the best range of tennis and badminton
              rackets and strings of top brands. To avail this service, choose
              your favourite new racket, add Racket Stringing Service,
              mentioning your choice of string and tension in your order. Get
              your very own customised racket-ready to play!
            </p>
            <br />
            <div className={Styles.btn}>Read More</div>
          </div>
        </div>
      ) : state == 3 ? (
        <div className={Styles.sec2}>
          <div className={Styles.left}>
            <img
              src="/HomePageImages/sec3-img3.webp"
              alt=""
              className={Styles.img}
            />
            <div className={Styles.nav}>
              <div onMouseOver={() => handlestate(1)}>RACKET STRINGING</div>
              <div onMouseOver={() => handlestate(2)}>HYBRID STRINGING</div>
              <div onMouseOver={() => handlestate(3)}>TT ASSEMBLY</div>
              <div onMouseOver={() => handlestate(4)}>BAT KNOCKING</div>
            </div>
          </div>
          <div className={Styles.right}>
            <h3>TT BAT ASSEMBLY</h3>
            <br />
            <p>
              Choose a ready-to-play Table Tennis bat from the best
              manufacturers or build your very own customized bat! We provide
              you a wide range of Rubbers and Blades from the best brands. Now
              you can make your desired combination across brands and according
              to your playing style. To avail this service at Sportsjam.in, add
              a blade, 2 rubbers (black and red) and the TT bat assembly service
              in your order.
            </p>
            <br />
            <div className={Styles.btn}>Read More</div>
          </div>
        </div>
      ) : state == 4 ? (
        <div className={Styles.sec2}>
          <div className={Styles.left}>
            <img
              src="/HomePageImages/sec3-img4.webp"
              alt=""
              className={Styles.img}
            />
            <div className={Styles.nav}>
              <div onMouseOver={() => handlestate(1)}>RACKET STRINGING</div>
              <div onMouseOver={() => handlestate(2)}>HYBRID STRINGING</div>
              <div onMouseOver={() => handlestate(3)}>TT ASSEMBLY</div>
              <div onMouseOver={() => handlestate(4)}>BAT KNOCKING</div>
            </div>
          </div>
          <div className={Styles.right}>
            <h3>CRICKET BAT KNOCKING IN</h3>
            <br />
            <p>
              Buying your best suited Cricket Bat is the key to score those
              massive runs – true, yet the important process often ignored is
              getting your bat ready to play.
            </p>
            <br />
            <p>
              Get your bat knocked-in to prepare the blade for optimum
              performance and longevity. In this, the bat goes through a process
              of oiling and hammer/ball knocks to make it ready to face the
              impact of high speed deliveries. To avail this service at
              Sportsjam.in, add your desired English willow bat along with the
              knocking-in service in your order.
            </p>
            <br />
            <div className={Styles.btn}>Read More</div>
          </div>
        </div>
      ) : (
        ""
      )}
      <br>
      </br>
    </div>
  );
};

export default Section2;
