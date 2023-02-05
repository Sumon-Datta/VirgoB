import React, { useContext, useRef, useState } from "react";
import "./Profile.css";

import {
  faCartShopping,
  faCirclePlus,
  faHeart,
  faLock,
  faPowerOff,
  faUserAlt,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthContext";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const [availableSizes, setAvailableSizes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const sizeInputRef = useRef(null);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (availableSizes.length < 1) return;
    setIsLoading(true);
    const product = {
      title: e.target.title.value,
      price: e.target.price.value,
      image: e.target.image.value,
      availableSizes: availableSizes,
    };
    console.log(product);
    console.log("sending");
    try {
      const res = await fetch(`http://localhost:5000/api/product`, {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      if (data.success) {
        console.log(data);
        toast.success("Product added successfully!");
        e.target.reset();
        setAvailableSizes([]);
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
    console.log("end");
    setIsLoading(false);
  };

  const handleAddSize = () => {
    const value = sizeInputRef.current.value;
    if (value === "") return;
    if (availableSizes.includes(value)) return;
    setAvailableSizes((p) => [...p, value]);
    sizeInputRef.current.value = "";
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 header-section">
          <h4>PROFILE- ADD PRODUCT</h4>
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
                    <Link to="/add-product" className="nav-link text-danger">
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
            <form onSubmit={handleAddProduct}>
              <div className="common-fieldset">
                <div className="middleBorder">
                  <h3>Add Product</h3>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Title :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      placeholder="Product Title"
                      required
                    />
                  </div>
                </div>
                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Image :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="image"
                      className="form-control "
                      placeholder="Product Image Url"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Price :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <input
                      type="text"
                      name="price"
                      className="form-control"
                      placeholder="Product Price"
                      required
                    />
                  </div>
                </div>

                <div className="row g-3 align-items-center">
                  <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
                    <label htmlFor="" className="col-form-label">
                      Size :<sup className="text-danger">*</sup>
                    </label>
                  </div>
                  <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9">
                    <div className="d-flex align-items-center gap-2">
                      <input
                        type="text"
                        name="availableSizes"
                        ref={sizeInputRef}
                        className="form-control w-25"
                        placeholder="Add Available Sizes"
                      />
                      <button
                        type="button"
                        onClick={handleAddSize}
                        className="px-3 py-1 bg-dark text-light"
                      >
                        Add Size
                      </button>
                    </div>
                    <div className=" d-flex gap-2">
                      {availableSizes.map((size, i) => (
                        <div
                          key={size + i}
                          className="px-2 border d-flex gap-2"
                        >
                          <span>{size}</span>
                          <span>
                            <FontAwesomeIcon
                              onClick={() =>
                                setAvailableSizes((p) =>
                                  p.filter((s) => s !== size)
                                )
                              }
                              style={{ cursor: "pointer" }}
                              className="text-danger"
                              icon={faXmark}
                            />
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="btn">
                  <button
                    disabled={isLoading}
                    className="py-2 px-3 bg-dark text-light"
                  >
                    Add Product
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
