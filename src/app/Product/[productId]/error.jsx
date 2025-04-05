'use client';

import Link from 'next/link';

function error({ error }) {
  return (
    <section className="py-14">
      <div className="container">
        <div className="text-center">
          <h1 className="mt-4 mb-6 text-2xl font-semibold tracking-tight text-balance text-gray-900 sm:text-4xl">
            {error.message}
          </h1>
          <p className="mb-16 text-sm font-medium">
            Sorry, we couldn't find the product you're looking for. It may have
            been removed or the link is incorrect.
          </p>
          <div>
            <Link href="/" className="btn-primary">
              Back to home page
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default error;
