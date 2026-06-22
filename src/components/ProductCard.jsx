import { Link } from 'react-router-dom';
import Button from './Button';

export default function ProductCard({ product }) {
  return (
    <div className="glass-panel p-4 flex flex-col h-full hover:scale-[1.02] transition-transform duration-300">
      <div className="bg-white rounded-xl p-4 h-48 flex items-center justify-center mb-4">
        <img src={product.image} alt={product.title} className="max-h-full max-w-full object-contain" />
      </div>
      <div className="flex flex-col flex-grow">
        <h3 className="font-bold text-sm line-clamp-2 mb-2" title={product.title}>{product.title}</h3>
        <p className="font-mono text-[#5EEAD4] text-lg font-bold mt-auto mb-4">${product.price.toFixed(2)}</p>
        <Link to={`/products/${product.id}`} className="mt-auto">
          <Button variant="outline" className="w-full">View Details</Button>
        </Link>
      </div>
    </div>
  );
}