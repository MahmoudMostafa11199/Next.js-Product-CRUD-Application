'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';

import RatingStar from '@/components/RatingStar';
import { deleteProduct } from '@/api/products';

function ProductDetails({ product }) {
  const router = useRouter();

  const {
    id,
    title,
    image,
    category,
    rating: { rate: ratingRate, count: ratingCount },
    description,
    price,
  } = product;

  // Navigate to product edit page
  const handleEditProduct = () => {
    router.push(`/Product/edit/${id}`);
  };

  const handleDeleteProduct = async () => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        const { error } = await deleteProduct(id);
        if (error) throw error;

        toast.success('Product deleted successfully!');
        router.push(`/`);
      } catch (error) {
        toast.error(
          `Unable to delete the product. Please try again (Status: ${error.status})`
        );
      }
    }
  };

  // Render the product details here
  return (
    <div className="flex flex-col items-center gap-x-4 gap-y-6 px-4 py-8 border-2 border-gray-300 rounded-md sm:flex-row">
      <div className="sm:flex-1/2 md:flex-1/3">
        <Image
          src={image}
          alt={title}
          width={400}
          height={400}
          className="h-60 sm:h-120 object-contain w-full"
        />
      </div>
      <div className="flex-1/2 px-4">
        <span className="inline-block text-xs mb-4 py-1 px-2 rounded-2xl bg-green-500 sm:mb-8">
          {category}
        </span>
        <h3 className="text-lg font-semibold mb-2 sm:text-xl sm:mb-4">
          {title}
        </h3>
        <p className="mb-3 text-sm sm:text-base">{description}</p>
        <div className="flex items-center gap-4 mb-8">
          <p className="text-red-600 self-end">${price}</p>
          <div className="flex items-center gap-1 text-sm">
            <ul className="flex items-center">
              <RatingStar rating={ratingRate} />
            </ul>
            <span className="mt-1.5">({ratingCount} Reviews)</span>
          </div>
        </div>

        <div className="space-x-4">
          <button className="btn-primary" onClick={handleEditProduct}>
            Update
          </button>
          <button
            className="btn-primary bg-red-600"
            onClick={handleDeleteProduct}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
