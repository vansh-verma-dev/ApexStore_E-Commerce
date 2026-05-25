import {
  ShieldCheck,
  CreditCard,
  Truck,
  CheckCircle2,
  Wallet,
} from "lucide-react";

import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";

function PaymentPage() {

  return (
    <>
      <Navbar />

      <section className="w-full min-h-screen bg-gray-100 pb-24 lg:pb-10">

        {/* HEADER */}
        <div className="w-full bg-white border-b sticky top-0 z-50">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-5 flex items-center justify-between">

            <div>

              <h1 className="text-2xl font-bold">
                Checkout
              </h1>

              <p className="text-gray-500 text-sm">
                Complete your payment securely
              </p>

            </div>

            <div className="hidden md:flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">

              <ShieldCheck size={18} />

              100% Secure Payment

            </div>

          </div>

        </div>

        {/* MAIN */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 grid lg:grid-cols-[1.2fr_0.8fr] gap-8">

          {/* LEFT SIDE */}
          <div className="flex flex-col gap-6">

            {/* ADDRESS */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">

              <div className="flex items-center justify-between">

                <div>

                  <h2 className="text-2xl font-bold">
                    Delivery Address
                  </h2>

                  <p className="text-gray-500 mt-1">
                    Choose your delivery location
                  </p>

                </div>

                <button className="px-5 h-11 rounded-2xl border hover:bg-black hover:text-white transition-all">

                  Change

                </button>

              </div>

              {/* ADDRESS CARD */}
              <div className="mt-6 border-2 border-black rounded-3xl p-5">

                <div className="flex items-start justify-between gap-4">

                  <div>

                    <div className="flex items-center gap-3">

                      <h3 className="text-lg font-bold">
                        Rahul Sharma
                      </h3>

                      <span className="bg-gray-100 text-sm px-3 py-1 rounded-full">

                        Home

                      </span>

                    </div>

                    <p className="text-gray-600 mt-3 leading-7">

                      21 Rajpur Road, Near ISBT,
                      Dehradun, Uttarakhand,
                      248001

                    </p>

                    <p className="mt-3 font-medium">

                      +91 9876543210

                    </p>

                  </div>

                  <CheckCircle2 className="text-green-600" />

                </div>

              </div>

            </div>

            {/* PAYMENT METHODS */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border">

              <h2 className="text-2xl font-bold">
                Payment Method
              </h2>

              <p className="text-gray-500 mt-1">
                Select your preferred payment option
              </p>

              <div className="mt-6 flex flex-col gap-5">

                {/* UPI */}
                <div className="border-2 border-black rounded-3xl p-5 cursor-pointer">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-purple-100 flex items-center justify-center">

                        <Wallet className="text-purple-600" />

                      </div>

                      <div>

                        <h3 className="text-lg font-bold">
                          UPI Payment
                        </h3>

                        <p className="text-sm text-gray-500">
                          Pay using Google Pay, PhonePe
                          or Paytm
                        </p>

                      </div>

                    </div>

                    <input
                      type="radio"
                      checked
                      readOnly
                      className="w-5 h-5"
                    />

                  </div>

                  {/* UPI INPUT */}
                  <div className="mt-5">

                    <input
                      type="text"
                      placeholder="Enter your UPI ID"
                      className="w-full h-14 border rounded-2xl px-5 outline-none focus:border-black"
                    />

                  </div>

                  {/* APPS */}
                  <div className="flex flex-wrap gap-3 mt-5">

                    <button className="px-5 py-3 rounded-2xl border hover:bg-gray-100 transition-all">

                      Google Pay

                    </button>

                    <button className="px-5 py-3 rounded-2xl border hover:bg-gray-100 transition-all">

                      PhonePe

                    </button>

                    <button className="px-5 py-3 rounded-2xl border hover:bg-gray-100 transition-all">

                      Paytm

                    </button>

                  </div>

                </div>

                {/* CARD PAYMENT */}
                <div className="border rounded-3xl p-5">

                  <div className="flex items-center justify-between">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">

                        <CreditCard className="text-blue-600" />

                      </div>

                      <div>

                        <h3 className="text-lg font-bold">
                          Credit / Debit Card
                        </h3>

                        <p className="text-sm text-gray-500">
                          Visa, Mastercard, Rupay
                        </p>

                      </div>

                    </div>

                    <input
                      type="radio"
                      className="w-5 h-5"
                    />

                  </div>

                  {/* CARD FORM */}
                  <div className="grid md:grid-cols-2 gap-4 mt-5">

                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      className="h-14 border rounded-2xl px-5 outline-none focus:border-black md:col-span-2"
                    />

                    <input
                      type="text"
                      placeholder="Card Number"
                      className="h-14 border rounded-2xl px-5 outline-none focus:border-black md:col-span-2"
                    />

                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="h-14 border rounded-2xl px-5 outline-none focus:border-black"
                    />

                    <input
                      type="text"
                      placeholder="CVV"
                      className="h-14 border rounded-2xl px-5 outline-none focus:border-black"
                    />

                  </div>

                </div>

                {/* COD */}
                <div className="border rounded-3xl p-5 flex items-center justify-between">

                  <div className="flex items-center gap-4">

                    <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center">

                      <Truck className="text-orange-600" />

                    </div>

                    <div>

                      <h3 className="text-lg font-bold">
                        Cash On Delivery
                      </h3>

                      <p className="text-sm text-gray-500">
                        Pay when your order arrives
                      </p>

                    </div>

                  </div>

                  <input
                    type="radio"
                    className="w-5 h-5"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div>

            <div className="bg-white rounded-3xl p-6 shadow-sm border sticky top-24">

              <h2 className="text-2xl font-bold">
                Order Summary
              </h2>

              {/* PRODUCT */}
              <div className="mt-6 flex gap-4">

                <div className="w-24 h-24 bg-gray-100 rounded-2xl overflow-hidden">

                  <img
                    src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
                    alt=""
                    className="w-full h-full object-cover"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="font-bold text-lg">
                    Nike Air Max 270
                  </h3>

                  <p className="text-gray-500 text-sm mt-1">
                    Size : 8
                  </p>

                  <p className="text-gray-500 text-sm">
                    Qty : 1
                  </p>

                  <h2 className="text-xl font-bold mt-2">
                    ₹ 8,999
                  </h2>

                </div>

              </div>

              {/* PRICE DETAILS */}
              <div className="mt-8 flex flex-col gap-5">

                <div className="flex items-center justify-between text-gray-600">

                  <span>Subtotal</span>

                  <span>₹ 8,999</span>

                </div>

                <div className="flex items-center justify-between text-gray-600">

                  <span>Shipping Fee</span>

                  <span>₹ 99</span>

                </div>

                <div className="flex items-center justify-between text-green-600 font-medium">

                  <span>Discount</span>

                  <span>- ₹ 500</span>

                </div>

                <div className="border-t pt-5 flex items-center justify-between">

                  <span className="text-xl font-bold">
                    Total
                  </span>

                  <span className="text-3xl font-bold">
                    ₹ 8,598
                  </span>

                </div>

              </div>

              {/* PAYMENT BUTTON */}
              <button className="w-full h-16 rounded-2xl bg-black text-white text-lg font-semibold mt-8 hover:opacity-90 active:scale-95 transition-all">

                Pay Now

              </button>

              {/* SECURITY */}
              <div className="mt-5 bg-gray-100 rounded-2xl p-4">

                <div className="flex items-start gap-3">

                  <ShieldCheck className="text-green-600 mt-1" />

                  <div>

                    <h3 className="font-semibold">
                      Secure Transactions
                    </h3>

                    <p className="text-sm text-gray-500 mt-1 leading-6">

                      Your payment information is
                      encrypted and completely secure.

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

export default PaymentPage;