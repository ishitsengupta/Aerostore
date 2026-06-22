import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Navbar() {
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <nav className="sticky top-0 z-50 glass-panel border-x-0 border-t-0 rounded-none mb-8">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#7C9CFF]"></span>
          AeroStore
        </Link>
        <div className="flex items-center gap-6">
          <Link to="/" className="text-slate-600 hover:text-white transition-colors">Home</Link>
          <Link to="/products" className="text-slate-600 hover:text-white transition-colors">Products</Link>
          <Link to="/cart" className="relative text-slate-800 hover:text-[#5EEAD4] transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#7C9CFF] text-black text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}