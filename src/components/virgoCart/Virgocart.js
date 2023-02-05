import {
  faBasketShopping,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";
import QuickViewModal from "./QuickViewModal";
import "./Virgocart.css";

const Virgocart = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const { addToCart } = useContext(CartContext);
  const { _id, title, image, price } = props.product;
  const navigate = useNavigate();
  const { wishlistItems, removeFromWishlist, addToWishlist } =
    useContext(WishlistContext);

  const isWishItem = wishlistItems.findIndex((p) => p.productId._id === _id);

  const handleViewDetails = () => {
    const path = `/product/${_id}`;
    navigate(path);
  };

  return (
    <>
      <QuickViewModal show={show} setShow={setShow} product={props.product} />
      <div className="product">
        <div className="productImg">
          <img className="img-fluid" src={image} alt="" />
          <div className="badgeContainer">
            <div className="productBadge">30.00%</div>
            <div className="productBadge">New</div>
          </div>
          <div onClick={handleViewDetails} className="addToView">
            <div className="outerBorder">
              <div className="basketIcon">
                <FontAwesomeIcon icon={faBasketShopping} />
              </div>
            </div>
          </div>
          <button className="viewDetailsBtn" onClick={handleShow}>
            Quick View
          </button>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <h3 className="productTitle ">{title}</h3>
          <div className="">
            <button
              className="bg-light "
              onClick={() =>
                addToCart({
                  ...props.product,
                  quantity: 1,
                  size: props.product.availableSizes[0],
                })
              }
            >
              <FontAwesomeIcon className="heartIcon" icon={faCartShopping} />
            </button>
            {isWishItem > -1 ? (
              <button
                onClick={() => removeFromWishlist(props.product._id)}
                className="bg-white me-4"
              >
                <FontAwesomeIcon
                  className=" text-dark heartIcon"
                  icon={faHeart}
                />
              </button>
            ) : (
              <button
                onClick={() => addToWishlist(props.product._id)}
                className="bg-light me-4"
              >
                <FontAwesomeIcon className="heartIcon" icon={faHeart} />
              </button>
            )}
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <h5 className="productPrice"> ৳ {price}</h5>
        </div>
      </div>
    </>
  );
};

export default Virgocart;
