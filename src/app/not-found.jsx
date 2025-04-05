import Link from 'next/link';

function NotFound() {
  return (
    <section className="py-14">
      <div className="container">
        <div className="text-center">
          <h1 className="mt-4 mb-6 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            404 Not page found
          </h1>
          <p className="mb-16 text-sm font-medium">
            Your visit page not found. You may go home page.
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

export default NotFound;
