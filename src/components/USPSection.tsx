import {
  TruckIcon,
  ShieldCheckIcon,
  ChatBubbleLeftRightIcon,
  StarIcon,
  CameraIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

const usps = [
  {
    icon: TruckIcon,
    title: 'Free Shipping',
    description: 'Free tracked delivery on all orders over €100. Express options available at checkout.',
  },
  {
    icon: ShieldCheckIcon,
    title: '2-Year Warranty',
    description: 'Every LensForge product comes with a comprehensive 2-year manufacturer warranty.',
  },
  {
    icon: ChatBubbleLeftRightIcon,
    title: 'Expert Support',
    description: 'Our team of professional photographers is available 7 days a week to help you choose.',
  },
  {
    icon: StarIcon,
    title: 'Premium Quality',
    description: 'All products are tested to the highest standards before leaving our warehouse.',
  },
  {
    icon: CameraIcon,
    title: 'Try Before You Buy',
    description: 'Return any camera within 30 days if it\'s not the right fit, no questions asked.',
  },
  {
    icon: CreditCardIcon,
    title: 'Secure Checkout',
    description: 'Shop with confidence. PCI-compliant checkout with all major payment methods accepted.',
  },
];

export default function USPSection() {
  return (
    <section className="py-24 bg-dark-800 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Why LensForge</span>
          <h2 className="section-title mt-2">The LensForge Promise</h2>
          <p className="section-subtitle mx-auto">
            We built LensForge for photographers who demand the best — in their equipment and their buying experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex gap-4 p-6 rounded-2xl bg-dark-700/50 border border-white/5 hover:border-primary-500/20 hover:bg-dark-700 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/20 transition-colors">
                <Icon className="w-6 h-6 text-primary-500" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">{title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
