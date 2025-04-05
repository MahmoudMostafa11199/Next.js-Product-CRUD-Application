'use client';

import FormData from '@/components/FormData';
import { useProduct } from '@/hooks/useProduct';

function EditProduct({ id, data }) {
  const { product, updateProduct, handleChange } = useProduct(id, data);

  return (
    <FormData
      product={product}
      handleSubmit={updateProduct}
      handleChange={handleChange}
      isNew={false}
    />
  );
}

export default EditProduct;
