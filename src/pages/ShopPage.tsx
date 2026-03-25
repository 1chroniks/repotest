import { useState, useMemo } from 'react';
import { products } from '../data/products';
import type { ProductCategory } from '../types';
import ProductCard from '../components/ProductCard';
import CategoryFilter from '../components/CategoryFilter';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name' | 'rating';

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'Featured' },
  { value: 'price-asc', label: 'Price: Low to High' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'name', label: 'Name A–Z' },
  { value: 'rating', label: 'Best Rated' },
];

export default function ShopPage() {
  const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');
  const [sort, setSort] = useState<SortOption>('default');

  const filtered = useMemo(() => {
    let list = activeCategory === 'all' ? products : products.filter((p) => p.category === activeCategory);
    return [...list].sort((a, b) => {
      switch (sort) {
        case 'price-asc': return a.price - b.price;
        case 'price-desc': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'rating': return b.rating - a.rating;
        default: return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });
  }, [activeCategory, sort]);

  return (
    <div className="min-h-screen bg-dark-900 pt-24 pb-20">
      {/* Header */}
      <div className="bg-dark-800 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Browse</span>
          <h1 className="section-title mt-2">Our Collection</h1>
          <p className="section-subtitle">
            Discover our full range of cameras, lenses, and accessories — everything you need to capture the perfect shot.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filters bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <CategoryFilter activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
          <div className="flex items-center gap-3 shrink-0">
            <AdjustmentsHorizontalIcon className="w-4 h-4 text-white/40" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="bg-dark-700 border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-primary-500"
            >
              {sortOptions.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Count */}
        <p className="text-white/40 text-sm mb-6">
          {filtered.length} {filtered.length === 1 ? 'product' : 'products'} found
          {activeCategory !== 'all' && ` in ${activeCategory}`}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-white/40 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
