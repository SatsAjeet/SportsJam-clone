
import React from "react";
import { Route, Routes} from "react-router-dom";
import CreateAccount from "../components/CreateAccount";
import Homepage from "../components/Homepage";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import SignIn from "../components/SignIn";
import WishList from "../components/WishList";
import Product from "../components/product";
import ProductDescription from "../components/Prodcutdescription";
import Footer from "../components/Footer";



const MainRoutes = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="home" element={<Homepage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="createaccount" element={<CreateAccount />} />
        <Route path="wishlist" element={<WishList />} />
        <Route path="cart" element={<Cart />} />
        <Route path="products" element={<Product />} />
        <Route path="description" element={<ProductDescription />} />
      </Routes>

 
      <Footer/>

      
    </div>
  );
};

export default MainRoutes;
