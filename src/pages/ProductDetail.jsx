import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('Product not found');
        const data = await res.json();
        setProduct(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error} onRetry={() => window.location.reload()} />;
  if (!product) return null;

  return (
    <div className="max-w-5xl mx-auto py-10">
      <Button variant="ghost" onClick={() => navigate('/products')} className="mb-8 pl-0">
        &larr; Back to Products
      </Button>
      
      <div className="glass-panel p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-2xl p-8 h-[400px] flex items-center justify-center">
          <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
        </div>
        
        <div>
          <span className="uppercase text-xs tracking-widest text-[#5EEAD4] font-bold bg-[#5EEAD4]/10 px-3 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-3xl font-bold mt-4 mb-2">{product.title}</h1>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-400">★ {product.rating.rate}</span>
            <span className="text-slate-400 text-sm">({product.rating.count} reviews)</span>
          </div>
          
          <p className="font-mono text-4xl text-[#7C9CFF] font-bold mb-6">${product.price.toFixed(2)}</p>
          <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>
          
          <Button onClick={() => addToCart(product)} className="w-full md:w-auto py-4 px-10 text-lg">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}