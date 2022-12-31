import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./components/Product/Product";
import ProductDetail from "./components/productDetail/ProductDetail";
import Virgofashion from "./components/virgofashion/Virgofashion";
import Wishlist from "./components/wishlist/Wishlist";



const App = () => {

 

  return (
    <div>

      <Routes>
        <Route path="/product/:productId" element={<ProductDetail></ProductDetail>} ></Route>
        <Route path="/product" element={<Product></Product>} ></Route>
        <Route path="/" element={<Product></Product>} ></Route>
        <Route path="/wishlist" element={<Wishlist></Wishlist>} ></Route>
        {/* <Route path="/wishlist/:wishListID" element={<Wishlist></Wishlist>} ></Route> */}

      </Routes>
      
      {/* <Virgofashion></Virgofashion> */}
    </div>
  );
};

export default App;
