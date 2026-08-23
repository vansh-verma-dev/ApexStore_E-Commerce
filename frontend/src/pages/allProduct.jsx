import { useState } from "react";
import BottomNav from "../components/bottomNav";
import MobileNavbar from "../components/mobileTopNav";
import Navbar from "../components/navbar";
import Products from "./product";

const category = [
    {name: "All" , img: ""},
    { name: "Men", img: "" },
    { name: "Women", img: "" },
    { name: "Kids", img: "" },
    { name: "Footwear", img: "" },
    { name: "Headphones", img: "https://i.pinimg.com/736x/ad/22/fb/ad22fbced8453477150a3076cd49267f.jpg" },
    { name: "Phone", img: "" },
];

function ProductPage() {
    const [active, setActive] = useState("All");

    return (
        <div>
            <Navbar />
            <BottomNav />
            <MobileNavbar />

            <div className="flex gap-1 px-2 py-4 overflow-x-auto scrollbar-hide">
                {category.map((item, i) => {
                    const isActive = active === item.name;
                    return (
                        <button
                            key={i}
                            onClick={() => setActive(item.name)}
                            className="flex flex-col items-center gap-1.5 flex-shrink-0 w-20"
                        >
                            <div
                                className={`h-16 w-16 rounded-full overflow-hidden flex items-center justify-center transition-all
                                ${isActive ? "border-2 border-black" : "border border-gray-200"}`}
                            >
                                {item.img ? (
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="h-full w-full object-cover"
                                    />
                                ) : (
                                    <div className="h-full w-full bg-gray-100 flex items-center justify-center text-lg font-semibold text-gray-400">
                                        {item.name.charAt(0)}
                                    </div>
                                )}
                            </div>
                            <span
                                className={`text-xs text-center truncate w-full ${
                                    isActive ? "font-semibold text-black" : "text-gray-500"
                                }`}
                            >
                                {item.name}
                            </span>
                        </button>
                    );
                })}
            </div>
            <Products/>
        </div>
    );
}

export default ProductPage;