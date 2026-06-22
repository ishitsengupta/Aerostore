import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Button from '../components/Button';

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart, getCartTotal } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-32">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-slate-600 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products">
          <Button>Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="glass-panel p-6 mb-8 flex flex-col gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-slate-200 last:border-0 last:pb-0">
            <div className="w-24 h-24 bg-white rounded-lg p-2 flex-shrink-0">
              <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
            </div>
            
            <div className="flex-grow text-center sm:text-left">
              <h3 className="font-bold text-lg mb-1">{item.title}</h3>
              <p className="font-mono text-[#5EEAD4]">${item.price.toFixed(2)}</p>
            </div>
            
            <div className="flex items-center gap-4 glass-panel px-4 py-2 !rounded-full">
              <button onClick={() => updateQuantity(item.id, -1)} className="text-xl hover:text-[#7C9CFF]">&minus;</button>
              <span className="font-mono w-6 text-center">{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)} className="text-xl hover:text-[#7C9CFF]">+</button>
            </div>
            
            <button onClick={() => removeFromCart(item.id)} className="text-slate-400 hover:text-red-400 transition-colors p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        ))}
      </div>
      
      <div className="glass-panel p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
        <div>
          <p className="text-slate-500 mb-1">Total Amount</p>
          <p className="font-mono text-3xl font-bold text-[#7C9CFF]">${getCartTotal().toFixed(2)}</p>
        </div>
        <Button className="w-full sm:w-auto px-12 py-4">Proceed to Checkout</Button>
      </div>
    </div>
  );
}