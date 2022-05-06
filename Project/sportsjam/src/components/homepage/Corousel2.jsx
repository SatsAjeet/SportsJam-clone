import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "HomePageImages/slider2-img1.png" },
    { url: "HomePageImages/slider2-img2.png" },
];

const Corousel2 = () => {
  return (
    <div>
        <SimpleImageSlider
                width={"100%"}
                height={"15vh"}
                images={images}
                showBullets={false}
                showNavs={true}
                style={{ cursor: "pointer" } }
                navSize={40}
                navMargin={0}
                loop={true}
                autoPlay={true}
                autoPlayDelay={2.0}
            />
            <br />
            <br />
    </div>
  )
}

export default Corousel2