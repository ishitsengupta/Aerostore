import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto glass-panel border-x-0 border-b-0 rounded-none pb-8 pt-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tight text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-[#7C9CFF]"></span>
              AeroStore
            </Link>
            <p className="text-slate-500 max-w-sm">
              Experience a curated selection of premium products with an immersive, minimalist interface. Built with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-slate-800 font-bold mb-4">Quick Links</h4>
            <ul className="flex flex-col gap-2">
              <li><Link to="/" className="text-slate-500 hover:text-[#7C9CFF] transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-slate-500 hover:text-[#7C9CFF] transition-colors">Products</Link></li>
              <li><Link to="/cart" className="text-slate-500 hover:text-[#7C9CFF] transition-colors">Cart</Link></li>
            </ul>
          </div>

          {/* Socials / Legal */}
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              <li><a href="#" className="text-slate-500 hover:text-[#5EEAD4] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-[#5EEAD4] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-[#5EEAD4] transition-colors">Return Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AeroStore. All rights reserved.</p>
          <p>Powered by FakeStore API</p>
        </div>
      </div>
    </footer>
  );
}