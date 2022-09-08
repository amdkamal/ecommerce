import React from "react";
import { Link } from "react-router-dom";

export default function CartIcon({ cart }) {
  return (
    <Link to={`/cart`}>
      <img src="/icons/cart.png" alt="" width="25" />
      {cart.products ? cart.products.length : ""}
    </Link>
  );
}
