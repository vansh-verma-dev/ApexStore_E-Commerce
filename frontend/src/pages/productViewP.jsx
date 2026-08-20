import { IoIosArrowForward, IoIosStar, IoIosStarOutline } from "react-icons/io";
import { MdOutlineShoppingCart, MdOutlineShield } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaPlus, FaMinus, FaHeart, FaRegHeart } from "react-icons/fa6";
import { BsTruck, BsArrowRepeat } from "react-icons/bs";

import ProductData from "../data/product.json";
import { useParams } from "react-router-dom";
import { useState } from "react";
import MobileNavbar from "../components/mobileTopNav";
import BottomNav from "../components/bottomNav";

 
function ProductView() {
    const { id } = useParams();

    const product = ProductData.products.find(
        (items) => items.id === Number(id)
    );

    const [selectImage, setSelectImage] = useState(0);
    const [selectedSize, setSelectedSize] = useState(null);
    const [count, setCount] = useState(1);
    const [saved, setSaved] = useState(false);

    if (!product) {
        return (
            <div className="flex h-[60vh] w-full items-center justify-center bg-[#FAF7F2]">
                <p className=" text-2xl text-[#201A17]">Product not found.</p>
            </div>
        );
    }

    const savings = product.price - product.discountedPrice;
    const discountPct = Math.round((savings / product.price) * 100);
    const stock = product.stock ?? 10;
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    const decrement = () => setCount((c) => Math.max(1, c - 1));
    const increment = () => setCount((c) => Math.min(stock, c + 1));

    return (
        <div className="w-full bg-[#FAF7F2]   text-[#201A17]">
            <div className="mx-auto max-w-6xl px-5 py-6 sm:px-8">

                {/* Breadcrumb */}
                <nav className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] tracking-wide text-[#8a7f76]">
                    <span>Shop</span>
                    <IoIosArrowForward className="text-[10px]" />
                    <span>{product.brand}</span>
                    <IoIosArrowForward className="text-[10px]" />
                    <span className="text-[#201A17]">{product.name}</span>
                </nav>

                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.05fr)_1fr] lg:gap-14">

                    {/* ---------- Gallery ---------- */}
                    <div className="lg:sticky lg:top-6 lg:self-start">
                        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-md bg-[#EFEAE1]">
                            {product.isNew && (
                                <span className="absolute left-4 top-4 z-10 rounded-full bg-[#201A17] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-[#FAF7F2]">
                                    New arrival
                                </span>
                            )}
                            {discountPct > 0 && (
                                <span className="absolute right-4 top-4 z-10 rounded-full bg-[#7A2E2E] px-3 py-1 text-[11px] font-medium text-[#FAF7F2]">
                                    &minus;{discountPct}%
                                </span>
                            )}
                            <img
                                src={product.images[selectImage]}
                                alt={`${product.brand} ${product.name}`}
                                className="h-full w-full object-cover transition-opacity duration-300"
                            />
                        </div>

                        {/* Swatch rail */}
                        <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                            {product.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setSelectImage(i)}
                                    aria-label={`Show image ${i + 1}`}
                                    aria-pressed={selectImage === i}
                                    className={`relative h-20 w-16 shrink-0 overflow-hidden rounded-sm border transition ${
                                        selectImage === i
                                            ? "border-[#201A17]"
                                            : "border-[#e3dcd1] hover:border-[#b8ab9c]"
                                    }`}
                                >
                                    <img
                                        src={img}
                                        alt=""
                                        className="h-full w-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* ---------- Details ---------- */}
                    <div className="flex flex-col">

                        <div className="flex items-center gap-2 text-[13px] font-medium uppercase tracking-[0.14em] text-[#8a7f76]">
                            <span>{product.brand}</span>
                            <span className="text-[#d8cfc2]">/</span>
                            <span>{product.subCategory}</span>
                        </div>

                        <h1 className="mt-2   text-4xl leading-tight text-[#201A17] sm:text-5xl">
                            {product.name}
                        </h1>

                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            <span className="flex text-[#7A2E2E]">
                                {Array.from({ length: 5 }).map((_, i) => {
                                    if (i < fullStars) return <IoIosStar key={i} />;
                                    if (i === fullStars && hasHalfStar)
                                        return <IoIosStar key={i} className="opacity-50" />;
                                    return <IoIosStarOutline key={i} />;
                                })}
                            </span>
                            <span className="text-sm text-[#5c534c]">
                                {product.rating} &middot; {product.reviewCount} reviews
                            </span>
                            <span className="rounded-full bg-[#EFEAE1] px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-[#5c534c]">
                                Featured
                            </span>
                        </div>

                        <div className="my-6 h-px bg-[#e3dcd1]" />

                        <div className="flex flex-wrap items-baseline gap-3">
                            <span className="flex items-center   text-3xl">
                                <LiaRupeeSignSolid />{product.discountedPrice}
                            </span>
                            {savings > 0 && (
                                <>
                                    <span className="flex items-center text-lg text-[#b8ab9c] line-through">
                                        <LiaRupeeSignSolid />{product.price}
                                    </span>
                                    <span className="flex items-center rounded-full bg-[#F1E8DC] px-2.5 py-0.5 text-[12px] font-medium text-[#7A2E2E]">
                                        Save <LiaRupeeSignSolid />{savings}
                                    </span>
                                </>
                            )}
                        </div>

                        <p className="mt-4 max-w-md text-[15px] leading-relaxed text-[#5c534c]">
                            {product.description}
                        </p>

                        {/* Size */}
                        {product.availableSizes?.length > 0 && (
                            <div className="mt-7">
                                <p className="mb-2.5 text-[13px] font-medium uppercase tracking-[0.1em] text-[#8a7f76]">
                                    Size {selectedSize && <span className="text-[#201A17]">&middot; {selectedSize}</span>}
                                </p>
                                <div className="flex flex-wrap gap-2.5">
                                    {product.availableSizes.map((size, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedSize(size)}
                                            className={`flex h-11 w-11 items-center justify-center rounded-full border text-sm font-medium transition ${
                                                selectedSize === size
                                                    ? "border-[#201A17] bg-[#201A17] text-[#FAF7F2]"
                                                    : "border-[#d8cfc2] text-[#201A17] hover:border-[#201A17]"
                                            }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity + actions */}
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <div className="flex items-center rounded-full border border-[#d8cfc2]">
                                <button
                                    onClick={decrement}
                                    disabled={count <= 1}
                                    aria-label="Decrease quantity"
                                    className="flex h-11 w-11 items-center justify-center text-[#5c534c] disabled:opacity-30"
                                >
                                    <FaMinus className="text-xs" />
                                </button>
                                <span className="w-8 text-center text-sm font-medium">{count}</span>
                                <button
                                    onClick={increment}
                                    disabled={count >= stock}
                                    aria-label="Increase quantity"
                                    className="flex h-11 w-11 items-center justify-center text-[#5c534c] disabled:opacity-30"
                                >
                                    <FaPlus className="text-xs" />
                                </button>
                            </div>

                            <button className="h-11 flex-1 min-w-[160px] rounded-full bg-[#201A17] px-6 text-sm font-medium uppercase tracking-[0.08em] text-[#FAF7F2] transition hover:bg-[#3a2f2a]">
                                Buy now
                            </button>

                            <button
                                aria-label="Add to cart"
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfc2] text-[#201A17] transition hover:border-[#201A17]"
                            >
                                <MdOutlineShoppingCart className="text-lg" />
                            </button>

                            <button
                                onClick={() => setSaved((s) => !s)}
                                aria-label="Save to wishlist"
                                aria-pressed={saved}
                                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d8cfc2] text-[#7A2E2E] transition hover:border-[#7A2E2E]"
                            >
                                {saved ? <FaHeart /> : <FaRegHeart />}
                            </button>
                        </div>

                        {stock <= 5 && (
                            <p className="mt-3 text-[13px] font-medium text-[#7A2E2E]">
                                Only {stock} left in stock
                            </p>
                        )}

                        {/* Trust bar */}
                        <div className="mt-8 grid grid-cols-3 divide-x divide-dashed divide-[#d8cfc2] rounded-md border border-[#e3dcd1] bg-[#F4F0E8] py-5">
                            <span className="flex flex-col items-center gap-1.5 px-2 text-center text-[#5c534c]">
                                <BsTruck className="text-lg text-[#6B7A5E]" />
                                <p className="text-[12px] leading-tight">Free delivery</p>
                            </span>
                            <span className="flex flex-col items-center gap-1.5 px-2 text-center text-[#5c534c]">
                                <BsArrowRepeat className="text-lg text-[#6B7A5E]" />
                                <p className="text-[12px] leading-tight">7-day easy return</p>
                            </span>
                            <span className="flex flex-col items-center gap-1.5 px-2 text-center text-[#5c534c]">
                                <MdOutlineShield className="text-lg text-[#b8ab9c]" />
                                <p className="text-[12px] leading-tight">No warranty</p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <BottomNav/>
        </div>
    );
}

export default ProductView;