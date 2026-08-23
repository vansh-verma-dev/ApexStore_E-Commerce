import { useNavigate } from "react-router-dom";
import productData from "../data/product.json";


function Products() {

    const navigate = useNavigate();

    const handelProductView = (id) => {
        navigate(`/ProductView/${id}`);
    };


    return (
        <div className="min-h-screen bg-white px-3 py-6 sm:px-10 md:px-10 lg:px-16">

            {/* Header */}
            <div className="mb-6 sm:mb-10">
                <p className="mb-2 text-xs sm:text-sm font-medium uppercase tracking-widest text-gray-400">
                    UrbanCart
                </p>

                <div className="flex items-end justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
                            Our Products
                        </h1>
                        <p className="mt-1 text-xs text-gray-500 sm:mt-2 sm:text-sm">
                            Discover products made for your everyday style.
                        </p>
                    </div>

                    <span className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 sm:block">
                        {productData.totalProducts} Products
                    </span>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">

                {productData.products.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-2xl"
                    >

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100">

                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Badge */}
                            {product.category && (
                                <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-0.5 text-[10px] font-semibold capitalize text-gray-700 shadow-sm backdrop-blur sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
                                    {product.category}
                                </span>
                            )}

                            {/* Wishlist */}
                            <button
                                className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-sm text-gray-600 shadow-sm backdrop-blur transition hover:bg-black hover:text-white sm:right-3 sm:top-3 sm:h-9 sm:w-9 sm:text-base"
                            >
                                ♡
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-3 sm:p-5">

                            <p className="mb-1 text-[10px] font-medium uppercase tracking-wider text-gray-400 sm:text-xs">
                                UrbanCart
                            </p>

                            <h2 className="truncate text-sm font-semibold text-gray-900 sm:text-lg">
                                {product.name}
                            </h2>

                            {/* Rating */}
                            <div className="mt-1 flex items-center gap-1 sm:mt-2">
                                <span className="text-xs text-yellow-500 sm:text-sm">
                                    ★★★★★
                                </span>

                                <span className="text-[10px] text-gray-400 sm:text-xs">
                                    (4.8)
                                </span>
                            </div>

                            {/* Price + Button */}
                            <div className="mt-2 flex items-center justify-between sm:mt-4">

                                <div>
                                    <span className="text-base font-bold text-gray-900 sm:text-xl">
                                        ₹{product.price}
                                    </span>
                                </div>

                                <button
                                    onClick={() => handelProductView(product.id)}
                                    className="rounded-lg bg-black px-2.5 py-1.5 text-[11px] font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-sm"
                                >
                                    View
                                </button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Products;