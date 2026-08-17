import productData from "../data/product.json";

function ProductPage() {
    return (
        <div className="min-h-screen bg-white px-6 py-10 md:px-10 lg:px-16">

            {/* Header */}
            <div className="mb-10">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-gray-400">
                    UrbanCart
                </p>

                <div className="flex items-end justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
                            Our Products
                        </h1>
                        <p className="mt-2 text-sm text-gray-500">
                            Discover products made for your everyday style.
                        </p>
                    </div>

                    <span className="hidden rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 sm:block">
                        {productData.totalProducts} Products
                    </span>
                </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                {productData.products.map((product) => (
                    <div
                        key={product.id}
                        className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                    >

                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden bg-gray-100">

                            <img
                                src={product.images}
                                alt={product.name}
                                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                            />

                            {/* Badge */}
                            {product.category && (
                                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold capitalize text-gray-700 shadow-sm backdrop-blur">
                                    {product.category}
                                </span>
                            )}

                            {/* Wishlist */}
                            <button
                                className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-gray-600 shadow-sm backdrop-blur transition hover:bg-black hover:text-white"
                            >
                                ♡
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-5">

                            <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                                UrbanCart
                            </p>

                            <h2 className="truncate text-lg font-semibold text-gray-900">
                                {product.name}
                            </h2>

                            {/* Rating */}
                            <div className="mt-2 flex items-center gap-1">
                                <span className="text-sm text-yellow-500">
                                    ★★★★★
                                </span>

                                <span className="text-xs text-gray-400">
                                    (4.8)
                                </span>
                            </div>

                            {/* Price + Button */}
                            <div className="mt-4 flex items-center justify-between">

                                <div>
                                    <span className="text-xl font-bold text-gray-900">
                                        ₹{product.price}
                                    </span>
                                </div>

                                <button
                                    className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-gray-800 active:scale-95"
                                >
                                    Add to Cart
                                </button>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default ProductPage;