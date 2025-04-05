'use client';

import FormData from '@/components/FormData';
import { useProduct } from '@/hooks/useProduct';

function CreateProduct() {
  const { product, addProduct, handleChange } = useProduct();

  return (
    <FormData
      product={product}
      handleSubmit={addProduct}
      handleChange={handleChange}
    />
  );
}

export default CreateProduct;
