import { CheckCircleIcon } from '@heroicons/react/24/outline';

const stats = [
  { value: '10,000+', label: 'Happy Customers' },
  { value: '50+', label: 'Products' },
  { value: '4.8 / 5', label: 'Average Rating' },
  { value: '2-Year', label: 'Warranty on All Products' },
];

const values = [
  {
    title: 'Uncompromising Quality',
    description:
      'Every LensForge product undergoes rigorous testing by our team of professional photographers before it earns the right to carry our name. We believe a camera should be as reliable as it is inspiring.',
    icon: '🏆',
  },
  {
    title: 'Innovation First',
    description:
      'We invest heavily in R&D to stay ahead of the curve. From next-generation sensor technology to AI-driven autofocus, we push the boundaries of what\'s possible so that you can push yours.',
    icon: '🔬',
  },
  {
    title: 'Community & Education',
    description:
      'Photography is more than a purchase — it\'s a journey. We support our community with tutorials, workshops, and a dedicated team of experts who help you grow as a photographer.',
    icon: '🌍',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-dark-900 pt-20">
      {/* Hero */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-dark-900 to-dark-900" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Our Story</span>
          <h1 className="section-title mt-3 mb-6">
            Crafted for Those Who
            <span className="block text-primary-500">See Differently</span>
          </h1>
          <p className="section-subtitle mx-auto leading-relaxed">
            LensForge was born from a simple belief: that exceptional photography equipment should inspire exceptional photography. We started in a small workshop and grew into a global brand trusted by professionals on every continent.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-dark-800 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">From Passion to Purpose</h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  LensForge was founded in 2018 by Sofia Martínez, a veteran photojournalist who had spent 15 years working in the most demanding environments on the planet — conflict zones, deep wilderness, major sporting events. She knew exactly what a professional camera needed to do, and she knew the existing options fell short in critical ways.
                </p>
                <p>
                  Together with a team of optical engineers, industrial designers, and fellow photographers, Sofia set out to build something different: cameras that felt as precise and reliable as the best tools in any craft, but were deeply informed by what it actually feels like to hold one and chase the light.
                </p>
                <p>
                  Today, LensForge products are used by documentary filmmakers, wedding photographers, wildlife biologists, and curious amateurs on their first adventure. We\'re proud that our cameras are trusted in some of the most remote and demanding places on earth.
                </p>
              </div>
              <div className="mt-8 space-y-3">
                {[
                  'Founded in 2018 in Copenhagen, Denmark',
                  'Products shipped to 45+ countries worldwide',
                  'Awarded Best Camera Brand 2023 by PhotographyWeekly',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80"
                  alt="LensForge story"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-2xl overflow-hidden border-4 border-dark-800">
                <img
                  src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80"
                  alt="Camera detail"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="card p-8 text-center hover:border-primary-500/20 transition-all duration-300"
              >
                <div className="text-4xl font-black text-primary-500 mb-2">{value}</div>
                <div className="text-white/50 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-800 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">What Drives Us</span>
            <h2 className="section-title mt-2">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map(({ title, description, icon }) => (
              <div key={title} className="card p-8 hover:border-primary-500/20">
                <div className="text-4xl mb-4">{icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
