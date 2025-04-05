import axios from 'axios';

const API_URL = 'https://fakestoreapi.com/products';

// Get a list of products
export const getProducts = async () => {
  let isLoading = true;

  try {
    const res = await axios.get(API_URL);
    isLoading = false;
    return { data: res.data, error: null, isLoading };
  } catch (err) {
    isLoading = false;
    console.log(err);
    return { data: null, error: err, isLoading };
  }
};

// Get a product by ID
export const getProductById = async (id) => {
  let isLoading = true;
  try {
    const res = await axios.get(`${API_URL}/${id}`);
    isLoading = false;
    return { data: res.data, error: null, isLoading };
  } catch (err) {
    isLoading = false;
    return { data: null, error: err, isLoading };
  }
};

// Update a product by ID
export const updateProductById = async (id, data) => {
  let isLoading = true;
  try {
    const res = await axios.put(`${API_URL}/${id}`, data);
    isLoading = false;
    return { data: res.data, error: null, isLoading };
  } catch (err) {
    isLoading = false;
    return { data: null, error: err, isLoading };
  }
};

// Create a new product
export const createProduct = async (data) => {
  let isLoading = true;
  try {
    const res = await axios.post(API_URL, data);
    isLoading = false;
    return { data: res.data, error: null, isLoading };
  } catch (err) {
    isLoading = false;
    return { data: null, error: err, isLoading };
  }
};

// Delete a product by ID
export const deleteProduct = async (id) => {
  let isLoading = true;
  try {
    const res = await axios.delete(`${API_URL}/${id}`);
    isLoading = false;
    return { data: res.data, error: null, isLoading };
  } catch (err) {
    isLoading = false;
    return { data: null, error: err, isLoading };
  }
};
