import React, { useEffect, useState, useMemo } from "react";
import CardWithPrice from "../components/cardWithPrice";
import { getAllProducts, getCategories } from "../lib/api";
import "./Products.css";
import Banner from "../components/banner";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => {
      setAllProducts(res);
      setProducts(res);
    });
  }, []);

  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((res) => setCategories(res));
  }, []);
  const search = (e) => {
    let searchTerm = e.target.value;
    const filteredProducts = allProducts.filter((product) => {
      return product.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
    setProducts(filteredProducts);
  };
  const filterProducts = (category) => {
    const filteredProducts = allProducts.filter((product) => {
      return (
        product.category.toLowerCase().indexOf(category.toLowerCase()) > -1
      );
    });
    setProducts(filteredProducts);
  };
  return (
    <div>
      <Banner />
      <div className="container">
        <div className="flex">
          <div className="filters">
            filters
            <div>
              <input
                type="text"
                placeholder="Search for Title"
                onChange={search}
              />
            </div>
            <div>
              <ul>
                <li onClick={() => filterProducts("")}>All</li>
                {categories.map((category) => (
                  <li onClick={() => filterProducts(category)} key={category}>
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="products-grid-wprice">
            {products.map((product) => (
              <CardWithPrice key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
