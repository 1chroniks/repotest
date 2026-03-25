import type { ProductCategory } from '../types';
import { categories } from '../data/products';

interface CategoryFilterProps {
  activeCategory: ProductCategory | 'all';
  onCategoryChange: (cat: ProductCategory | 'all') => void;
}

export default function CategoryFilter({ activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onCategoryChange('all')}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
          activeCategory === 'all'
            ? 'bg-primary-500 text-white'
            : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
        }`}
      >
        All Products
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onCategoryChange(cat.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
            activeCategory === cat.id
              ? 'bg-primary-500 text-white'
              : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          <span>{cat.icon}</span>
          <span>{cat.name}</span>
        </button>
      ))}
    </div>
  );
}
