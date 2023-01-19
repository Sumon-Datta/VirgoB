import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faCreditCard, faGift, faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { createElement, useEffect, useState } from "react";
import Pagina from "../pagina/Pagina";
import WishList from "../Profile/WishList";
import Virgo from "../virgo/Virgo";
import Virgocart from "../virgoCart/Virgocart";

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
            wishs.map(wish => <WishList 
            
            key = {wish.id}
            wish = {wish}
              ></WishList> )
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


      {/* footer section start */}

      {/* Newsletter Start */}

<div className="newsletter">
  
  <div className="row">
 
  <div className="col-md-8">
 
     <div className="contents">
       <h2>KEEP <span>in</span>  TOUCH</h2>
     </div>
 
     <div className="row">
 
       <div className="col-md-6">
         <div className="form-group">
         <input className="form" type="text" placeholder="Enter Your Email Address" />
         <br />
         <button className="btn btn-primary" >SIGN UP FOR EMAILS</button>
         </div>
       </div>
 
       <div className="col-md-6">
       <div className="form-group">
         <input className="form" type="text" placeholder="Enter Your Email Address" />
         <br />
         <button className="btn btn-primary" >SIGN UP FOR TEXT</button>
         </div>
       </div>
 
       </div>
 
       <div className="row">
         <div className="col-md-12">
           <p className="keepintouch" >*Msg & Data Rates May Apply. By entering your phone number, clicking submit, and completing the sign-up instructions, you consent to receive one or more recurring marketing text messages each week at the mobile number provided that may be sent via an automated system, and you also consent to the text terms & privacy policy. Consent is not a condition of purchasing goods or services. You can opt-out at any time by responding STOP. You can also respond HELP for help.</p>
         </div>
       </div>
 
   </div>
 
   <div className="col-md-4">
 
   <div className="newsletter-icon">
     <div className="map fonticon">
     <FontAwesomeIcon icon={faMapLocationDot} size="xs" />
     <span>Find a Store</span>
     
     </div>
   
   <div className="creditcard fonticon">
   <FontAwesomeIcon icon={faCreditCard} size="xs" />
   <span>Credit Card</span>
   
   </div>
   
   <div className="gift fonticon">
   <FontAwesomeIcon icon={faGift} size="xs" />
   <span>Gift Card</span>
   
   </div>
   
   
   
   </div>
   </div>
  </div>
 
 </div>
 
 
 
 
 
 
 
 <div className="support-section">
   <div className="support-area">
 
     <div className="row">
       
       <div className="col-md-3">
        <div className="support-content ">
        <h5>SERVICE & SHOPPING</h5>
         <li>Help & FAQs</li>
         <li>Privacy Policy</li>
         <li>Refund Policy</li>
         <li>Terms & Condition</li>
         <li>Order History</li>
       </div>
        </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>NEED HELP ?</h5>
         <li > <b>email:</b>  contact@virgobd.com</li>
         <li > <b>Phone:</b>  01960888999</li>
         <li >( 10 AM – 6 PM )</li>
         </div>
       </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>INFORMATION</h5>
         <li >About Us</li>
         <li >Contact Us</li>
         <li >Store Locator</li>
         <li >Career</li>
         </div>
       </div>
 
       <div className="col-md-3">
       <div className="support-content ">
       <h5>CONNECT WITH US</h5>
       <FontAwesomeIcon icon={faFacebookF} size="xs" />
       <FontAwesomeIcon icon={faInstagram} size="xs" />
       <FontAwesomeIcon icon={faYoutube} size="xs" />
       <FontAwesomeIcon icon={faTwitter} size="xs" />
       <FontAwesomeIcon icon={faPinterest} size="xs" />
         </div>
       </div>
 
       
 
     </div>
 
     <div className="row">
       <div className="col-md-12 col-lg-12 col-sm-12">
         <div className="ssl-img">
           <img src="./assets/images/footer/ssl.png" className="img-fluid" alt="" />
         </div>
       </div>
     </div>
     
   </div>
 </div>
 
 
 <div className="copyright-section">
   <div className="row">
   <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
     <p> <span className="copyright">&#169;</span> copyright 
     <span className="year" >2022 </span>all right reserved</p>
   </div>
 
   <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 float-end">
     <p className="right" >Developed By :
     <a href="https://mediasoftbd.com/"> mediasoft data systems Limited.</a></p>
   </div>
   </div>
 </div>


    </div>
  );
};

export default Product;
