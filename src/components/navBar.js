import { Link } from "react-router-dom";
import SearchBar from "./searchBar";
import "./navBar.css";
import CartIcon from "./cartIcon";
import { cartContext } from "../cartContext";
import { useContext } from "react";

export default function Navbar() {
  const cart = useContext(cartContext);
  return (
    <div className="navbar">
      <div className="bg-white">
        <div className="container navbar-header">
          <div className="brand">
            <Link to="/">E-commerce.</Link>
          </div>
          <div>
            <Link to="#">customer support</Link>
          </div>
        </div>
      </div>
      <nav>
        <div className="container nav">
          <div>
            <Link to="/products">Shop</Link>
            <Link to="/products">Promo</Link>
            <Link to="/products">About</Link>
            <Link to="/products">Blog</Link>
          </div>
          <SearchBar />

          <div className="nav-icons">
            <Link to="/cart">wishlist</Link>
            <CartIcon cart={cart} />

            <Link to="/cart">profile</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
