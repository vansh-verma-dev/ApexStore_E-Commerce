import { useEffect } from "react";
import shoesData from "../Data/Product.js";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

function Product() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="product_section w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 bg-gray-100 overflow-hidden" id="Product" >

            {shoesData.map((item) => (

                <div
                    key={item.id}
                    className="product_card bg-white rounded-2xl overflow-hidden  shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                    
                >

                    <div className="overflow-hidden bg-gray-200   rounded-xl">
                        <img
                            src={item.image}
                            alt={item.name}
                            loading="lazy"
                            className="w-full h-[240px] object-cover hover:scale-110 transition duration-500"
                        />
                    </div>

                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                            {item.name}
                        </h2>

                        <p className="text-sm text-gray-500 mb-3">
                            {item.brand}
                        </p>

                        <div className="flex items-center justify-between">

                            <h3 className="text-xl font-bold text-black">
                                ₹{item.price}
                            </h3>

                            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-lg">
                                <FaStar className="text-yellow-500 text-sm" />
                                <span className="text-sm font-medium">
                                    {item.rating}
                                </span>
                            </div>

                        </div>

                        <Link to={`/product/${item.id}`}>
                            <button className="w-full mt-4 bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                                Add To Cart
                            </button>
                        </Link>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Product;