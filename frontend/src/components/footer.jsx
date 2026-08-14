import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-white">Apple Store</h2>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-400">
              Premium tech and accessories, curated for everyday life. Visit us in
              store or shop online — same quality, same trust.
            </p>

            <div className="mt-5 space-y-2 text-sm text-gray-400">
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-gray-500" strokeWidth="1.8">
                  <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                  <circle cx="12" cy="9.5" r="2.5" />
                </svg>
                <span>Meerut, Uttar Pradesh 250344</span>
              </div>
              <div className="flex items-start gap-2.5">
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-none stroke-gray-500" strokeWidth="1.8">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="M3 7l9 6 9-6" />
                </svg>
                <a href="mailto:vanshrakesh67@gmail.com" className="transition hover:text-white">
                  vanshrakesh67@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Shop</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="transition hover:text-white">New arrivals</a></li>
              <li><a href="#" className="transition hover:text-white">Best sellers</a></li>
              <li><a href="#" className="transition hover:text-white">Deals and offers</a></li>
              <li><a href="#" className="transition hover:text-white">Gift cards</a></li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-sm font-semibold text-white">Support</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-gray-400">
              <li><a href="#" className="transition hover:text-white">Track your order</a></li>
              <li><a href="#" className="transition hover:text-white">Returns and refunds</a></li>
              <li><a href="#" className="transition hover:text-white">Shipping info</a></li>
              <li><a href="#" className="transition hover:text-white">Contact us</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 flex flex-col gap-4 rounded-2xl bg-gray-800/60 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-white">Get updates on new drops</p>
            <p className="mt-0.5 text-xs text-gray-400">No spam, unsubscribe anytime.</p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-full border border-gray-700 bg-gray-900 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none transition focus:border-gray-500"
            />
            <button
              type="submit"
              className="shrink-0 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-gray-900 transition hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-6 sm:flex-row">
          <p className="text-xs text-gray-500">
            © {year} Apple Store, Meerut. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {/* Instagram */}
            <a href="#" aria-label="Instagram" className="text-gray-500 transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.6">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="text-gray-500 transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.6">
                <path d="M15 8.5h2V5h-2c-2.2 0-4 1.8-4 4v2H9v3.5h2V21h3.5v-6.5H17l.5-3.5h-3V9c0-.6.4-1 1-1z" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a href="#" aria-label="WhatsApp" className="text-gray-500 transition hover:text-white">
              <svg viewBox="0 0 24 24" className="h-5 w-5 fill-none stroke-current" strokeWidth="1.6">
                <path d="M4 20l1.3-4A8 8 0 1 1 8.5 19L4 20z" />
                <path d="M9 10c0 3 2 5 5 5" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

