import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItemsTop = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const subtotal = cartItems.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <>
      <div className="cartItems">
        {cartItems.map((product) => (
          <div className="row my-3" key={product._id}>
            <div className="col-4">
              <img className="img-fluid" src={product.image} alt="" />
            </div>
            <div className="col-5">
              <div>
                <b>{product.title}</b>
              </div>
              <div>Quantity: {product.quantity}</div>
              <div>Size: {product.size}</div>
            </div>
            <div className="col-3 d-flex flex-column justify-content-between">
              <div>{product.price}</div>
              <div
                onClick={() => removeFromCart(product)}
                className="removeBtn text-danger"
              >
                Remove
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-between mt-3">
        <h6>Subtotal</h6>
        <h6>৳ {subtotal}</h6>
      </div>
      <div className="d-flex gap-3 mt-2">
        <button className="w-50 py-1 bg-white border border-dark">
          View Shopping Bag
        </button>
        <button className="w-50 py-2 bg-dark text-light ">Checkout</button>
      </div>
    </>
  );
};

export default CartItemsTop;
