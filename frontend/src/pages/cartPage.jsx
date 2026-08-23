import { useState } from "react";
import { FaRupeeSign, FaArrowRight ,FaArrowLeft } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { TbTag, TbTruck } from "react-icons/tb";

import Footer from "../components/footer";
import BottomNav from "../components/bottomNav";
import { Link } from "react-router-dom";

const rawItems = [
    {
        "id": 1001,
        "sku": "PUM-LOA-1001",
        "name": "Puma Penny Loafer",
        "brand": "Puma",
        "category": "Footwear",
        "subCategory": "Loafers",
        "description": "Puma Penny Loafer Loafers - premium quality loafers from Puma, designed for everyday comfort and durability. Ideal for casual and active use.",
        "price": 4499,
        "discountPercent": 20,
        "discountedPrice": 3599,
        "currency": "INR",
        "rating": 3.7,
        "reviewCount": 851,
        "inStock": true,
        "stockQuantity": 173,
        "availableSizes": ["6", "7", "8", "9", "10", "11"],
        "availableColors": ["Khaki", "White", "Maroon"],
        "images": [
            "https://i.pinimg.com/1200x/97/01/3d/97013de8f52e70f1dd23183ab4479dc7.jpg",
            "https://i.pinimg.com/1200x/97/01/3d/97013de8f52e70f1dd23183ab4479dc7.jpg",
            "https://i.pinimg.com/736x/f3/c6/88/f3c6883a105fb06145e63a4e09c0d974.jpg"
        ],
        "isFeatured": true,
        "isNewArrival": true,
        "freeDelivery": true,
        "returnPolicy": "7 days easy return",
        "warranty": "No warranty",
        "tags": ["footwear", "loafers", "puma"]
    },
    {
        "id": 1002,
        "sku": "PUM-LOA-1001-2",
        "name": "Puma Penny Loafer",
        "brand": "Puma",
        "category": "Footwear",
        "subCategory": "Loafers",
        "description": "Puma Penny Loafer Loafers - premium quality loafers from Puma, designed for everyday comfort and durability. Ideal for casual and active use.",
        "price": 4499,
        "discountPercent": 20,
        "discountedPrice": 3599,
        "currency": "INR",
        "rating": 3.7,
        "reviewCount": 851,
        "inStock": true,
        "stockQuantity": 173,
        "availableSizes": ["6", "7", "8", "9", "10", "11"],
        "availableColors": ["Khaki", "White", "Maroon"],
        "images": [
            "https://i.pinimg.com/1200x/97/01/3d/97013de8f52e70f1dd23183ab4479dc7.jpg",
            "https://i.pinimg.com/1200x/97/01/3d/97013de8f52e70f1dd23183ab4479dc7.jpg",
            "https://i.pinimg.com/736x/f3/c6/88/f3c6883a105fb06145e63a4e09c0d974.jpg"
        ],
        "isFeatured": true,
        "isNewArrival": true,
        "freeDelivery": true,
        "returnPolicy": "7 days easy return",
        "warranty": "No warranty",
        "tags": ["footwear", "loafers", "puma"]
    },
];

const FREE_SHIPPING_LIMIT = 3000;

function CartPage() {
    const [items, setItems] = useState(
        rawItems.map((it, i) => ({ ...it, cartId: i, qty: 1, size: it.availableSizes[2] }))
    );

    const updateQty = (cartId, delta) => {
        setItems((prev) =>
            prev.map((it) =>
                it.cartId === cartId ? { ...it, qty: Math.max(1, it.qty + delta) } : it
            )
        );
    };

    const removeItem = (cartId) => {
        setItems((prev) => prev.filter((it) => it.cartId !== cartId));
    };

    const subtotal = items.reduce((sum, it) => sum + it.discountedPrice * it.qty, 0);
    const mrpTotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const savings = mrpTotal - subtotal;
    const shipping = subtotal >= FREE_SHIPPING_LIMIT || subtotal === 0 ? 0 : 149;
    const total = subtotal + shipping;
    const remaining = Math.max(0, FREE_SHIPPING_LIMIT - subtotal);
    const progress = Math.min(100, (subtotal / FREE_SHIPPING_LIMIT) * 100);

    return (
        <div className="bg-neutral-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
                {/* Header */}
                <div className="flex items-baseline   justify-between border-b border-neutral-200 pb-5 mb-8">
                   <Link to={"/"}>

               
                    <h1 className="text-3xl flex gap-0.5 items-center  font-semibold text-neutral-900 tracking-tight">
                        <FaArrowLeft
                        className="sm:hidden block"
                        /> Your Cart
                    </h1>
                   </Link>
                    <span className="text-sm text-neutral-500">
                        {items.length} {items.length === 1 ? "item" : "items"}
                    </span>
                </div>

                {items.length === 0 ? (
                    <div className="text-center py-24">
                        <p className="text-xl font-medium text-neutral-800 mb-1">Your cart is empty</p>
                        <p className="text-sm text-neutral-500">Add something you love and it'll show up here.</p>
                    </div>
                ) : (
                    <div className="flex flex-col lg:flex-row gap-6 items-start">
                        {/* --left-side-- */}
                        <div className="w-full lg:w-[64%] space-y-4">
                            {items.map((item) => (
                                <div
                                    key={item.cartId}
                                    className="bg-white rounded-2xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow p-4 flex gap-4"
                                >
                                    <img
                                        src={item.images[2]}
                                        alt={item.name}
                                        className="w-24 h-24 sm:w-28 sm:h-28 object-cover rounded-xl border border-neutral-200 flex-shrink-0"
                                    />

                                    <div className="flex flex-col justify-between flex-1 min-w-0">
                                        <div className="flex justify-between gap-3">
                                            <div className="min-w-0">
                                                <h2 className="font-medium text-base sm:text-lg text-neutral-900 truncate">
                                                    {item.name}
                                                </h2>
                                                <p className="text-xs text-neutral-500 mt-0.5">{item.category}</p>
                                            </div>

                                            <button
                                                onClick={() => removeItem(item.cartId)}
                                                aria-label="Remove item"
                                                className="flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                                            >
                                                <IoCloseSharp size={18} />
                                            </button>
                                        </div>

                                        <p className="text-xs text-neutral-500 mt-1">
                                            Size <span className="text-neutral-800 font-medium">{item.size}</span>
                                        </p>

                                        <div className="flex items-end justify-between mt-3">
                                            <div className="flex items-center gap-1.5">
                                                <span className="flex items-center text-neutral-400 line-through text-sm">
                                                    <FaRupeeSign size={11} />
                                                    {item.price}
                                                </span>
                                                <span className="flex items-center text-neutral-900 font-semibold text-lg">
                                                    <FaRupeeSign size={13} />
                                                    {item.discountedPrice}
                                                </span>
                                                <span className="text-[11px] font-medium text-green-600 bg-green-50 px-1.5 py-0.5 rounded">
                                                    {item.discountPercent}% off
                                                </span>
                                            </div>

                                            <div className="flex items-center border border-neutral-300 rounded-full overflow-hidden">
                                                <button
                                                    onClick={() => updateQty(item.cartId, -1)}
                                                    className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                                                >
                                                    −
                                                </button>
                                                <span className="w-7 text-center text-sm text-neutral-900">
                                                    {item.qty}
                                                </span>
                                                <button
                                                    onClick={() => updateQty(item.cartId, 1)}
                                                    className="w-7 h-7 flex items-center justify-center text-neutral-600 hover:bg-neutral-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* ---right-side-- */}
                        <div className="w-full lg:w-[36%] bg-white rounded-2xl border border-neutral-200 shadow-sm p-6 lg:sticky lg:top-6">
                            <div className="flex items-center gap-2 text-xs font-medium text-neutral-600 mb-2">
                                <TbTruck size={16} />
                                {remaining > 0 ? (
                                    <p>
                                        Add <span className="text-neutral-900">₹{remaining}</span> more for free shipping
                                    </p>
                                ) : (
                                    <p className="text-neutral-900">You've unlocked free shipping 🎉</p>
                                )}
                            </div>
                            <div className="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden mb-6">
                                <div
                                    className="h-full bg-neutral-900 rounded-full transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            <h2 className="text-xl font-semibold text-neutral-900 mb-4">Order Summary</h2>

                            <div className="space-y-2.5 text-sm">
                                <div className="flex justify-between text-neutral-500">
                                    <p>Subtotal</p>
                                    <span className="flex items-center gap-0.5 text-neutral-900 font-medium">
                                        <FaRupeeSign size={11} />
                                        {subtotal.toLocaleString("en-IN")}
                                    </span>
                                </div>

                                {savings > 0 && (
                                    <div className="flex justify-between text-neutral-500">
                                        <p>You saved</p>
                                        <span className="flex items-center gap-0.5 text-green-600 font-medium">
                                            <FaRupeeSign size={11} />
                                            {savings.toLocaleString("en-IN")}
                                        </span>
                                    </div>
                                )}

                                <div className="flex justify-between text-neutral-500">
                                    <p>Shipping</p>
                                    <span className="text-neutral-900 font-medium">
                                        {shipping === 0 ? "Free" : `₹${shipping}`}
                                    </span>
                                </div>
                            </div>

                            <div className="flex gap-2 mt-5">
                                <div className="flex items-center flex-1 border border-neutral-300 rounded-lg px-3 text-neutral-500 focus-within:border-neutral-900 transition-colors">
                                    <TbTag size={16} className="flex-shrink-0" />
                                    <input
                                        type="text"
                                        placeholder="Promo code"
                                        className="w-full py-2.5 px-2 text-sm outline-none text-neutral-900 placeholder:text-neutral-400"
                                    />
                                </div>
                                <button className="px-4 rounded-lg border border-neutral-300 text-sm font-medium text-neutral-700 hover:border-neutral-900 hover:text-neutral-900 transition-colors">
                                    Apply
                                </button>
                            </div>

                            <hr className="my-5 border-neutral-200" />

                            <div className="flex justify-between items-baseline">
                                <p className="text-base font-medium text-neutral-900">Total</p>
                                <span className="flex items-center gap-0.5 text-2xl font-semibold text-neutral-900">
                                    <FaRupeeSign size={17} />
                                    {total.toLocaleString("en-IN")}
                                </span>
                            </div>

                            <button className="w-full mt-6 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl py-3.5 flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-colors">
                                Checkout
                                <FaArrowRight size={13} />
                            </button>

                            <p className="text-center text-neutral-400 text-xs mt-3">
                                Taxes calculated at checkout
                            </p>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
            <BottomNav/>
        </div>
    );
}

export default CartPage;