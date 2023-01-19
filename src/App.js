import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/account/Account";
import Home from "./components/Home/Home";
import Product from "./components/Product/Product";
import ProductDetail from "./components/productDetail/ProductDetail";
import Profile from "./components/Profile/Profile";
import WishList from "./components/Profile/WishList";

import Virgofashion from "./components/virgofashion/Virgofashion";





const App = () => {

 

  return (
    <div>

      <Routes>
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>} ></Route>
        <Route path="/product" element={<Product></Product>} ></Route>
        <Route path="/" element={<Product></Product>} ></Route>
        
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/account" element={<Account></Account>} ></Route>
        <Route path="/wishlist" element={<WishList></WishList>} ></Route>
        <Route path="/profile" element={<Profile></Profile>} ></Route>
        {/* <Route path="/wishlist/:wishListID" element={<Wishlist></Wishlist>} ></Route> */}

      </Routes>
      
      {/* <Virgofashion></Virgofashion> */}
    </div>
  );
};

export default App;
