import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center px-4 py-10 overflow-hidden">

      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#ff6b35]/20 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-orange-500/10 blur-[120px] rounded-full"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-[#111111]/90 border border-white/10 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl z-10">

        <div className="hidden lg:flex flex-col justify-between p-14 bg-gradient-to-br from-[#111111] to-[#1a1a1a]">

          <div>
            <h1 className="text-5xl font-extrabold text-[#ff6b35] tracking-wide">
              STEPZ
            </h1>

            <p className="mt-6 text-gray-400 text-lg leading-relaxed max-w-md">
              Premium sneakers crafted for comfort, style and everyday hustle.
            </p>
          </div>

          <div className="relative flex justify-center items-center">

            <div className="absolute w-72 h-72 bg-[#ff6b35]/20 blur-[100px] rounded-full"></div>

            <img
              src="https://placehold.co/600x500"
              alt="shoe"
              className="relative z-10 w-full max-w-md object-contain drop-shadow-[0_20px_40px_rgba(255,107,53,0.3)] hover:scale-105 transition duration-500"
            />

          </div>

          <div className="grid grid-cols-3 gap-4 mt-10">

            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-[#ff6b35] font-bold text-xl">10K+</h3>
              <p className="text-gray-400 text-sm mt-1">Happy Users</p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-[#ff6b35] font-bold text-xl">500+</h3>
              <p className="text-gray-400 text-sm mt-1">Premium Shoes</p>
            </div>

            <div className="bg-black/30 border border-white/10 rounded-2xl p-4 text-center">
              <h3 className="text-[#ff6b35] font-bold text-xl">4.9★</h3>
              <p className="text-gray-400 text-sm mt-1">Top Rated</p>
            </div>

          </div>

        </div>

        <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">

          <div className="flex bg-[#1a1a1a] border border-white/10 rounded-2xl p-1 mb-10 w-full max-w-xs">

            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 rounded-xl font-semibold transition duration-300 ${
                isLogin
                  ? "bg-[#ff6b35] text-white"
                  : "text-gray-400"
              }`}
            >
              Login
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 rounded-xl font-semibold transition duration-300 ${
                !isLogin
                  ? "bg-[#ff6b35] text-white"
                  : "text-gray-400"
              }`}
            >
              Sign Up
            </button>

          </div>

          <div className="mb-8">

            <h2 className="text-4xl font-bold">
              {isLogin ? "Welcome Back" : "Create Account"}
            </h2>

            <p className="text-gray-400 mt-3">
              {isLogin
                ? "Login to continue your shopping experience."
                : "Create your account and explore premium collections."}
            </p>

          </div>

          <form className="space-y-5">

            {!isLogin && (
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#ff6b35] outline-none px-5 py-4 rounded-2xl transition duration-300"
                />
              </div>
            )}

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#ff6b35] outline-none px-5 py-4 rounded-2xl transition duration-300"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-2 block">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#ff6b35] outline-none px-5 py-4 rounded-2xl transition duration-300"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="text-sm text-gray-400 mb-2 block">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm your password"
                  className="w-full bg-[#1a1a1a] border border-white/10 focus:border-[#ff6b35] outline-none px-5 py-4 rounded-2xl transition duration-300"
                />
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">

                <label className="flex items-center gap-2 text-gray-400">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-[#ff6b35] hover:underline"
                >
                  Forgot Password?
                </button>

              </div>
            )}

            <button
              type="submit"
              className="w-full bg-[#ff6b35] hover:bg-orange-600 transition duration-300 py-4 rounded-2xl font-semibold text-lg shadow-lg shadow-orange-500/20"
            >
              {isLogin ? "Login Now" : "Create Account"}
            </button>

          </form>

          <div className="flex items-center gap-4 my-8">

            <div className="flex-1 h-[1px] bg-white/10"></div>

            <span className="text-gray-500 text-sm">
              OR CONTINUE WITH
            </span>

            <div className="flex-1 h-[1px] bg-white/10"></div>

          </div>

          <div className="grid grid-cols-2 gap-4">

            <button className="bg-[#1a1a1a] border border-white/10 hover:border-[#ff6b35] transition duration-300 rounded-2xl py-4 flex items-center justify-center gap-3">
              Google
            </button>

            <button className="bg-[#1a1a1a] border border-white/10 hover:border-[#ff6b35] transition duration-300 rounded-2xl py-4 flex items-center justify-center gap-3">
              Apple
            </button>

          </div>

          <p className="text-center text-gray-500 text-sm mt-10">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-[#ff6b35] ml-2 hover:underline"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}