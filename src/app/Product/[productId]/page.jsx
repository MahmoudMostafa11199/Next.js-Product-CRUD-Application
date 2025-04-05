import ProductDetails from '@/components/ProductDetails';
import ErrorMessage from '@/components/ErrorMessage';
import Spinner from '@/components/Spinner';
import { getProductById } from '@/api/products';

export async function generateMetadata({ params }) {
  const id = params.productId;
  const { data } = await getProductById(id);

  return {
    title: `Product Details - #${id}`,
    description: `Get full details about ${data.title}, including its features, pricing, and more. Find out why this product is a top choice for our customers.`,
  };
}

async function page({ params }) {
  const { productId: id } = await params;
  const { data, error, isLoading } = await getProductById(id);

  return (
    <section className="py-16">
      <div className="container">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Product Details ID #{id}
        </h2>
        {isLoading && <Spinner />}

        {error && <ErrorMessage error={error} />}

        {!isLoading && data && <ProductDetails product={data} />}
      </div>
    </section>
  );
}

export default page;
