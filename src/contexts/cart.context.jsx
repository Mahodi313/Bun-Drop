import React, { createContext, useEffect, useState } from "react";
import {
  addCartItem,
  removeCartItem,
  clearCartItem,
} from "../utils/cart.utils";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems((prevCartItems) => addCartItem(prevCartItems, productToAdd));
  };

  const removeProduct = (productToRemove) => {
    setCartItems((prevCartItems) =>
      removeCartItem(prevCartItems, productToRemove)
    );
  };

  const clearItemFromCart = (productToRemove) => {
    setCartItems((prevCartItems) =>
      clearCartItem(prevCartItems, productToRemove)
    );
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeProduct,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
