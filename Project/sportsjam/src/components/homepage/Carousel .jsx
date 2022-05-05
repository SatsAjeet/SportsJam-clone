import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "HomePageImages/slider1.jpg" },
    { url: "HomePageImages/slider2.jpg" },
    { url: "HomePageImages/slider3.jpg" },
    { url: "HomePageImages/slider4.jpg" },
    { url: "HomePageImages/slider5.jpg" },
    { url: "HomePageImages/slider6.jpg" },
    { url: "HomePageImages/slider7.webp" },
];

const Carousel  = () => {
  return (
    <div>
         <SimpleImageSlider
                width={"98%"}
                height={"80vh"}
                images={images}
                showBullets={true}
                showNavs={true}
                style={{ cursor: "pointer" , marginLeft:"14px" , marginTop:"20px"} }
                navSize={60}
                navMargin={20}
                loop={true}
                autoPlay={true}
                autoPlayDelay={1.0}
                
            />
    </div>
  )
}

export default Carousel 