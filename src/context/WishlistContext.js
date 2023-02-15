import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "./AuthContext";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [error, setError] = useState(null);
  const { user } = useContext(AuthContext);
  const userId = user?._id;

  useEffect(() => {
    if (!userId) return;
    const fetchWishlist = async () => {
      try {
        const response = await fetch(
          `https://virgobackend.onrender.com/api/wishlist/${userId}`,
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await response.json();

        setWishlistItems(data.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchWishlist();
  }, [userId]);

  const addToWishlist = async (productId) => {
    if (!userId)
      return toast.warning(
        "Please login first to add this product to wishlist"
      );
    try {
      const response = await fetch(
        `https://virgobackend.onrender.com/api/wishlist/${userId}/${productId}`,
        {
          method: "POST",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      const data = await response.json();

      setWishlistItems((prevWishlistItems) => [
        ...prevWishlistItems,
        data.data,
      ]);
      toast.success("Product is added to wishlist!");
    } catch (err) {
      setError(err);
      toast.error("Something went wrong");
    }
  };

  const removeFromWishlist = async (productId) => {
    try {
      await fetch(
        `https://virgobackend.onrender.com/api/wishlist/${userId}/${productId}`,
        {
          method: "DELETE",
          headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      setWishlistItems((prevWishlistItems) =>
        prevWishlistItems.filter((item) => item.productId._id !== productId)
      );
      toast.success("Product is removed from wishlist!");
    } catch (err) {
      setError(err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, addToWishlist, removeFromWishlist, error }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
