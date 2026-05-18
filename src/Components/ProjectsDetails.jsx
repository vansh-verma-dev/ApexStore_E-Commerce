import Navbar from "./Navbar";
import shoesData from "../Data/Product.js";
import { useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { useState } from "react";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

function ViewProducts() {
  const { id } = useParams();

  const [activeSize, setActiveSize] = useState(8);

  // Product Find
  const singleProduct = shoesData.find(
    (item) => item.id == id
  );

  // Agar product na mile
  if (!singleProduct) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  // Next 7 Day Delivery Date
  const today = new Date();

  today.setDate(today.getDate() + 7);

  const deliveryDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <>
      <Navbar />

      <section className="w-full grid sm:grid-cols-2 grid-cols-1 gap-8 px-4 sm:px-8 py-6 overflow-hidden">

        {/* LEFT SIDE */}
        <div className="w-full">

          <div className="w-full h-[450px] bg-gray-100 rounded-2xl overflow-hidden">

            <img
              src={singleProduct.image}
              alt={singleProduct.name}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-300"
            />

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="w-full flex flex-col gap-4">

          {/* Product Name */}
          <div>

            <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800">
              {singleProduct.name}
            </h1>

            <p className="text-gray-500 mt-1">
              {singleProduct.tagline}
            </p>

          </div>

          {/* Price */}
          <div className="flex items-center gap-3 flex-wrap">

            <h2 className="flex items-center text-3xl font-bold text-black">
              <LiaRupeeSignSolid />
              {singleProduct.price}
            </h2>

            <p className="flex items-center text-gray-400 line-through text-lg">
              <LiaRupeeSignSolid />
              {singleProduct.oldPrice}
            </p>

            <span className="text-green-600 font-semibold">
              {singleProduct.discount}% OFF
            </span>

          </div>

          <p className="text-gray-400 text-sm">
            Inclusive of all taxes (GST included)
          </p>

          {/* Rating */}
          <div className="flex items-center gap-3">

            <span className="flex items-center gap-1 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">

              {singleProduct.rating}

              <FaStar className="text-xs" />

            </span>

            <p className="text-gray-500">
              {singleProduct.Review} Reviews
            </p>

          </div>

          {/* Sizes */}
          <div className="mt-2">

            <h2 className="text-xl font-semibold text-gray-700 mb-3">
              Available Sizes
            </h2>

            <div className="flex gap-3 flex-wrap">

              {[6, 7, 8, 9].map((size) => (

                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-16 h-14 rounded-xl border text-lg font-medium transition-all duration-300

                  ${
                    activeSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 text-gray-700 hover:bg-black hover:text-white"
                  }
                  `}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>

          {/* Stock */}
          <p className="text-green-600 font-semibold text-lg">
            In Stock
          </p>

          {/* Delivery */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="flex items-center gap-2 text-gray-600">

              <BsTruck className="text-2xl" />

              <p>
                Delivered by {deliveryDate}
              </p>

            </div>

            <div className="flex items-center gap-2 text-gray-600">

              <FaClockRotateLeft className="text-2xl" />

              <p>Easy 15 Day Returns</p>

            </div>

          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-4 flex-wrap">

            <button className="bg-black text-white px-8 h-[52px] rounded-xl flex items-center gap-2 hover:bg-gray-800 transition-all duration-300">

              <IoCartOutline className="text-xl" />

              Add To Cart

            </button>

            <button className="border-2 border-black px-8 h-[52px] rounded-xl hover:bg-black hover:text-white transition-all duration-300">

              Buy Now

            </button>

          </div>

        </div>

      </section>
    </>
  );
}

export default ViewProducts;