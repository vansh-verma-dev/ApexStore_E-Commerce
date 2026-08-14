import { Link } from "react-router-dom";
import { FaLocationDot, FaCartShopping } from "react-icons/fa6";
import { FaSearch, FaRegUserCircle } from "react-icons/fa";

// Categories ko array me rakh diya - ab yahi se aage dropdown/menu bhi banega
const categories = [
    { label: "All", value: "all" },
    { label: "Men", value: "men" },
    { label: "Women", value: "women" },
    { label: "Kids", value: "kids" },
    { label: "Shoes", value: "shoes" },
    { label: "Electronics", value: "electronics" },
    { label: "Beauty", value: "beauty" },
];

function Navbar() {
    const UserLocation = "Meerut";

    return (
        <nav className="w-full bg-slate-900 text-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 px-4 py-3">

                {/* Logo */}
                <Link to={"/"} className="shrink-0">
                    <h1 className="text-2xl font-bold tracking-wide text-orange-400 hover:text-orange-300 transition-colors">
                        AplexStore
                    </h1>
                </Link>

                {/* Location - mobile pe hidden */}
                <Link
                    to={"#"}
                    className="hidden md:flex flex-col leading-tight text-sm hover:text-orange-300 transition-colors"
                >
                    <p className="text-gray-300">
                        Delivering to <span className="font-medium text-white">{UserLocation}</span>
                    </p>
                    <p className="flex items-center gap-1 font-semibold">
                        <FaLocationDot className="text-orange-400" /> Update Location
                    </p>
                </Link>

                {/* Search Box - mobile pe hidden */}
                <div className="hidden md:flex flex-1 max-w-2xl items-center rounded-md overflow-hidden bg-white">
                    <select
                        name="category"
                        id="category"
                        className="h-10 px-2 bg-gray-100 text-gray-700 text-sm outline-none border-r border-gray-300 cursor-pointer"
                    >
                        {categories.map((cat) => (
                            <option key={cat.value} value={cat.value}>
                                {cat.label}
                            </option>
                        ))}
                    </select>

                    <input
                        type="search"
                        placeholder="Search your items..."
                        className="flex-1 h-10 px-3 text-gray-800 text-sm outline-none"
                    />

                    <button className="h-10 px-4 bg-orange-400 hover:bg-orange-500 transition-colors flex items-center justify-center">
                        <FaSearch className="text-slate-900" />
                    </button>
                </div>

                {/* Cart & Account - hamesha visible */}
                <div className="flex items-center gap-5">
                    <Link to={"#"} className="flex flex-col items-center text-xs hover:text-orange-300 transition-colors">
                        <FaCartShopping className="text-xl" />
                        <span>Cart</span>
                    </Link>

                    <Link to={"#"} className="flex flex-col items-center text-xs hover:text-orange-300 transition-colors">
                        <FaRegUserCircle className="text-xl" />
                        <span>Account</span>
                    </Link>
                </div>
            </div>

            {/* Categories bar - niche wali strip, mobile me bhi dikhegi (scrollable) */}
            <div className="bg-slate-800 overflow-x-auto">
                <div className="max-w-7xl mx-auto flex gap-6 px-4 py-2 text-sm whitespace-nowrap">
                    {categories.map((cat) => (
                        <Link
                            key={cat.value}
                            to={`/category/${cat.value}`}
                            className="text-gray-300 hover:text-orange-400 transition-colors"
                        >
                            {cat.label}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;