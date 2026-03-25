import { Link } from 'react-router-dom';
import { TrashIcon, MinusIcon, PlusIcon, ShoppingBagIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const SHIPPING_THRESHOLD = 100;

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, clearCart, cartTotal, cartCount } = useCart();

  const shipping = cartTotal >= SHIPPING_THRESHOLD ? 0 : 9.95;
  const total = cartTotal + shipping;

  const handleCheckout = () => {
    alert('Checkout coming soon! Thank you for shopping with LensForge.');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-dark-900 pt-20 flex items-center justify-center">
        <div className="text-center px-4">
          <div className="w-20 h-20 rounded-2xl bg-dark-800 border border-white/10 flex items-center justify-center mx-auto mb-6">
            <ShoppingBagIcon className="w-10 h-10 text-white/20" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-3">Your cart is empty</h1>
          <p className="text-white/50 mb-8">Add some gear and start capturing extraordinary moments.</p>
          <Link to="/shop" className="btn-primary inline-flex items-center gap-2">
            Browse Products
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white">Your Cart</h1>
            <p className="text-white/40 mt-1">{cartCount} {cartCount === 1 ? 'item' : 'items'}</p>
          </div>
          <button
            onClick={clearCart}
            className="text-sm text-white/40 hover:text-red-400 transition-colors flex items-center gap-1.5"
          >
            <TrashIcon className="w-4 h-4" />
            Clear cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map(({ product, quantity }) => (
              <div
                key={product.id}
                className="card p-4 flex flex-col sm:flex-row gap-4"
              >
                {/* Image */}
                <Link to={`/shop/${product.slug}`} className="shrink-0">
                  <div className="w-full sm:w-24 h-24 rounded-xl overflow-hidden bg-dark-700">
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Link>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <span className="text-xs text-primary-500 font-medium uppercase tracking-wider capitalize block mb-0.5">
                        {product.category}
                      </span>
                      <Link to={`/shop/${product.slug}`}>
                        <h3 className="font-semibold text-white hover:text-primary-500 transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="p-1.5 rounded-lg text-white/30 hover:text-red-400 hover:bg-red-400/10 transition-colors shrink-0"
                      aria-label={`Remove ${product.name}`}
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-sm text-white/40 line-clamp-1 mt-1">{product.shortDescription}</p>

                  <div className="flex items-center justify-between mt-3">
                    {/* Qty controls */}
                    <div className="flex items-center bg-dark-700 border border-white/10 rounded-lg">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="p-1.5 text-white/60 hover:text-white transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <MinusIcon className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-8 text-center text-white text-sm font-semibold">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="p-1.5 text-white/60 hover:text-white transition-colors"
                        aria-label="Increase quantity"
                      >
                        <PlusIcon className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Subtotal */}
                    <div className="text-right">
                      <div className="font-bold text-white">€{(product.price * quantity).toLocaleString()}</div>
                      {quantity > 1 && (
                        <div className="text-xs text-white/40">€{product.price.toLocaleString()} each</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="card p-6 sticky top-24">
              <h2 className="text-lg font-bold text-white mb-6">Order Summary</h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Subtotal ({cartCount} items)</span>
                  <span className="text-white">€{cartTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-white/60">Shipping</span>
                  <span className={shipping === 0 ? 'text-emerald-400 font-medium' : 'text-white'}>
                    {shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`}
                  </span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-white/30">
                    Add €{(SHIPPING_THRESHOLD - cartTotal).toFixed(2)} more for free shipping
                  </p>
                )}
              </div>

              <div className="border-t border-white/10 pt-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-white font-semibold">Total</span>
                  <span className="text-white font-bold text-xl">€{total.toLocaleString(undefined, { minimumFractionDigits: 2 })}</span>
                </div>
                <p className="text-xs text-white/30 mt-1">Including VAT</p>
              </div>

              <button onClick={handleCheckout} className="btn-primary w-full flex items-center justify-center gap-2 text-base">
                Proceed to Checkout
                <ArrowRightIcon className="w-4 h-4" />
              </button>

              <Link to="/shop" className="btn-secondary w-full flex items-center justify-center mt-3 text-sm">
                Continue Shopping
              </Link>

              <div className="mt-6 pt-6 border-t border-white/5 text-center">
                <p className="text-xs text-white/30">🔒 Secure checkout · SSL encrypted</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
