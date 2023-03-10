import React from "react";
import "./Profile.css";

import { faEye } from "@fortawesome/free-regular-svg-icons";
import {
  faCartShopping,
  faCirclePlus,
  faHeart,
  faLock,
  faPowerOff,
  faTrashCan,
  faUserAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { WishlistContext } from "../../context/WishlistContext";
import "./Profile.css";

const WishList = () => {
  const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 header-section">
          <h4>WISH LIST- MANAGE MY ACCOUNT</h4>
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
                  <Link to="/profile" className="nav-link ">
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
                  <Link to="/wishlist" className="nav-link text-danger">
                    <FontAwesomeIcon
                      className="icon"
                      icon={faHeart}
                      size="xs"
                    />
                    Wishlist{" "}
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
                    Logout
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
                  <h3>
                    {" "}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faHeart}
                      size="xs"
                    />
                    My Wishlist
                  </h3>
                </div>
                {wishlistItems.length > 0 ? (
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Image</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {wishlistItems.map(
                        ({ productId: { title, image, price, _id } }) => (
                          <tr key={_id}>
                            <td className="align-middle">{title}</td>
                            <td>
                              <img width={80} src={image} alt="" />
                            </td>
                            <td className="align-middle">{price} ???</td>
                            <td className="align-middle">
                              <div className="d-flex gap-3">
                                <div
                                  onClick={() => navigate(`/product/${_id}`)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <FontAwesomeIcon className="" icon={faEye} />
                                </div>
                                <div
                                  onClick={() => removeFromWishlist(_id)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <FontAwesomeIcon
                                    className="text-danger"
                                    icon={faTrashCan}
                                  />
                                </div>
                              </div>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                ) : (
                  <h6 className="text-center">No items found in wishlist</h6>
                )}

                {/* <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
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
                    <label htmlFor="" className="col-form-label">
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
                    <label htmlFor="" className="col-form-label">
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
                    <label htmlFor="" className="col-form-label">
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
                  <a href="" className="btn btn-primary">Update</a>
                </div> */}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
