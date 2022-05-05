import React, { useEffect } from 'react'
import {Route, Routes, useNavigate } from 'react-router-dom';
import CreateAccount from '../components/CreateAccount';
import Homepage from '../components/Homepage';
import Navbar from '../components/Navbar'
import Cart from '../components/cart';
import SignIn from '../components/SignIn';
import WishList from '../components/WishList';
import ProductDescription from '../components/Prodcutdescription';

const MainRoutes = () => {
    //redirected to homepage everytime someone refresh or lands on the website
    const navigate=useNavigate();

  useEffect(()=>{
    navigate("/home")
  },[]);

  return (
    <div>
        <Navbar/>

        <Routes>
            <Route path="home" element={<Homepage/>}/>
            <Route path="signin" element={<SignIn/>}/>
            <Route path="createaccount" element={<CreateAccount/>}/>
            <Route path="wishlist" element={<WishList/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="/description" element={<ProductDescription/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes