import Link from 'next/link';

function Header() {
  return (
    <header className="py-6 bg-slate-400">
      <nav>
        <ul className="flex justify-center items-center gap-4 font-semibold">
          <li className="hover:text-indigo-700 transition-all">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-indigo-700 transition-all">
            <Link href="/Product/new">Create Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
