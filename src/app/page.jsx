import Head from 'next/head';
import Product from '@/components/Product';
import Spinner from '@/components/Spinner';
import ErrorMessage from '@/components/ErrorMessage';
import { getProducts } from '@/api/products';

export default async function page() {
  const { data, error, isLoading } = await getProducts();

  return (
    <section className="py-10">
      <div className="container">
        <h1 className="text-3xl font-bold mb-8">All Products</h1>

        {isLoading && <Spinner />}

        {error && <ErrorMessage error={error} />}

        {!isLoading && !error && <Product products={data} />}
      </div>
    </section>
  );
}
