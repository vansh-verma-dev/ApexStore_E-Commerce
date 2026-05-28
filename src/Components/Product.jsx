import { useEffect, useState } from "react";
import shoesData from "../Data/Product.js";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import CategorySection from "./Category.jsx";

function Product({ search }) {

  const [category, setCategory] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {

    let data = shoesData;

    // SEARCH
    if (search) {
      data = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.brand.toLowerCase().includes(search.toLowerCase())
      );
    }

    // CATEGORY FILTER (IMPORTANT FIX)
    if (category !== "all") {
      data = data.filter((item) =>
        item.brand.toLowerCase() === category.toLowerCase()
      );
    }

    setFilteredProducts(data);

  }, [search, category]);

  return (
    <div>

      {/* CATEGORY */}
      <CategorySection
        category={category}
        setCategory={setCategory}
      />

      {/* PRODUCTS */}
      <div className="product_section w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-10 bg-gray-100">

        {filteredProducts.map((item) => (

          <div key={item.id} className="product_card bg-white rounded-2xl overflow-hidden shadow-md">

            <img src={item.image} className="w-full h-[240px] object-cover" />

            <div className="p-4">

              <h2>{item.name}</h2>
              <p className="text-gray-500">{item.brand}</p>

              <div className="flex justify-between mt-2">
                <span className="font-bold">₹{item.price}</span>

                <div className="flex items-center gap-1">
                  <FaStar className="text-yellow-500" />
                  {item.rating}
                </div>
              </div>

              <Link to={`/product/${item.id}`}>
                <button className="w-full mt-3 bg-black text-white py-2 rounded-xl">
                  Add To Cart
                </button>
              </Link>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Product;