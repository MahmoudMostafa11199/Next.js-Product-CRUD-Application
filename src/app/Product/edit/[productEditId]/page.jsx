import Head from 'next/head';
import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import EditProduct from '@/components/EditProduct';
import { getProductById } from '@/api/products';

export const metadata = {
  title: 'Edit Product - Update Your Product Information',
  description:
    'Edit and update the details of your existing product. Change the name, price, description, or image to keep your product information current.',
};

async function page({ params }) {
  const { productEditId: id } = await params;
  const { data, error, isLoading } = await getProductById(id);

  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-6 sm:text-3xl">
        Edit Product id #{id}
      </h2>
      <div className="container">
        {isLoading && <Spinner />}

        {error && <ErrorMessage error={error} />}

        {!isLoading && !error && <EditProduct id={id} data={data} />}
      </div>
    </section>
  );
}

export default page;
