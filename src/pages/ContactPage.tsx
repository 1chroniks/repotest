import { useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const faqs: { q: string; a: string }[] = [
  {
    q: 'What is your return policy?',
    a: 'We offer a 30-day hassle-free return policy on all products. Items must be in original condition with all accessories and packaging. Simply contact our support team and we\'ll arrange a free return label.',
  },
  {
    q: 'How long does shipping take?',
    a: 'Standard shipping takes 2-5 business days within Europe. Express (1-2 business days) and overnight options are available at checkout. Orders over €100 receive free standard shipping.',
  },
  {
    q: 'Do your products come with a warranty?',
    a: 'Yes! Every LensForge product is backed by a 2-year manufacturer\'s warranty covering defects in materials and workmanship. Extended warranty options are available for purchase.',
  },
  {
    q: 'Can I try a camera before buying?',
    a: 'We offer a 30-day "Try It Out" policy — use the camera for up to 30 days, and if it\'s not the right fit, return it for a full refund. We want you to love your camera.',
  },
  {
    q: 'Do you offer financing?',
    a: 'Yes, we partner with several payment providers to offer 0% interest installment plans on orders over €500. Select "Pay in installments" at checkout to see available options.',
  },
];

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClasses =
    'w-full bg-dark-700 border border-white/10 text-white placeholder-white/30 rounded-lg px-4 py-3 focus:outline-none focus:border-primary-500 transition-colors text-sm';

  return (
    <div className="min-h-screen bg-dark-900 pt-20 pb-20">
      {/* Header */}
      <section className="py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-primary-500 text-sm font-semibold uppercase tracking-wider">Get in Touch</span>
          <h1 className="section-title mt-3 mb-4">Contact Us</h1>
          <p className="section-subtitle mx-auto">
            Whether you have a question about our products, need expert advice, or want to talk shop — we're here for you.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <MapPinIcon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="font-semibold text-white mb-1">Our Office</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                LensForge HQ<br />
                Nørregade 42, 2nd Floor<br />
                1165 Copenhagen, Denmark
              </p>
            </div>

            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <EnvelopeIcon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="font-semibold text-white mb-1">Email Us</h3>
              <a href="mailto:hello@lensforge.com" className="text-primary-500 hover:underline text-sm">
                hello@lensforge.com
              </a>
              <p className="text-white/40 text-xs mt-1">We reply within 24 hours</p>
            </div>

            <div className="card p-6">
              <div className="w-10 h-10 rounded-xl bg-primary-500/10 flex items-center justify-center mb-4">
                <PhoneIcon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="font-semibold text-white mb-1">Call Us</h3>
              <a href="tel:+4520123456" className="text-primary-500 hover:underline text-sm">
                +45 20 12 34 56
              </a>
              <p className="text-white/40 text-xs mt-1">Mon–Fri, 9am–6pm CET</p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="card p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <span className="text-3xl">✅</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">Thanks for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary mt-6 text-sm">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="card p-8 space-y-5">
                <h2 className="text-xl font-bold text-white mb-2">Send a Message</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={handleChange}
                      className={inputClasses}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1.5" htmlFor="subject">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClasses}
                  >
                    <option value="">Select a subject…</option>
                    <option value="product">Product Question</option>
                    <option value="order">Order Support</option>
                    <option value="warranty">Warranty Claim</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1.5" htmlFor="message">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell us how we can help…"
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClasses} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-base">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* FAQ */}
        <section>
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="card overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDownIcon
                    className={`w-5 h-5 text-white/40 shrink-0 transition-transform duration-200 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 -mt-2">
                    <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
