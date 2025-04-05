import Image from 'next/image';
import Link from 'next/link';

function Product({ products }) {
  return (
    <div className="flex gap-x-4 gap-y-8 flex-wrap">
      {products.map((product) => (
        <div
          key={product.id}
          className="h-auto border-2 border-gray-300 p-4 relative flex-1/2 sm:flex-1/3 md:flex-1/4 lg:flex-1/5"
        >
          <Link
            href={`/Product/${product.id}`}
            className="absolute top-0 left-0 w-full h-full"
          ></Link>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className="h-72 w-full object-contain mb-4"
          />
          <h3 className="font-semibold mb-2">{product.title}</h3>
          <p className="text-sm text-red-600">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Product;
