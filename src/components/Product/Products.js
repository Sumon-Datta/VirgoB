import React, { useEffect, useState } from "react";
import Pagina from "../pagina/Pagina";
import Virgocart from "../virgoCart/Virgocart";

import "./Products.css";

const Products = () => {
  const [products, setProduct] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pagination.page]);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/product/?page=${pagination.page}&limit=${pagination.limit}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProduct(data.data.data);
        setPagination((p) => {
          return { ...p, total: data.data.total };
        });
      });
  }, [pagination.page]);

  return (
    <div className="shopContainer">
      <div className="shopbg">
        <h2>SHOP</h2>
      </div>

      <div className="category-part">
        <label className="" htmlFor="categories">
          <b>Categories</b>
        </label>
        <select className="ms-3 me-5" name="categories" id="categories">
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

        <label htmlFor="categories">
          <b>Color</b>
        </label>
        <select className="ms-3 me-5" name="categories" id="categories">
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

        <label htmlFor="categories">
          <b>Short</b>
        </label>
        <select className="ms-3 me-5" name="categories" id="categories">
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

      <div className="productContainer">
        {products.map((product) => (
          <Virgocart key={product._id} product={product}></Virgocart>
        ))}
      </div>

      <Pagina pagination={pagination} setPagination={setPagination} />
    </div>
  );
};

export default Products;
