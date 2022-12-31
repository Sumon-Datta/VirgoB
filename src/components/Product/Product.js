import React, { createElement, useEffect, useState } from "react";
import Pagina from "../pagina/Pagina";
import Virgo from "../virgo/Virgo";
import Virgocart from "../virgoCart/Virgocart";
import Wishlist from "../wishlist/Wishlist";
import "./Product.css";

const Product = () => {
  const [products, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState([]);
  const [wishs, setWish] = useState([]);

  useEffect(() => {
    fetch("pagin.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const [showPerPage, setShowPerPage] = useState(20);
  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  const [view, setView] = useState([]);

  const virgoFashion = (fashion) => {
    const newView = [fashion];
    setView(newView);
    console.log(newView);
  };

  const handleToCart = (product) => {
    const newcart = [...cart, product];
    setCart(newcart);
  };

  const handleaddToCart = (product) => {
    const newCount = [...count, product];
    setCount(newCount);
    console.log(newCount);
  };


  const handleAdd = (product) =>{
    const newWishList = [...wishs, product]
    setWish(newWishList)
    console.log(newWishList)
  }



  return (
    <div className="shopContainer">
      <div className="shopbg">
        <img
          src="https://dg19fhsjeexqh.cloudfront.net/images/media/2022/08/gcodVleprElRN9n3Jh737gxjs1UeRib5tNoNho2p.jpg"
          alt=""
        />
      </div>

      <div className="main-content">
        <h2>SHOP</h2>
      </div>

      <div className="category-part">
        <label for="categories">Categories</label>
        <select name="categories" id="categories">
          <option value="">Winter Collection</option>
          <option value="">Women</option>
          <option value="">Jacket</option>
          <option value="">Casual Shirt</option>
          <option value="">Shawl</option>
          <option value="">Woven Hoodies</option>
          <option value="">Over Coat</option>
          <option value="">Kurti</option>
          <option value="">Men</option>
          <option value="">Twill jacket</option>
          <option value="">Shirt light jacket</option>
          <option value="">Shirt jacket</option>
          <option value="">Hoodie shirt</option>
          <option value="">casual shirt</option>
          <option value="">denim jacket</option>
          <option value="">Bomber Jacket</option>
          <option value="">Biker Light Jacket</option>
          <option value="">Men</option>
          <option value="">New Arrival</option>
          <option value="">Winter Campaign</option>
          <option value="">Summer Collection</option>
          <option value="">new in</option>
          <option value="">bottom</option>
          <option value="">five pocket pant</option>
          <option value="">Denim pant</option>
          <option value="">Formal Pant</option>
          <option value="">Shirt</option>
          <option value="">Formal Shirt</option>
        </select>

        <label for="categories">Color</label>
        <select name="categories" id="categories">
          <option value="">Winter Collection</option>
          <option value="">Women</option>
          <option value="">Jacket</option>
          <option value="">Casual Shirt</option>
          <option value="">Shawl</option>
          <option value="">Woven Hoodies</option>
          <option value="">Over Coat</option>
          <option value="">Kurti</option>
          <option value="">Men</option>
          <option value="">Twill jacket</option>
          <option value="">Shirt light jacket</option>
          <option value="">Shirt jacket</option>
          <option value="">Hoodie shirt</option>
          <option value="">casual shirt</option>
          <option value="">denim jacket</option>
          <option value="">Bomber Jacket</option>
          <option value="">Biker Light Jacket</option>
          <option value="">Men</option>
          <option value="">New Arrival</option>
          <option value="">Winter Campaign</option>
          <option value="">Summer Collection</option>
          <option value="">new in</option>
          <option value="">bottom</option>
          <option value="">five pocket pant</option>
          <option value="">Denim pant</option>
          <option value="">Formal Pant</option>
          <option value="">Shirt</option>
          <option value="">Formal Shirt</option>
        </select>

        <label for="categories">Short</label>
        <select name="categories" id="categories">
          <option value="">Winter Collection</option>
          <option value="">Women</option>
          <option value="">Jacket</option>
          <option value="">Casual Shirt</option>
          <option value="">Shawl</option>
          <option value="">Woven Hoodies</option>
          <option value="">Over Coat</option>
          <option value="">Kurti</option>
          <option value="">Men</option>
          <option value="">Twill jacket</option>
          <option value="">Shirt light jacket</option>
          <option value="">Shirt jacket</option>
          <option value="">Hoodie shirt</option>
          <option value="">casual shirt</option>
          <option value="">denim jacket</option>
          <option value="">Bomber Jacket</option>
          <option value="">Biker Light Jacket</option>
          <option value="">Men</option>
          <option value="">New Arrival</option>
          <option value="">Winter Campaign</option>
          <option value="">Summer Collection</option>
          <option value="">new in</option>
          <option value="">bottom</option>
          <option value="">five pocket pant</option>
          <option value="">Denim pant</option>
          <option value="">Formal Pant</option>
          <option value="">Shirt</option>
          <option value="">Formal Shirt</option>
        </select>
      </div>

      <h3>{count.length}</h3>

      <div className="cards">
        <div>
          {cart.map((item) => (
            <Virgo key={item.id} item={item}></Virgo>
          ))}
        </div>
      </div>


      {/* wishlist */}

      <div className="card">
        <div>
          {
            wishs.map(wish => <Wishlist 
            
            key = {wish.id}
            wish = {wish}
              ></Wishlist> )
          }
        </div>
      </div>

      {/* products */}

      <div className="products">
        {products.slice(pagination.start, pagination.end).map((product) => (
          <Virgocart
            key={product.id}
            product={product}
            handleToCart={handleToCart}
            handleaddToCart={handleaddToCart}
            handleAdd ={handleAdd}
          ></Virgocart>
        ))}
      </div>

      <Pagina
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total={products.length}
      />
    </div>
  );
};

export default Product;
