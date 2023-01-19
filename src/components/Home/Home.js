import React, { useEffect, useState } from "react";
import './Home.css'
import videoBg from '../assets/video/Comp 1_3_1652251490.mp4'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faPinterest } from '@fortawesome/free-brands-svg-icons'
import { Badge, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";




const Home = () => {

  const [menus, setMenu] = useState([])

    useEffect(()=>{
        fetch('menus.json')
        .then(res => res.json())
        .then(data => setMenu(data.menus))
    }, [])

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }

  return (
    <div>

    
      {/* <video  autoPlay loop muted controls>
        <source  src={videoBg} />
        <div className="contentssss">
          <h2>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h2>
        </div>
      </video> */}


       <div className="assets">
        
        <video src={videoBg} autoPlay loop muted controls ></video>
        <div className="fullmenu ">
    
    
    </div> 
    </div> 

    





    
      
    




    {/* <div className="w-100">
      <div className="row">
        <div className="col-md-4 col-sm-6">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-1.jpg" alt="" />
            <h4>Casual Shirt</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-2.jpg" alt="" />
            <h4>T Shirt</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 middle">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-3.jpg" alt="" />
            <h4>Polo Shirts</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-4.jpg" alt="" />
            <h4>Half Sleeve Shirt</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 middle">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-5.jpg" alt="" />
            <h4>Tank Top</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="card cardimg">
            <img src="./assets/images/category/pic-6.jpg" alt="" />
            <h4>Shorts Pant</h4>
          </div>
        </div>
      </div>
    </div> */}
    

    
    {/* banner */}

    <div className="first-image" >
    <img src="./assets/images/banner/5BzC8hSK1AgKOlp6pmuuEhyEsjDcJrL3IfyqLr9B.jpg" alt="" />
    </div>

    <div className="second-image">
    <img src="./assets/images/banner/hFwnlF7aiqbwym953GCKo1jc4OTdB6qjYduvOWEP.jpg" alt="" />
    </div>





    <div className="slide-section">



<img className="bg-slide" src="./assets/images/slide/slide bg/XL.jpg" alt="" /> 

<h2>EXPLORE <span>the</span>  NEW VIRGO LOOK</h2>

<Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-1.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-2.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-3.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-4.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-5.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-6.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-7.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-8.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-9.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-10.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-11.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-12.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-13.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-14.jpg" alt="" />
          </SwiperSlide>
        <SwiperSlide>
          <img className="slide-img" src="./assets/images/slide/image-15.jpg" alt="" />
          </SwiperSlide>
        
        
      </Swiper>

</div>







    <div className="w-100">
        <div className="row">
        <div className="col-md-12 membership">
        <img src="./assets/images/membership/new-banner.jpg" alt="" />
          <div className="contentsss">
          <h2 className="title">MEMBERSHIP OFFER</h2>
          <p>20% Off .</p>
          <a href="">GET OFFER</a>
          </div>
        </div>
      </div>
      </div>
      
    


      <div class="card-group mb-3">
  <div class="card campaign">
  
  <div className="inner">
  <img src="./assets/images/campaign/image-1.jpg" class="card-img-top" alt="..."/>
  </div>

    <div class="card-body campaign-body">
      <h5 class="card-title"> <b>Career Opportunity</b> </h5>
      <p class="card-text">Digital Marketing Manager (Fashion Retail)...</p>
      <a className="btn btn-outline-primary" href="https://www.virgobd.com/news-detail/career-opportunity">See More...</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">Apply Last Date 20th November</small>
    </div>
  </div>
  <div class="card campaign mx-3">
  <div className="inner">
  <img src="./assets/images/campaign/image-3.jpg" class="card-img-top" alt="..."/>
  </div>
    <div class="card-body campaign-body">
      <h5 class="card-title"> <b>Cristmas Day</b>  <span><Badge bg="primary">New</Badge></span> </h5>
      <p class="card-text"> 25% Offer....</p>
      <a className="btn btn-outline-primary" href="https://www.virgobd.com/news-detail/career-opportunity">See More...</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">End on 26th December</small>
    </div>
  </div>
  <div class="card campaign">
  <div className="inner">
  <img src="./assets/images/campaign/image-2.jpg" class="card-img-top" alt="..."/>
  </div>
    <div class="card-body campaign-body">
      <h5 class="card-title"> <b>Winter Offer</b>  <span><Badge bg="primary">New</Badge></span>  </h5> 
      <p class="card-text">15% Offer...</p>
      <a className="btn btn-outline-primary" href="https://www.virgobd.com/news-detail/career-opportunity">See More...</a>
    </div>
    <div class="card-footer">
      <small class="text-muted">End on 16th January</small>
    </div>
  </div>
</div>








{/* Find Us Section Start */}

<div className="findus-section">
  <div className="shop">

    <div className="row">
      <div className="col-md-12 text">
        <h3>FIND US</h3>
      </div>

      <div className="col-md-2">
       <div className="shop-address shop-border">
       <h3>Barisal</h3>
        <p className="shopno">Bibir Pukur Par, Sadar Road, Barisal.</p>
        <p className="shopno">Tel: 01988660077</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
      </div>
       </div>

      <div className="col-md-2">
      <div className="shop-address shop-border">
      <h3>Bashundhara City</h3>
        <p className="shopno">Level # 2, Block # C, Shop # 81-82, Panthapath, Dhaka.</p>
        <p className="shopno">Tel: 01988660088</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
        </div>
      </div>

      <div className="col-md-2">
      <div className="shop-address shop-border">
      <h3>Bogura</h3>
        <p className="shopno">Shahid Abdul Zabbar road, Jaleshwaritola, Bogura</p>
        <p className="shopno">Tel: 01958265635</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
        </div>
      </div>

      <div className="col-md-2">
      <div className="shop-address shop-border">
      <h3>Feni</h3>
        <p className="shopno">Shahid Shahidullah Kaysar road, Feni Sadar</p>
        <p className="shopno">Tel: 01958265630</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
        </div>
      </div>

      <div className="col-md-2">
      <div className="shop-address shop-border">
      <h3>Hasnabad</h3>
        <p className="shopno">Star City Shopping Complex, Hasnabad, Keraniganj .</p>
        <p className="shopno">Tel: 01988550066</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
        </div>
      </div>

      <div className="col-md-2 ">
      <div className="shop-address ">
      <h3>Mohammadpur</h3>
        <p className="shopno">Ground Floor, Landmark Ring Tower, Plot # 32-35, Probal Housing, Ring Road, Adabor, Dhaka.</p>
        <p className="shopno">Tel: 01988550077</p>
        <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
        </div>
      </div>

    </div>
    <div className="col-md-12 text-center">
    <a href="https://www.virgobd.com/store-locator" class="btn btn-primary">See All</a>
    </div>
  </div>
</div>


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

export default Home;


