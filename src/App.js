import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Account from "./components/account/Account";
import Home from "./components/Home/Home";
import Products from "./components/Product/Products";
import ProductDetail from "./components/productDetail/ProductDetail";
import AddProduct from "./components/Profile/AddProduct";
import Profile from "./components/Profile/Profile";
import WishList from "./components/Profile/WishList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer/Footer";
import HeaderTop from "./components/HeaderTop/HeaderTop";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <div>
      <HeaderTop />
      <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/product" element={<Products />}></Route>
        <Route path="/product/:productId" element={<ProductDetail />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Account />}></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/add-product"
          element={
            <PrivateRoute>
              <AddProduct />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishList />
            </PrivateRoute>
          }
        ></Route>

        {/* <Route path="/wishlist/:wishListID" element={<Wishlist></Wishlist>} ></Route> */}
      </Routes>
      <Footer />
      {/* <Virgofashion></Virgofashion> */}
      <ToastContainer theme="dark" />
    </div>
  );
};

export default App;
