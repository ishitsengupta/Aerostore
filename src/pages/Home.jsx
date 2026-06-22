import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch('https://fakestoreapi.com/products?limit=8');
      if (!res.ok) throw new Error('Failed to load featured products');
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C9CFF] to-[#5EEAD4]">Commerce</span>
        </h1>
        <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto">
          Experience a curated selection of premium products with an immersive, minimalist interface.
        </p>
        <Link to="/products">
          <Button className="text-lg px-8 py-3">Shop Collection</Button>
        </Link>
      </section>

      {/* Featured Products */}
      <section className="py-10">
        <h2 className="text-3xl font-bold mb-8">Featured Items</h2>
        {loading ? <LoadingSpinner /> : error ? <ErrorMessage message={error} onRetry={fetchProducts} /> : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}