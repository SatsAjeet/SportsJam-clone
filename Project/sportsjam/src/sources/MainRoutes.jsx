
import React from "react";
import { Route, Routes} from "react-router-dom";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import Cart from "../components/cart";
import WishList from "../components/WishList";
import Product from "../components/product";
import Description from "../components/productDetails/Description";
import Footer from "../components/Footer";
import Signup from '../components/Authentication/Signup';
import Signin from '../components/Authentication/Signin';



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
        {/* <Route path="description" element={<Description />} /> */}
      </Routes>

 
      <Footer/>

      
    </div>
  );
};

export default MainRoutes;
