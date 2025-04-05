import { Inter, Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import Header from '@/shared/Header';
import Footer from '@/shared/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: 'Product Listing - Explore Our Latest Products',
  description:
    'Browse through our collection of top-rated products. Find the best deals and detailed information about each product in our easy-to-navigate catalog.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter} ${poppins}`}>
        <Toaster position="top-center" />

        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
