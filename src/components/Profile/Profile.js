import React, { useContext, useState } from "react";
import "./Profile.css";

import {
  faCartShopping,
  faCirclePlus,
  faHeart,
  faLock,
  faPowerOff,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, updateUserInfo, logout } = useContext(AuthContext);
  const [name, setName] = useState(user.name || "");
  const [email, setEmail] = useState(user.email || "");
  const [phone2, setPhone2] = useState(user.phone2 || "");

  const updateUser = async () => {
    const res = await updateUserInfo({ name, phone2, email });
    if (res.data?.success) {
      toast.success(res.data.message);
    } else {
      toast.error("Something went wrong!");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 header-section">
          <h4>PROFILE- MANAGE MY ACCOUNT</h4>
        </div>
      </div>

      <div
        style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}
        className="box "
      >
        <div className="row">
          <div className="col-md-3">
            <div className="profile-menubar">
              <div className="nav flex-column">
                <li className="nav-item">
                  <Link to="/profile" className="nav-link text-danger">
                    <FontAwesomeIcon icon={faUserAlt} size="xs" />
                    Profile{" "}
                  </Link>
                </li>
                {user?.role === "admin" && (
                  <li className="nav-item">
                    <Link to="/add-product" className="nav-link ">
                      <FontAwesomeIcon icon={faCirclePlus} size="xs" />
                      Add Product
                    </Link>
                  </li>
                )}
                <li className="nav-item">
                  <Link to="/wishlist" className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faHeart}
                      size="xs"
                    />
                    Wishlist
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faCartShopping}
                      size="xs"
                    />
                    Order
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/profile" className="nav-link">
                    <FontAwesomeIcon className="icon" icon={faLock} size="xs" />
                    Change Password{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <button onClick={logout} className="nav-link">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faPowerOff}
                      size="xs"
                    />
                    Logout{" "}
                  </button>
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
                    <label htmlFor="" className="col-form-label">
                      Name :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      placeholder="Please Enter Your Name"
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Phone :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      value={user.phone}
                      readOnly
                      className="form-control phone"
                      placeholder="Please Enter Phone"
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Email :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      placeholder="Please Enter Email"
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Phone No :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      value={phone2}
                      onChange={(e) => setPhone2(e.target.value)}
                      className="form-control"
                      placeholder="Please Enter Your Phone"
                    />
                  </div>
                </div>

                <div className="btn">
                  <button
                    type="button"
                    onClick={updateUser}
                    href=""
                    className="py-2 px-3 bg-dark text-light"
                  >
                    Update
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
