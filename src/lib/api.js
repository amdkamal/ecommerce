import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL || "https://fakestoreapi.com";

const fetch = axios.create({
  baseURL: API_URL,
});

export async function getAllProducts(sortOrder = "", limit = "") {
  try {
    const response = await fetch.get(
      `/products?sortOrder=${sortOrder}&limit=${limit}`
    );
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getProductById(id) {
  try {
    const response = await fetch.get(`/products/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCart(id) {
  try {
    const response = await fetch.get(`/carts/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getUserById(id) {
  try {
    const response = await fetch.get(`/users/${id}`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCategories() {
  try {
    const response = await fetch.get(`/products/categories`);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
}
