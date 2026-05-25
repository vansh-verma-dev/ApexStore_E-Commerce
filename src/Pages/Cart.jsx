import { useLocation } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShieldCheck,
  Truck,
  Tag,
} from "lucide-react";

import MobileNav from "../Components/MobileNav";
import Footer from "../Components/Footer";
import { useState } from "react";

function CartPage() {

  const location = useLocation();

  const product = location.state;

  // NO PRODUCT
  if (!product) {
    return (
      <div className="w-full h-screen flex items-center justify-center text-2xl font-bold">
        No Product Found
      </div>
    );
  }

  // QUANTITY STATE
  const [quantity, setQuantity] = useState(
    product.quantity
  );

  // PRICE CALCULATION
  const subtotal = product.price * quantity;

  const shipping = 99;

  const discount = 500;

  const total = subtotal + shipping - discount;

  return (
    <>
      <section className="w-full min-h-screen bg-gray-100 pb-24 lg:pb-10">

        {/* HEADER */}
        <div className="w-full bg-white border-b sticky top-0 z-50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">

            <div>

              <h1 className="text-2xl font-bold">
                Your Cart
              </h1>

              <p className="text-gray-500 text-sm">
                Review your items before checkout
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

              <ShieldCheck size={18} />

              Secure Checkout

            </div>

          </div>

        </div>

        {/* MAIN SECTION */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 grid lg:grid-cols-[1.3fr_0.7fr] gap-8">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">

            {/* PRODUCT CARD */}
            <div className="bg-white rounded-3xl p-4 sm:p-6 shadow-sm border">

              <div className="flex flex-col sm:flex-row gap-5">

                {/* IMAGE */}
                <div className="w-full sm:w-[220px] h-[220px] bg-gray-100 rounded-3xl overflow-hidden">

                  <img
                    src={product.image}
                    alt=""
                    className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                  />

                </div>

                {/* DETAILS */}
                <div className="flex-1 flex flex-col justify-between">

                  <div>

                    {/* TOP */}
                    <div className="flex items-start justify-between gap-4">

                      <div>

                        <h1 className="text-2xl font-bold text-gray-900">

                          {product.name}

                        </h1>

                        <p className="text-gray-500 mt-2 leading-7">

                          Premium quality sneakers for
                          comfort, gym, running and
                          daily lifestyle use.

                        </p>

                      </div>

                      {/* DELETE */}
                      <button className="w-11 h-11 rounded-full border flex items-center justify-center hover:bg-red-500 hover:text-white transition-all active:scale-95">

                        <Trash2 size={18} />

                      </button>

                    </div>

                    {/* SIZE + STOCK */}
                    <div className="flex flex-wrap gap-3 mt-5">

                      <div className="bg-gray-100 px-4 py-2 rounded-xl text-sm font-medium">

                        Size : {product.size}

                      </div>

                      <div className="bg-green-100 text-green-700 px-4 py-2 rounded-xl text-sm font-medium">

                        In Stock

                      </div>

                    </div>

                  </div>

                  {/* BOTTOM */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mt-6">

                    {/* QUANTITY */}
                    <div className="flex items-center gap-4">

                      {/* MINUS */}
                      <button
                        onClick={() =>
                          quantity > 1 &&
                          setQuantity(quantity - 1)
                        }
                        className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition-all"
                      >

                        <Minus size={18} />

                      </button>

                      {/* NUMBER */}
                      <span className="text-xl font-bold transition-all duration-300">

                        {quantity}

                      </span>

                      {/* PLUS */}
                      <button
                        onClick={() =>
                          setQuantity(quantity + 1)
                        }
                        className="w-11 h-11 rounded-xl border flex items-center justify-center hover:bg-black hover:text-white active:scale-95 transition-all"
                      >

                        <Plus size={18} />

                      </button>

                    </div>

                    {/* PRICE */}
                    <div className="text-left sm:text-right">

                      <h2 className="text-3xl font-bold">

                        ₹ {subtotal}

                      </h2>

                      <p className="text-green-600 text-sm font-medium mt-1">

                        You saved ₹500

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* DELIVERY CARD */}
            <div className="bg-white rounded-3xl p-5 border shadow-sm">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                  <Truck className="text-blue-600" />

                </div>

                <div>

                  <h2 className="text-lg font-bold">

                    Free Delivery Available

                  </h2>

                  <p className="text-gray-500 mt-1">

                    Your order will be delivered
                    within 3-5 business days.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="w-full">

            <div className="bg-white rounded-3xl p-6 shadow-sm border sticky top-24">

              <h2 className="text-2xl font-bold">

                Order Summary

              </h2>

              {/* COUPON */}
              <div className="mt-6">

                <p className="font-medium mb-3">

                  Apply Coupon

                </p>

                <div className="flex gap-3">

                  <div className="flex-1 relative">

                    <Tag
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      type="text"
                      placeholder="Enter coupon"
                      className="w-full h-14 rounded-2xl border pl-12 pr-4 outline-none focus:border-black"
                    />

                  </div>

                  <button className="px-5 rounded-2xl bg-black text-white font-medium hover:opacity-90 active:scale-95 transition-all">

                    Apply

                  </button>

                </div>

              </div>

              {/* PRICE DETAILS */}
              <div className="mt-8 flex flex-col gap-5">

                <div className="flex items-center justify-between text-gray-600">

                  <span>Subtotal</span>

                  <span>₹ {subtotal}</span>

                </div>

                <div className="flex items-center justify-between text-gray-600">

                  <span>Shipping Fee</span>

                  <span>₹ {shipping}</span>

                </div>

                <div className="flex items-center justify-between text-green-600 font-medium">

                  <span>Discount</span>

                  <span>- ₹ {discount}</span>

                </div>

                {/* TOTAL */}
                <div className="border-t pt-5 flex items-center justify-between">

                  <span className="text-xl font-bold">

                    Total

                  </span>

                  <span className="text-3xl font-bold">

                    ₹ {total}

                  </span>

                </div>

              </div>

              {/* CHECKOUT BUTTON */}
              <button className="w-full h-16 rounded-2xl bg-black text-white text-lg font-semibold mt-8 hover:opacity-90 active:scale-95 transition-all">

                Proceed To Checkout

              </button>

              {/* SECURITY */}
              <div className="mt-5 bg-gray-100 rounded-2xl p-4">

                <div className="flex items-start gap-3">

                  <ShieldCheck className="text-green-600 mt-1" />

                  <div>

                    <h3 className="font-semibold">

                      Secure Payments

                    </h3>

                    <p className="text-sm text-gray-500 mt-1">

                      All transactions are encrypted
                      and secured.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <Footer />

      <MobileNav />
    </>
  );
}

export default CartPage;