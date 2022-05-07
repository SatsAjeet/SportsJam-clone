import React from "react";
import Styles from "./NavDropDown.module.css";
import {useNavigate} from "react-router-dom"
const NavDropDown = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/products");
  }
  return (
    <div onClick={handleClick}>
      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>SPORTS</p>
        <div className={Styles.dropdowncontent}>
          <p>Badminton</p>
          <p>Basketball</p>
          <p>Boxing</p>
          <p>Cricket</p>
          <p>Football</p>
          <p>Hockey</p>
          <p>Swimming</p>
          <p>Golf</p>
          <p>Squash</p>
          <p>Volleyball</p>
          <p>Table Tennis</p>
          <p>Tennis</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>FITNESS</p>
        <div className={Styles.dropdowncontent}>
          <p>Abs & Core</p>
          <p>Aerobics / Fitness</p>
          <p>Cardio</p>
          <p>Cycling</p>
          <p>Gym Accessories</p>
          <p>Strength</p>
          <p>Running Gear</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>SHOES</p>
        <div className={Styles.dropdowncontent}>
          <p>Men</p>
          <p>Women</p>
          <p>Junior</p>
          <p>Other</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>CLOTHING</p>
        <div className={Styles.dropdowncontent}>
          <p>Men</p>
          <p>Women</p>
          <p>Junior</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>ACCESSORIES</p>
        <div className={Styles.dropdowncontent}>
          <p>Sports Bags</p>
          <p>Accessories</p>
          <p>By Sports</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>LEISURE SPORTS</p>
        <div className={Styles.dropdowncontent}>
          <p>Leisure Sports</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>FANGEAR</p>
        <div className={Styles.dropdowncontent}>
          <p>Soccer Leagues</p>
          <p>Cricket</p>
        </div>
      </div>

      <div className={Styles.dropdown}>
        <p className={Styles.dropbtn}>BRANDS</p>
        <div className={Styles.dropdowncontent}>
          <p>Brands Of Your Choice</p>
        </div>
      </div>
    </div>
  );
};

export default NavDropDown;
