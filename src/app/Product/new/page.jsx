import CreateProduct from '@/components/CreateProduct';

export const metadata = {
  title: 'Create New Product - Add Your Product to Our Catalog',
  description:
    'Add your new product to our catalog. Fill out the form with product details like name, price, description, and image to list your product.',
};

function page() {
  return (
    <section className="py-16">
      <h2 className="text-2xl font-bold text-center mb-6 sm:text-3xl">
        Create Product
      </h2>
      <div className="container">
        <CreateProduct />
      </div>
    </section>
  );
}

export default page;
