import React, { useContext, useEffect, useState } from "react";
import ContextApi from "../contextapi/ContextApi";
import ProductDetail from "../productDetail/ProductDetail";
import Virgo from "../virgo/Virgo";
import Virgocart from "../virgoCart/Virgocart";
import "./Virgofashion.css";

const Virgofashion = () => {
  const [products, setProduct] = useState([]);
  // const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const { cart, setCart } = useContext(ContextApi);

  useEffect(() => {
    fetch("pagin.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleaddToCart = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
  };

  const handleToCart = (product) => {
    const newCount = [...count, product];
    setCount(newCount);
  };

  const handleAdd = (product) => {
    const newwishlist = [...wishlist, product];
    setWishlist(newwishlist);
  };

  return (
    <div className="main">
      <h2>Fashion Mart Of Virgobd</h2>

      <h3>{count.length}</h3>

      <div className="cards">
        <div>
          {cart.map((item) => (
            <Virgo key={item.id} item={item}></Virgo>
          ))}
        </div>
      </div>

      <div>
        {products.map((product) => (
          <ProductDetail product={product}></ProductDetail>
        ))}
      </div>

      <div className="products">
        {products.map((product) => (
          <Virgocart
            key={product.id}
            product={product}
            handleToCart={handleToCart}
            handleaddToCart={handleaddToCart}
            handleAdd={handleAdd}
          ></Virgocart>
        ))}
      </div>
    </div>
  );
};

export default Virgofashion;
