// AuthPage.jsx
import React, { useState } from "react";
import { ShoppingBag, Mail, Lock, User } from "lucide-react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-full h-screen overflow-hidden bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-6xl h-[92vh] rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2">
        
        {/* Left Side */}
        <div className="hidden lg:flex relative bg-black text-white p-12 flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-2xl font-bold">
              <ShoppingBag size={28} />
              ApexStore
            </div>

            <h1 className="text-5xl font-bold leading-tight mt-16">
              Step Into <br /> Premium Style
            </h1>

            <p className="text-gray-300 mt-6 text-lg max-w-md">
              Discover the latest sneaker collections with modern fashion &
              comfort. Join the next generation shoes marketplace.
            </p>
          </div>

          <div className="flex gap-4">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
              alt="shoe"
              className="w-40 h-40 object-cover rounded-2xl"
            />

            <img
              src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?q=80&w=1200&auto=format&fit=crop"
              alt="shoe"
              className="w-40 h-40 object-cover rounded-2xl mt-10"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-white flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <div className="lg:hidden flex items-center justify-center gap-2 text-3xl font-bold mb-10">
              <ShoppingBag size={30} />
              SoleStyle
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              {isLogin ? "Welcome Back " : "Create Account"}
            </h2>

            <p className="text-gray-500 mt-3">
              {isLogin
                ? "Login to continue shopping premium sneakers."
                : "Sign up and explore trendy shoe collections."}
            </p>

            <form className="mt-8 space-y-5">
              {!isLogin && (
                <div className="relative">
                  <User
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-black transition"
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-black transition"
                />
              </div>

              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full border border-gray-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-black transition"
                />
              </div>

              {isLogin && (
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-gray-600">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <button
                    type="button"
                    className="text-black font-semibold hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-900 transition text-white py-4 rounded-2xl font-semibold text-lg"
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            <div className="mt-6">
              <button className="w-full border border-gray-200 py-4 rounded-2xl font-medium hover:bg-gray-50 transition">
                Continue with Google
              </button>
            </div>

            <p className="text-center text-gray-500 mt-8">
              {isLogin
                ? "Don't have an account?"
                : "Already have an account?"}

              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-2 text-black font-semibold hover:underline"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}