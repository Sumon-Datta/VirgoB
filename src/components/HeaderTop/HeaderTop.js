import {
  faEnvelope,
  faHouse,
  faPhone,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { CartContext } from "../../context/CartContext";
import CartItemsTop from "./CartItemsTop";
import "./HeaderTop.css";

const HeaderTop = () => {
  const { cartItems } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const totalItems = cartItems?.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <div className="bg-dark text-light">
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", fontSize: "14px" }}
        className="d-md-flex justify-content-between align-items-center px-2"
      >
        <div style={{ fontSize: "14px" }} className="d-flex gap-3 ">
          <Link className="text-white" to={"/home"}>
            <FontAwesomeIcon className="me-2" icon={faHouse} />
          </Link>
          <div>
            <FontAwesomeIcon className="me-2" icon={faPhone} />{" "}
            <span> 01960888999</span>
          </div>
          <div>
            <FontAwesomeIcon className="me-2" icon={faEnvelope} />{" "}
            <span> contact@virgobd.com</span>
          </div>
        </div>
        <div>
          Free Shipping For Shopping Above TK. 4000 !{" "}
          <Link
            style={{ fontSize: "11px" }}
            className="text-light ms-2"
            to={"/login"}
          >
            SIGN IN OR JOIN
          </Link>
        </div>
        <div className="d-flex gap-3 align-items-center">
          <Dropdown>
            <Dropdown.Toggle
              className="bg-white py-2 px-3 dropdown-toggle text-dark rounded-0 border-0"
              id="dropdown-basic"
            >
              Account
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {user ? (
                <>
                  <Dropdown.Item as={Link} to="/profile">
                    Profile
                  </Dropdown.Item>
                  {user.role === "admin" && (
                    <Dropdown.Item as={Link} to="/add-product">
                      Add Product
                    </Dropdown.Item>
                  )}
                  <Dropdown.Item as={Link} to="/wishlist">
                    Wishlist
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="#">
                    Orders
                  </Dropdown.Item>
                  <Dropdown.Item onClick={logout} as={Button}>
                    Logout
                  </Dropdown.Item>{" "}
                </>
              ) : (
                <Dropdown.Item as={Link} to="/login">
                  Login
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <div style={{ position: "relative" }} className=" me-4">
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowCart((p) => !p)}
            >
              <FontAwesomeIcon icon={faShoppingBasket} />{" "}
              <span
                style={{ position: "absolute", top: 0, right: "-18px" }}
                className="ms-5"
              >
                {totalItems || 0}
              </span>
            </div>
            {showCart && (
              <div className="miniCartContainer">
                <h6>Shopping Bag ({totalItems || 0})</h6>
                {cartItems.length > 0 ? (
                  <CartItemsTop />
                ) : (
                  <h6 className="text-center mt-3">
                    There is no item in your shopping cart.
                  </h6>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
