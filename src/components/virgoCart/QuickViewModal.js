import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { CartContext } from "../../context/CartContext";

function QuickViewModal({ show, setShow, product }) {
  const { title, image, price, availableSizes } = product;
  const { addToCart } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const [selectedSize, setSelectedSize] = useState(availableSizes[0]);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (flag) => {
    if (flag === "increase") {
      setQuantity((p) => p + 1);
    } else {
      if (quantity === 1) return;
      setQuantity((p) => p - 1);
    }
  };
  return (
    <>
      <Modal className="modal-lg" show={show} onHide={handleClose}>
        <div className="d-flex justify-content-end p-3">
          <FontAwesomeIcon
            onClick={handleClose}
            style={{ fontSize: "28px", cursor: "pointer" }}
            icon={faXmark}
          />
        </div>
        <Modal.Body>
          <div className="row">
            <div className="col-md-6 col-sm-12 ">
              <img className="img-fluid h-100 w-100" src={image} alt="" />
            </div>
            <div className="col-md-6 col-sm-12">
              <h5>{title}</h5>
              <h6>Product Price: {price}</h6>
              <p>
                <b>Category: </b>Children, Winter, New Arrival, New In, Winter
                Collection, Winter Collection, Girls, Over Coat,
              </p>
              <div className="productSizeContainer">
                <h6 className="me-3">Size: </h6>
                {availableSizes.map((s) => (
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
              <div className="d-flex align-items-center mt-3">
                <h6 className="me-3">Quantity: </h6>
                <div className="quantityContainer">
                  <button onClick={() => handleQuantity("decrease")}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => handleQuantity("increase")}>+</button>
                </div>
              </div>
              <div className="d-flex gap-3 mt-3">
                <button className="py-2 px-3 bg-dark text-light ">
                  Buy Now
                </button>
                <button
                  onClick={() =>
                    addToCart({
                      ...product,
                      quantity: quantity,
                      size: selectedSize,
                    })
                  }
                  className="px-5 py-2 bg-dark text-light "
                >
                  Add To Bag
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default QuickViewModal;
