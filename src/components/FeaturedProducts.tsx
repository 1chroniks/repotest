import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function FeaturedProducts() {
  const featured = products.filter((p) => p.featured);

  return (
    <section className="py-24 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Handpicked for you</span>
            <h2 className="section-title mt-2">Featured Products</h2>
            <p className="section-subtitle">
              Our most loved cameras and lenses, selected by our team of photography experts.
            </p>
          </div>
          <Link
            to="/shop"
            className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium whitespace-nowrap group"
          >
            View all products
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
