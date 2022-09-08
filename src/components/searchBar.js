import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./searchBar.css";

export default function SearchBar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${searchTerm}`);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search what you need"
      />
    </form>
  );
}
