import React from 'react'
import { Cart, Nav1, Nav1Flex, Nav2, Nav3, SearchBar } from './Navbar.styles'
import { Link, useNavigate } from 'react-router-dom'
import Styles from "./Navbar.module.css";
import NavDropDown from './NavDropDown';
import { useSelector, useDispatch } from "react-redux";
import {setCount} from "../redux/action"


const Navbar = () => {

    const navigate = useNavigate();
    const store = useSelector((state) => state)
    const count = store.count
    const dispatch = useDispatch()

    React.useEffect(() => {
        const count = JSON.parse(localStorage.getItem("cartdata")) || 0;
        if (count != 0) {
            dispatch(setCount(count.length))
        }
    },[])

  return (
    <div>
        {/* nav1 */}
        <Nav1>
            <Nav1Flex>
                <span className="iconify" data-icon="bx:phone" data-width="20" data-height="20"></span>
                <h3 to="home" className={Styles.link}>Call Us :+91-9555461555</h3>
            </Nav1Flex>
            <Nav1Flex>
                <span className="iconify" data-icon="clarity:sign-in-line" data-width="20" data-height="20"></span>
                <Link to="/signin" className={Styles.link}>Sign In</Link>
            </Nav1Flex>
            <Nav1Flex>
                <span className="iconify" data-icon="bi:person" data-width="20" data-height="20"></span>
                <Link to="/createaccount" className={Styles.link}>Create Account</Link>
            </Nav1Flex>
            <Nav1Flex>
                <span className="iconify" data-icon="ant-design:heart-outlined" data-width="20" data-height="20"></span>
                <Link to="/wishlist" className={Styles.link}>Wishlist</Link>
            </Nav1Flex>
            </Nav1>


            {/* nav2 */}
            <Nav2>
                <img src="/HomePageImages/homelogo.webp" alt="" className={Styles.homelogo} onClick={()=>navigate("/home")} />
                <SearchBar>
                    <input type="text" name="" id="" placeholder='     Search' className={Styles.nav2inp} />
                    <span className="iconify" data-icon="bx:search" data-width="35" data-height="35"></span>
                </SearchBar>
                <Cart>
                    <span className="iconify" data-icon="entypo:shopping-cart" data-width="50" data-height="50"></span>
                    <div className={Styles.cartcount}>
                        {/* show cart count here */}
                        <h2>{count}</h2>
                    </div>
                    <Link to="/cart" className={Styles.cart}>Shopping Cart</Link>
                </Cart>
            </Nav2>
            <hr />
          


            {/* nav3 */}
            <Nav3>
                <NavDropDown/>
            </Nav3>
            <hr />




    </div>
  )
}

export default Navbar