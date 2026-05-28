import Navbar from "./Navbar";
import shoesData from "../Data/Product.js";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

// ICONS
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { MdSecurity } from "react-icons/md";
import { RiExchangeBoxLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Footer from "./Footer.jsx";
import MobileNav from "./MobileNav.jsx";

function ViewProducts() {
  const navigate = useNavigate();
  const { id } = useParams();

  // FIND PRODUCT
  const singleProduct = shoesData.find(
    (item) => item.id == id
  );

  // STATES
  const [activeSize, setActiveSize] = useState(8);
  const [mainImg, setMainImg] = useState("");
  const [quantity, setQuantity] = useState(1);

  // SCROLL REF
  const scrollRef = useRef();

  // SET MAIN IMAGE
  useEffect(() => {
    if (singleProduct) {
      setMainImg(singleProduct.image);
    }
  }, [singleProduct]);

  // PRODUCT NOT FOUND
  if (!singleProduct) {
    return (
      <div className="text-center mt-20 text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  // DELIVERY DATE
  const today = new Date();

  today.setDate(today.getDate() + 7);

  const deliveryDate = today.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  // ALL IMAGES
  const allImages = [
    singleProduct.image,
    ...singleProduct.showImags,
  ].filter((img) => img);

  // SCROLL FUNCTION
  const scroll = (direction) => {

    if (direction === "left") {
      scrollRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    } else {
      scrollRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };
  const handelCart = () => {

    const productarr = {
      id: singleProduct.id,
      name: singleProduct.name,
      price: singleProduct.price,
      image: singleProduct.image,
      size: activeSize,
      quantity: quantity,
    };

    navigate("/cart", {
      state: productarr,
    });
  };
  return (
    <>
  
      <section className="w-full grid lg:grid-cols-2 grid-cols-1 gap-10 px-4 sm:px-8 lg:px-14 py-8">

        {/* LEFT SIDE */}
        <div className="w-full">

          {/* MAIN IMAGE */}
          <div className="w-full h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative group">

            <img
              src={mainImg}
              alt={singleProduct.name}
              className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
            />

            {/* WISHLIST */}
            <button className="absolute top-4 right-4 bg-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-black hover:text-white transition-all">

              <FiHeart className="text-xl" />

            </button>

          </div>

          {/* THUMBNAILS */}
          <div className="relative mt-5">

            {/* LEFT BTN */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
            >
              <ChevronLeft />
            </button>


            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-12   py-1"
            >

              {allImages.map((img, ind) => (

                <img
                  key={ind}
                  src={img}
                  alt=""
                  onClick={() => setMainImg(img)}
                  className={`min-w-[95px] h-[95px] rounded-2xl object-cover border-2 cursor-pointer p-1 transition-all duration-300

                  ${mainImg === img
                      ? "border-black scale-105"
                      : "border-gray-300 hover:border-black"
                    }
                  `}
                />

              ))}

            </div>


            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center"
            >
              <ChevronRight />
            </button>

          </div>

        </div>


        <div className="w-full flex flex-col gap-5">


          <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
            {singleProduct.brand}
          </span>


          <div>

            <h1 className="text-4xl font-bold text-gray-900">
              {name}
            </h1>

            <p className="text-gray-500 mt-2 text-lg">
              {singleProduct.tagline}
            </p>

          </div>


          <div className="flex items-center gap-4 flex-wrap">

            <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-1 rounded-full">

              <span className="font-semibold">
                {singleProduct.rating}
              </span>

              <FaStar />

            </div>

            <p className="text-gray-500">
              {singleProduct.Review}+ Reviews
            </p>

            <span className="text-green-600 font-medium">
              In Stock
            </span>

          </div>


          <div className="flex items-center gap-4 flex-wrap">

            <h2 className="flex items-center text-4xl font-bold text-black">

              <LiaRupeeSignSolid />
 
             {singleProduct.price}

            </h2>

            <p className="flex items-center text-gray-400 line-through text-xl">

              <LiaRupeeSignSolid />

              {singleProduct.oldPrice}

            </p>

            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">

              {singleProduct.discount}% OFF

            </span>

          </div>

          <p className="text-sm text-gray-500">
            Inclusive of all taxes (GST included)
          </p>


          <div className="border-t border-b py-5">

            <h2 className="text-xl font-semibold mb-3">
              Product Description
            </h2>

            <p className="text-gray-600 leading-7">
              Experience unmatched comfort and premium street-style
              fashion with the {singleProduct.name}. Designed for
              performance, flexibility, and all-day comfort.
              Perfect for casual wear, gym, running, and lifestyle use.
            </p>

          </div>


          <div>

            <h2 className="text-xl font-semibold mb-4">
              Select Size
            </h2>

            <div className="flex gap-3 flex-wrap">

              {[6, 7, 8, 9].map((size) => (

                <button
                  key={size}
                  onClick={() => setActiveSize(size)}
                  className={`w-16 h-14 rounded-xl border text-lg font-medium transition-all duration-300

                  ${activeSize === size
                      ? "bg-black text-white border-black"
                      : "border-gray-300 hover:bg-black hover:text-white"
                    }
                  `}
                >
                  {size}
                </button>

              ))}

            </div>

          </div>


          <div>

            <h2 className="text-xl font-semibold mb-3">
              Quantity
            </h2>

            <div className="flex items-center gap-4">

              <button
                onClick={() =>
                  quantity > 1 && setQuantity(quantity - 1)
                }
                className="w-12 h-12 border rounded-xl text-2xl"
              >
                -
              </button>

              <span className="text-xl font-semibold">
                {quantity}
              </span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
                className="w-12 h-12 border rounded-xl text-2xl"
              >
                +
              </button>

            </div>

          </div>

          <div className="flex gap-4 mt-4 flex">

            <button className="bg-black text-white px-10 p-2 h-[60px]  w-[200px] rounded-2xl flex items-center  hover:bg-gray-800 transition-all duration-300"
              onClick={handelCart}
            >

              <IoCartOutline className="text-2xl" />


              Add To Cart

            </button>

            <button className="border-2 border-black w-[140px] rounded-2xl hover:bg-black hover:text-white transition-all duration-300">

              Buy Now

            </button>

          </div>
          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-4">

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">

              <BsTruck className="text-2xl" />

              <div>

                <h3 className="font-semibold">
                  Free Delivery
                </h3>

                <p className="text-sm text-gray-500">
                  Delivered by {deliveryDate}
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">

              <FaClockRotateLeft className="text-2xl" />

              <div>

                <h3 className="font-semibold">
                  Easy Returns
                </h3>

                <p className="text-sm text-gray-500">
                  15 Day Return Policy
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">

              <MdSecurity className="text-2xl" />

              <div>

                <h3 className="font-semibold">
                  Secure Payment
                </h3>

                <p className="text-sm text-gray-500">
                  100% Secure Checkout
                </p>

              </div>

            </div>

            <div className="flex items-center gap-3 bg-gray-100 p-4 rounded-2xl">

              <RiExchangeBoxLine className="text-2xl" />

              <div>

                <h3 className="font-semibold">
                  Exchange Available
                </h3>

                <p className="text-sm text-gray-500">
                  Size Exchange Support
                </p>

              </div>

            </div>

          </div>
        </div>
      </section>

      <Footer />
      <MobileNav />
    </>
  );
}

export default ViewProducts;