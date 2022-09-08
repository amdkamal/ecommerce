import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

export default function Card({ product }) {
  return (
    <Link className="product-card" to={`/products/${product.id}`}>
      <img src={product.image} alt="" />
      <div className="product-card_info">
        <div className="info_category">{product.category}</div>
        <div className="info_title">{product.title}</div>
        <button>button</button>
      </div>
    </Link>
  );
}
