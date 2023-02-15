import React, { useEffect, useState } from "react";
import videoBg from "../assets/video/Comp 1_3_1652251490.mp4";
import "./Home.css";

import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    fetch("menus.json")
      .then((res) => res.json())
      .then((data) => setMenu(data.menus));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* <video  autoPlay loop muted controls>
        <source  src={videoBg} />
        <div className="contentssss">
          <h2>hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</h2>
        </div>
      </video> */}

      <div className="assets">
        <video src={videoBg} autoPlay loop muted controls></video>
        <div className="fullmenu ">
        <nav class="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="link">
          <a class="navbar-brand" href="#">VIRGO</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
          </div>
  
  
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <Link class="nav-link" to="/home">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/product">Shop</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/profile">Profile</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link " to="/login">Account</Link>
      </li>
    </ul>
  </div>
</nav>
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

      <div className="first-image">
        <img
          src="./assets/images/banner/5BzC8hSK1AgKOlp6pmuuEhyEsjDcJrL3IfyqLr9B.jpg"
          alt=""
        />
      </div>

      <div className="second-image">
        <img
          src="./assets/images/banner/hFwnlF7aiqbwym953GCKo1jc4OTdB6qjYduvOWEP.jpg"
          alt=""
        />
      </div>

      <div className="slide-section">
        <img
          className="bg-slide"
          src="./assets/images/slide/slide bg/XL.jpg"
          alt=""
        />

        <h2>
          EXPLORE <span>the</span> NEW VIRGO LOOK
        </h2>

        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-1.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-2.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-7.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-8.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-9.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-10.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-11.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-12.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-13.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-14.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="slide-img"
              src="./assets/images/slide/image-15.jpg"
              alt=""
            />
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

      <div className="card-group mb-3">
        <div className="card campaign">
          <div className="inner">
            <img
              src="./assets/images/campaign/image-1.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>

          <div className="card-body campaign-body">
            <h5 className="card-title">
              {" "}
              <b>Career Opportunity</b>{" "}
            </h5>
            <p className="card-text">
              Digital Marketing Manager (Fashion Retail)...
            </p>
            <a
              className="btn btn-outline-primary"
              href="https://www.virgobd.com/news-detail/career-opportunity"
            >
              See More...
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">Apply Last Date 20th November</small>
          </div>
        </div>
        <div className="card campaign mx-3">
          <div className="inner">
            <img
              src="./assets/images/campaign/image-3.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body campaign-body">
            <h5 className="card-title">
              {" "}
              <b>Cristmas Day</b>{" "}
              <span>
                <Badge bg="primary">New</Badge>
              </span>{" "}
            </h5>
            <p className="card-text"> 25% Offer....</p>
            <a
              className="btn btn-outline-primary"
              href="https://www.virgobd.com/news-detail/career-opportunity"
            >
              See More...
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">End on 26th December</small>
          </div>
        </div>
        <div className="card campaign">
          <div className="inner">
            <img
              src="./assets/images/campaign/image-2.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body campaign-body">
            <h5 className="card-title">
              {" "}
              <b>Winter Offer</b>{" "}
              <span>
                <Badge bg="primary">New</Badge>
              </span>{" "}
            </h5>
            <p className="card-text">15% Offer...</p>
            <a
              className="btn btn-outline-primary"
              href="https://www.virgobd.com/news-detail/career-opportunity"
            >
              See More...
            </a>
          </div>
          <div className="card-footer">
            <small className="text-muted">End on 16th January</small>
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
                <p className="shopno">
                  Level # 2, Block # C, Shop # 81-82, Panthapath, Dhaka.
                </p>
                <p className="shopno">Tel: 01988660088</p>
                <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="shop-address shop-border">
                <h3>Bogura</h3>
                <p className="shopno">
                  Shahid Abdul Zabbar road, Jaleshwaritola, Bogura
                </p>
                <p className="shopno">Tel: 01958265635</p>
                <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="shop-address shop-border">
                <h3>Feni</h3>
                <p className="shopno">
                  Shahid Shahidullah Kaysar road, Feni Sadar
                </p>
                <p className="shopno">Tel: 01958265630</p>
                <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
              </div>
            </div>

            <div className="col-md-2">
              <div className="shop-address shop-border">
                <h3>Hasnabad</h3>
                <p className="shopno">
                  Star City Shopping Complex, Hasnabad, Keraniganj .
                </p>
                <p className="shopno">Tel: 01988550066</p>
                <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
              </div>
            </div>

            <div className="col-md-2 ">
              <div className="shop-address ">
                <h3>Mohammadpur</h3>
                <p className="shopno">
                  Ground Floor, Landmark Ring Tower, Plot # 32-35, Probal
                  Housing, Ring Road, Adabor, Dhaka.
                </p>
                <p className="shopno">Tel: 01988550077</p>
                <p className="shopno">Shopping Hours: 10.00am - 10.00pm</p>
              </div>
            </div>
          </div>
          <div className="col-md-12 text-center">
            <a
              href="https://www.virgobd.com/store-locator"
              className="btn btn-primary"
            >
              See All
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
