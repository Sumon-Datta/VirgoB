import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { WishlistContext } from "../../context/WishlistContext";

const ProductDetail = () => {
  const [prod, setProd] = useState({});
  const { productId } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [suggested, setSuggested] = useState([]);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:5000/api/product/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProd(data.data);
        setSelectedSize(data.data.availableSizes[0]);
      });
  }, [productId]);

  useEffect(() => {
    const random = Math.random() * 5;
    fetch(`http://localhost:5000/api/product/?page=${random}&limit=${3}`)
      .then((res) => res.json())
      .then((data) => {
        setSuggested(data.data.data);
      });
  }, []);

  const { wishlistItems, removeFromWishlist, addToWishlist } =
    useContext(WishlistContext);

  const isWishItem = wishlistItems.findIndex(
    (p) => p.productId._id === productId
  );

  const handleAddToWishList = () => {
    if (isWishItem > -1) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(productId);
    }
  };

  return (
    <div className="container-fluid">
      <div
        style={{ minHeight: "100vh", maxWidth: "1200px", width: "100%" }}
        className="row mt-3 w-100 mx-auto"
      >
        <div className="col-md-6">
          <img className="img-fluid" src={prod.image} alt="" />
        </div>
        <div className="col-md-6 p-4">
          <h5>{prod.title}</h5>
          <p>
            <b>Product Category Name :</b> Winter Collection , MEN , New Arrival
            , Shirt , Casual Shirt , Hoodie Shirt , Winter Campaign , New In ,
            Men , Hoodie Shirt
          </p>
          <div
            style={{ width: "max-content" }}
            className="d-flex gap-2 border px-3 py-1"
          >
            <div>
              0 <FontAwesomeIcon className="ms-1" icon={faStar} />
            </div>
            <div style={{ borderRight: "1px solid #000" }}></div>
            <div>0 Rating</div>
          </div>
          <div
            className="my-3 w-100"
            style={{ borderBottom: "1px solid #000" }}
          ></div>
          <h5>TK. {prod.price}</h5>
          <h6 className="mt-4">Select Your Size: </h6>
          <div className="productSizeContainer">
            {prod?.availableSizes?.map((s) => (
              <div
                onClick={() => setSelectedSize(s)}
                style={
                  selectedSize === s
                    ? {
                        backgroundColor: "black",
                        color: "white",
                      }
                    : {}
                }
                className="productSize"
                key={s}
              >
                {s}
              </div>
            ))}
          </div>
          <div className="d-flex gap-3 mt-3">
            <button
              onClick={handleAddToWishList}
              className=" px-5 py-2 bg-white border border-dark"
            >
              <FontAwesomeIcon
                className={`me-2 ${isWishItem > -1 && "text-danger"}`}
                icon={faHeart}
              />
              Wish List
            </button>
            <button
              onClick={() =>
                addToCart({ ...prod, quantity: 1, size: selectedSize })
              }
              className="px-5 py-2 bg-dark text-light "
            >
              <FontAwesomeIcon className="me-2" icon={faBasketShopping} />
              Add To Bag
            </button>
          </div>
        </div>
        <div className="p-3">
          <p className="my-2">Similar Product</p>
          <div className="row gap-3">
            {suggested.map((product) => (
              <div
                key={product._id}
                onClick={() => navigate(`/product/${product._id}`)}
                className="border col-md-3 col-sm-12 "
                style={{ cursor: "pointer" }}
              >
                <img className="img-fluid" src={product.image} alt="" />
                <div className="d-flex justify-content-between mt-2">
                  <p>{product.title}</p>
                  <span> ৳{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
