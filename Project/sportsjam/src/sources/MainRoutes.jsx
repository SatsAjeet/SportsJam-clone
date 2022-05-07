
import React from "react";
import { Route, Routes} from "react-router-dom";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import Cart from "../components/cart";
import WishList from "../components/WishList";
import Product from "../components/product";
import Details from "../components/productDetails/Details";
import Footer from "../components/Footer";
import Signup from '../components/Signup';
import Signin from '../components/Signin';
import {Main} from '../components/payment/Main';



const MainRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="home" element={<Homepage />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Product />} />
        <Route path="description" element={<Details />} />
        <Route path="payment" element={<Main/>} />
      </Routes>

 
      <Footer/>

      
    </div>
  );
};

export default MainRoutes;
