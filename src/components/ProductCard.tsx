import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import type { Product } from '../types';
import { useCart } from '../context/CartContext';
import Badge from './ui/Badge';
import StarRating from './ui/StarRating';

interface ProductCardProps {
  product: Product;
}

function badgeVariant(badge: string): 'red' | 'blue' | 'green' | 'yellow' | 'gray' {
  const map: Record<string, 'red' | 'blue' | 'green' | 'yellow' | 'gray'> = {
    Sale: 'red',
    New: 'green',
    Pro: 'blue',
    Flagship: 'yellow',
    'Best Seller': 'green',
  };
  return map[badge] ?? 'gray';
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="card group flex flex-col overflow-hidden">
      {/* Image */}
      <Link to={`/shop/${product.slug}`} className="relative overflow-hidden block aspect-[4/3]">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {product.badge && (
          <div className="absolute top-3 left-3">
            <Badge text={product.badge} variant={badgeVariant(product.badge)} />
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-dark-900/70 flex items-center justify-center">
            <span className="text-white/80 font-semibold text-sm">Out of Stock</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <span className="text-xs text-primary-500 font-medium uppercase tracking-wider capitalize">
            {product.category}
          </span>
          <div className="flex items-center gap-1 shrink-0">
            <StarRating rating={product.rating} size="sm" />
            <span className="text-xs text-white/40">({product.reviewCount})</span>
          </div>
        </div>

        <Link to={`/shop/${product.slug}`}>
          <h3 className="font-semibold text-white hover:text-primary-500 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
        </Link>

        <p className="text-sm text-white/50 line-clamp-2 mb-4 flex-1">
          {product.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-bold text-white">€{product.price.toLocaleString()}</span>
            {product.originalPrice && (
              <span className="text-sm text-white/40 line-through">
                €{product.originalPrice.toLocaleString()}
              </span>
            )}
            {discount && (
              <span className="text-xs text-red-400 font-medium">-{discount}%</span>
            )}
          </div>
          <button
            onClick={() => addToCart(product, 1)}
            disabled={!product.inStock}
            className="flex items-center gap-1.5 px-3 py-2 bg-primary-500 hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 active:scale-95"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCartIcon className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>
    </div>
  );
}
