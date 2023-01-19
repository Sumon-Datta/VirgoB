import React from "react";
import "./Profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faCreditCard,
  faGift,
  faHeart,
  faLock,
  faLockOpen,
  faMapLocationDot,
  faPowerOff,
  faUser,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faInstagram, faPinterest, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Profile = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12 header-section">
          <h4>PROFILE- MANAGE MY ACCOUNT</h4>
        </div>
      </div>

      <div className="box ">
        <div className="row">
          <div className="col-md-3">
            <div className="profile-menubar">
              <div className="nav flex-column">
                <li className="nav-item">
                  <a href="http://localhost:3000/profile" className="nav-link">
                    <FontAwesomeIcon icon={faUserAlt} size="xs" />
                    Profile{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="http://localhost:3000/wishlist" className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faHeart}
                      size="xs"
                    />
                    Wishlist{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCartShopping}
                      size="xs"
                    />
                    Order{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faLock} size="xs" />
                    Change Password{" "}
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPowerOff}
                      size="xs"
                    />
                    Logout{" "}
                  </a>
                </li>
              </div>
            </div>
          </div>

          {/* right-side */}

          <div className=" right-side col-md-9">
            <form>
              <div className="common-fieldset">
                <div className="middleBorder">
                  <h3>Personal Information</h3>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label for="" className="col-form-label">
                      Name :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="first_name"
                      value="Mahbubur Rahman"
                      className="form-control"
                      placeholder="Please Enter First Name"
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label for="" className="col-form-label">
                      Phone :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="Phone number"
                      value="01743455691"
                      className="form-control phone"
                      placeholder="Please Enter First Name"
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label for="" className="col-form-label">
                      Email :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="email"
                      name="Email-Address"
                      value="mahbub.mediasoft@gmail.com"
                      className="form-control"
                      placeholder="Please Enter First Name"
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label for="" className="col-form-label">
                      Phone No :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="Mobile Number"
                      value="01743455691"
                      className="form-control"
                      placeholder="Please Enter First Name"
                    />
                  </div>
                </div>

                <div className="btn">
                  <a href="" class="btn btn-secondary">Update</a>
                </div>

              </div>
              
            </form>
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

export default Profile;
