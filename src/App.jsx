import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer'; // <-- Import the new footer
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

function App() {
  return (
    <CartProvider>
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      
      {/* min-h-screen and flex-col ensure the footer gets pushed to the bottom */}
      <div className="min-h-screen flex flex-col"> 
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 mb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer /> {/* <-- Add it right here, below main */}
      </div>
    </CartProvider>
  );
}

export default App;