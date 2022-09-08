import { getCart } from "./lib/api";
import { useEffect, useState, useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NavBar from "./components/navBar";
import "./App.css";
import { cartContext } from "./cartContext";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

function App() {
  const [cart, setCart] = useState(useContext(cartContext));

  useEffect(() => {
    getCart(5).then((res) => {
      setCart(res);
    });
  }, []);

  return (
    <BrowserRouter>
      <cartContext.Provider value={cart}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </cartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
