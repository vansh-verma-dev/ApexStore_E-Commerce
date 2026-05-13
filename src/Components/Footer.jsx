import React from "react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#020617] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO & ABOUT */}
          <div>
            <h1 className="text-3xl font-bold">
              Apex<span className="text-indigo-500">Store</span>
            </h1>

            <p className="text-slate-400 mt-5 leading-relaxed text-sm">
              Discover premium fashion, trending gadgets,
              and top-quality accessories at affordable prices.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500 transition-all duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-pink-500 transition-all duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-sky-500 transition-all duration-300"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 transition-all duration-300"
              >
                <FaYoutube />
              </a>

            </div>
          </div>

          {/* SHOP LINKS */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Shop
            </h2>

            <ul className="space-y-3 text-slate-400 text-sm">

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Men Fashion
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Women Fashion
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Electronics
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Accessories
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  New Arrivals
                </a>
              </li>

            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Support
            </h2>

            <ul className="space-y-3 text-slate-400 text-sm">

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Contact Us
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  FAQs
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Shipping Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-indigo-400 transition">
                  Privacy Policy
                </a>
              </li>

            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h2 className="text-xl font-semibold mb-5">
              Newsletter
            </h2>

            <p className="text-slate-400 text-sm leading-relaxed">
              Subscribe to get updates about new products,
              offers and exclusive deals.
            </p>

            <form className="mt-5 flex flex-col gap-4">

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm outline-none focus:border-indigo-500"
              />

              <button
                className="bg-indigo-500 hover:bg-indigo-600 transition-all duration-300 py-3 rounded-xl text-sm font-medium"
              >
                Subscribe Now
              </button>

            </form>
          </div>

        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-slate-500 text-sm text-center sm:text-left">
            © 2026 Apex Store. All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">

            <a href="#" className="hover:text-indigo-400 transition">
              Terms
            </a>

            <a href="#" className="hover:text-indigo-400 transition">
              Privacy
            </a>

            <a href="#" className="hover:text-indigo-400 transition">
              Cookies
            </a>

          </div>

        </div>
      </div>

    </footer>
  );
}

export default Footer;