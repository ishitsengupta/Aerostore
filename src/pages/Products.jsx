import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [searchError, setSearchError] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [prodRes, catRes] = await Promise.all([
        fetch('https://fakestoreapi.com/products'),
        fetch('https://fakestoreapi.com/products/categories')
      ]);
      
      if (!prodRes.ok || !catRes.ok) throw new Error('Failed to fetch store data');
      
      const prodData = await prodRes.json();
      const catData = await catRes.json();
      
      setProducts(prodData);
      setCategories(['all', ...catData]);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) {
      setSearchError('Please enter a search term');
      return;
    }
    setSearchError('');
    setActiveCategory('all'); // Reset category when searching
  };

  const filteredProducts = products.filter(p => {
    const matchesCat = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="pb-10">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
        {/* Categories */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button 
              key={cat} 
              variant={activeCategory === cat ? 'primary' : 'ghost'}
              className="capitalize text-sm"
              onClick={() => { setActiveCategory(cat); setSearchTerm(''); setSearchError(''); }}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="relative w-full md:w-auto">
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setSearchError(''); }}
              className="glass-panel px-4 py-2 bg-transparent text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#7C9CFF] w-full md:w-64"
            />
            <Button type="submit">Search</Button>
          </div>
          {searchError && <p className="text-red-400 text-sm absolute -bottom-6 left-0">{searchError}</p>}
        </form>
      </div>

      {/* Product Grid */}
      {loading ? <LoadingSpinner /> : error ? <ErrorMessage message={error} onRetry={fetchData} /> : (
        filteredProducts.length === 0 ? (
          <div className="text-center py-20 text-slate-500">No products found matching your criteria.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )
      )}
    </div>
  );
}