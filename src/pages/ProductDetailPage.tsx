import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronRightIcon, MinusIcon, PlusIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import StarRating from '../components/ui/StarRating';
import Badge from '../components/ui/Badge';
import ProductCard from '../components/ProductCard';

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

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen bg-dark-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product not found</h1>
          <Link to="/shop" className="btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const related = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-white/40 py-6">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRightIcon className="w-4 h-4" />
          <Link
            to={`/shop?category=${product.category}`}
            className="hover:text-white transition-colors capitalize"
          >
            {product.category}
          </Link>
          <ChevronRightIcon className="w-4 h-4" />
          <span className="text-white/70 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Product detail */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Image gallery */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-800 border border-white/5">
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.badge && (
                <div className="absolute top-4 left-4">
                  <Badge text={product.badge} variant={badgeVariant(product.badge)} />
                </div>
              )}
            </div>
            {product.images.length > 1 && (
              <div className="flex gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImg(i)}
                    className={`w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImg === i ? 'border-primary-500' : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={img} alt={`${product.name} view ${i + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="mb-2">
              <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider capitalize">
                {product.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{product.name}</h1>

            <div className="flex items-center gap-3 mb-6">
              <StarRating rating={product.rating} size="md" />
              <span className="text-white font-semibold">{product.rating.toFixed(1)}</span>
              <span className="text-white/40 text-sm">({product.reviewCount} reviews)</span>
            </div>

            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl font-black text-white">€{product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-white/40 line-through">€{product.originalPrice.toLocaleString()}</span>
                  {discount && (
                    <span className="text-sm font-semibold text-red-400 bg-red-400/10 px-2 py-0.5 rounded-md">
                      Save {discount}%
                    </span>
                  )}
                </>
              )}
            </div>

            <p className="text-white/60 leading-relaxed mb-8">{product.description}</p>

            {/* Stock status */}
            <div className="flex items-center gap-2 mb-8">
              <div className={`w-2 h-2 rounded-full ${product.inStock ? 'bg-emerald-400' : 'bg-red-400'}`} />
              <span className={`text-sm font-medium ${product.inStock ? 'text-emerald-400' : 'text-red-400'}`}>
                {product.inStock ? 'In Stock – Ships within 2-3 business days' : 'Out of Stock'}
              </span>
            </div>

            {/* Quantity + Add to Cart */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center bg-dark-700 border border-white/10 rounded-lg">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                  aria-label="Decrease quantity"
                >
                  <MinusIcon className="w-4 h-4" />
                </button>
                <span className="w-12 text-center text-white font-semibold">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="p-3 text-white/60 hover:text-white transition-colors"
                  aria-label="Increase quantity"
                >
                  <PlusIcon className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
                  added
                    ? 'bg-emerald-600 text-white'
                    : 'bg-primary-500 hover:bg-primary-600 text-white hover:scale-105 active:scale-95'
                } disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                <ShoppingCartIcon className="w-5 h-5" />
                {added ? 'Added to Cart!' : 'Add to Cart'}
              </button>

              <button
                onClick={() => { addToCart(product, qty); navigate('/cart'); }}
                disabled={!product.inStock}
                className="btn-secondary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Buy Now
              </button>
            </div>

            {/* Specs */}
            <div className="rounded-2xl bg-dark-800 border border-white/5 overflow-hidden">
              <div className="px-6 py-4 border-b border-white/5">
                <h3 className="text-white font-semibold">Specifications</h3>
              </div>
              <div className="divide-y divide-white/5">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex px-6 py-3 gap-4">
                    <span className="text-sm text-white/40 w-40 shrink-0">{key}</span>
                    <span className="text-sm text-white">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
