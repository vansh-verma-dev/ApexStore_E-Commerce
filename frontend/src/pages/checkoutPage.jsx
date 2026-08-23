import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";
import MobileNavbar from "../components/mobileTopNav";
import BottomNav from "../components/bottomNav";

// TODO: replace this with your actual cart state (Context / Redux / localStorage)
const cartItems = [
    {
        id: 1,
        name: "Classic Denim Jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=300",
        price: 1899,
        qty: 1,
        size: "M",
    },
    {
        id: 2,
        name: "Urban Sneakers",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300",
        price: 2499,
        qty: 2,
        size: "9",
    },
];

function Checkout() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        pincode: "",
    });

    const [payment, setPayment] = useState("cod");
    const [placing, setPlacing] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = subtotal > 1999 ? 0 : 99;
    const total = subtotal + shipping;

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setPlacing(true);
        // TODO: call your order API here
        setTimeout(() => {
            setPlacing(false);
            navigate("/OrderSuccess");
        }, 1200);
    };

    return (
      <>
      <Navbar/>
      <MobileNavbar/>
      <BottomNav/>
        <div className="min-h-screen bg-white px-3 py-6 sm:px-10 sm:py-10 md:px-10 lg:px-16">

            {/* Header */}
            <div className="mb-6 sm:mb-10">
                <p className="mb-2 text-xs font-medium uppercase tracking-widest text-gray-400 sm:text-sm">
                    UrbanCart
                </p>
                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                    Checkout
                </h1>
                <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                    Almost there — just fill in your details.
                </p>
            </div>

            <form
                onSubmit={handlePlaceOrder}
                className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-10"
            >

                {/* Left: Shipping + Payment */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Shipping details */}
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                        <h2 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
                            Shipping Details
                        </h2>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <input
                                type="text"
                                name="fullName"
                                required
                                value={form.fullName}
                                onChange={handleChange}
                                placeholder="Full Name"
                                className="col-span-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black sm:col-span-2"
                            />

                            <input
                                type="tel"
                                name="phone"
                                required
                                value={form.phone}
                                onChange={handleChange}
                                placeholder="Phone Number"
                                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black sm:col-span-2"
                            />

                            <textarea
                                name="address"
                                required
                                value={form.address}
                                onChange={handleChange}
                                placeholder="Address (House no, Street, Area)"
                                rows={2}
                                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black sm:col-span-2"
                            />

                            <input
                                type="text"
                                name="city"
                                required
                                value={form.city}
                                onChange={handleChange}
                                placeholder="City"
                                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                            />

                            <input
                                type="text"
                                name="state"
                                required
                                value={form.state}
                                onChange={handleChange}
                                placeholder="State"
                                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black"
                            />

                            <input
                                type="text"
                                name="pincode"
                                required
                                value={form.pincode}
                                onChange={handleChange}
                                placeholder="Pincode"
                                className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-black sm:col-span-2"
                            />
                        </div>
                    </div>

                    {/* Payment method */}
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6">
                        <h2 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
                            Payment Method
                        </h2>

                        <div className="space-y-3">
                            {[
                                { id: "cod", label: "Cash on Delivery" },
                                { id: "upi", label: "UPI" },
                                { id: "card", label: "Credit / Debit Card" },
                            ].map((option) => (
                                <label
                                    key={option.id}
                                    className={`flex items-center gap-3 rounded-lg border px-4 py-3 text-sm cursor-pointer transition ${
                                        payment === option.id
                                            ? "border-black bg-gray-50"
                                            : "border-gray-200"
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name="payment"
                                        checked={payment === option.id}
                                        onChange={() => setPayment(option.id)}
                                        className="h-4 w-4 accent-black"
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right: Order Summary */}
                <div className="lg:col-span-1">
                    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm sm:rounded-2xl sm:p-6 lg:sticky lg:top-6">
                        <h2 className="mb-4 text-base font-semibold text-gray-900 sm:text-lg">
                            Order Summary
                        </h2>

                        <div className="space-y-4 max-h-64 overflow-y-auto pr-1">
                            {cartItems.map((item) => (
                                <div key={item.id} className="flex items-center gap-3">
                                    <div className="h-14 w-14 flex-shrink-0 overflow-hidden rounded-lg bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="truncate text-sm font-medium text-gray-900">
                                            {item.name}
                                        </p>
                                        <p className="text-xs text-gray-400">
                                            Size: {item.size} · Qty: {item.qty}
                                        </p>
                                    </div>
                                    <span className="text-sm font-semibold text-gray-900">
                                        ₹{item.price * item.qty}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-sm">
                            <div className="flex justify-between text-gray-500">
                                <span>Subtotal</span>
                                <span>₹{subtotal}</span>
                            </div>
                            <div className="flex justify-between text-gray-500">
                                <span>Shipping</span>
                                <span>{shipping === 0 ? "Free" : `₹${shipping}`}</span>
                            </div>
                            <div className="flex justify-between border-t border-gray-100 pt-2 text-base font-bold text-gray-900">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={placing}
                            className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95 disabled:opacity-60"
                        >
                            {placing ? "Placing Order..." : `Place Order · ₹${total}`}
                        </button>
                    </div>
                </div>
            </form>
        </div>
      </>
    );
}

export default Checkout;