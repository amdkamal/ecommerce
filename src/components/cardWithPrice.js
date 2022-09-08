import React from "react";
import "./cardWithPrice.css";
import { Link } from "react-router-dom";

export default function CardWithPrice({ product }) {
  return (
    <Link to={`/products/${product.id}`} className="card">
      <div className="card-image">
        <img src={product.image} alt="" />
      </div>
      <div className="card-info">
        <div className="card-title">{product.title}</div>
        <div className="card-category">{product.category}</div>
        <div className="card-price">${product.price}</div>
      </div>
    </Link>
  );
}
