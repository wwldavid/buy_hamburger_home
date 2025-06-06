import React, { createContext } from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  totalPrice: 0,
  addItem: () => {},
  removeItem: () => {},
});

export default CartContext;
