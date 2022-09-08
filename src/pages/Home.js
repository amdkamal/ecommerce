import { getAllProducts } from "../lib/api";
import { useEffect, useState } from "react";
import Card from "../components/card";
import "./Home.css";
import Banner from "../components/banner";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getAllProducts().then((res) => setProducts(res));
  }, []);
  return (
    <div className="App">
      <Banner />
      <div className="container">
        <div className="products-grid">
          {products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
