import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CTASection() {
  return (
    <section className="py-24 bg-dark-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-600 to-blue-600" />
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1455634215-7fed7f09aca8?w=1200&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/80 via-primary-800/50 to-transparent" />

          {/* Glow effect */}
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-16 md:py-20 max-w-2xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-semibold uppercase tracking-wider mb-6">
              Limited Time
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none mb-4">
              Ready to Elevate
              <span className="block">Your Photography?</span>
            </h2>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Explore our full range of professional cameras, lenses, and accessories. Free shipping on orders over €100.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:bg-white/90 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                Shop Now
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-200"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
