import React, { useContext, useState, useEffect } from "react";
import { cartContext } from "../cartContext";
import Banner from "../components/banner";
import { getProductById } from "../lib/api";
import "./Cart.css";

export default function Cart() {
  const cart = useContext(cartContext);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (cart.products) {
      cart.products.forEach((product) => {
        getProductById(product.productId).then((res) =>
          setProducts((products) => [...products, res])
        );
      });
    }
  }, [cart]);

  return (
    <div className="cart">
      <Banner />
      <div className="container">
        <div>
          <p>1. Shopping Cart</p>
          <p>2. Checkout</p>
          <p>3. Order succesed</p>
        </div>
        <h1>My Cart</h1>
        {products && products.length > 0 ? (
          <div className="flex">
            <div className="products">
              {products.map((product) => (
                <li key={product.id}>{product.title}</li>
              ))}
            </div>
            <div className="actions">
              <div>copoun</div>
              <div>totals</div>
              <div>checkout</div>
            </div>
          </div>
        ) : (
          <h2>you have no items in your cart</h2>
        )}
      </div>
    </div>
  );
}
