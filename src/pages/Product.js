import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../lib/api";
import "./Product.css";

export default function Product() {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getProductById(id).then((res) => setProduct(res));
  }, [id]);

  return (
    <div className="product">
      <div className="bg-white">
        <div className="container">
          <div className="category">{product.category}</div>
          <div className="flex">
            <div className="gallery">
              <img src={product.image} alt={product.name} />
            </div>
            <div className="info">
              <h1 className="title">{product.title}</h1>
              <div className="rating">{product.rating?.rate}</div>
              <div className="price">{product.price}</div>
              <div className="details">Product Details</div>
              <div className="description">{product.description}</div>
              <div>quantity / add</div>
              <div>subtotal / 10</div>
              <div>
                <button>wishlist</button>
                <button>add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
