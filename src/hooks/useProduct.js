'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

import { createProduct, updateProductById } from '@/api/products';

const initialState = {
  title: '',
  description: '',
  image: '',
  category: '',
  price: '',
  rating: {
    rate: '',
    count: '',
  },
};
export const useProduct = (id = '', data = initialState) => {
  const [product, setProduct] = useState(initialState);

  const handleChange = (e) => {
    if (e.target.name === 'rate' || e.target.name === 'count') {
      setProduct({
        ...product,
        rating: { ...product.rating, [e.target.name]: e.target.value },
      });
    } else setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    if (
      !product.title === '' ||
      !product.description === '' ||
      !product.category === '' ||
      !product.price === '' ||
      !product.rating.rate === '' ||
      !product.rating.count === '' ||
      !product.image === ''
    ) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const newProduct = {
      ...product,
    };

    try {
      const { error } = await createProduct(newProduct);
      if (error) throw error;

      toast.success('Product added successfully');
      setProduct({
        title: '',
        description: '',
        image: '',
        category: '',
        price: '',
        rating: {
          rate: '',
          count: '',
        },
      });
    } catch (error) {
      toast.error(
        `Failed to add the product. (Status: ${error.status}) Please try again later.`
      );
    }
  };

  const updateProduct = async (e) => {
    e.preventDefault();

    const updateData = product;
    try {
      const { error } = await updateProductById(id, updateData);
      if (error) throw error;

      toast.success('Product updated successfully!');
    } catch (error) {
      toast.error(
        `Failed to update the product. Please try again later. (${error.status})`
      );
    }
  };

  // Update the product state when the initial data changes. This is needed when editing a product.
  useEffect(() => {
    setProduct(data);
  }, [data]);

  return { product, addProduct, updateProduct, handleChange };
};
