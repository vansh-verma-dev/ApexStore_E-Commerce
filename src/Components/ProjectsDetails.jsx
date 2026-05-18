import Navbar from "./Navbar";
import shoesData from "../Data/Product.js";
import { button, h1 } from "framer-motion/client";
import { useParams } from "react-router-dom";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";
import { useState } from "react";


function ViewProducts() {
  const { id } = useParams();
  const [activeSize, setActiveSize] = useState(8);

  const singleProduct = shoesData.find((item) => item.id == id)

  return (
    <>
      <Navbar />
      <section className="w-full grid gap-0 sm:grid-cols-2 grid-cols-1 m-0 overflow-hidden">

        <div className="left  w-[50vw] p-2">
          <div className="w-[90%] h-[450px] overflow-hidden  ">
            <img src={singleProduct.image} alt=""
              className="object-cover w-full h-full rounded-lg ml-2"
            />
          </div>
        </div>

        <div className="right  p-3 ">
          <h1 className="text-3xl text-gray-400">{singleProduct.name}</h1>

          <div className="font-medium flex gap-2 items-center">
            <h1 className="flex items-center text-2xl"><LiaRupeeSignSolid />{singleProduct.price}</h1>
            <p className="flex  items-center text-gray-500 line-through"><LiaRupeeSignSolid />{singleProduct.oldPrice}</p>
            <p className="text-green-800">{singleProduct.discount}% off</p>
          </div>

          <div className="rating flex gap-2">
            <span className="flex  gap-0.5 items-center bg-green-400  text-white w-16 justify-center rounded-3xl p-1.5">{singleProduct.rating} <FaStar /></span>
            <p className="flex gap-1.5 items-center  text-gray-400 ">
              {singleProduct.Review} Reviews</p>
          </div>
          <h1 className="text-gray-400 text-2xl font-medium">Avaivable Size</h1>
          <div>
            {[6, 7, 8, 9].map((size) => (
              <button key={size}
                onClick={() => setActiveSize(size)}
                className={`p-2 border-2 ml-1.5 w-20 h-15 rounded-2xl mt-2 text-2xl transition-all duration-300

${activeSize === size
                    ? "bg-black text-white border-black"
                    : "text-gray-600 border-gray-300 hover:bg-black hover:text-white"
                  }
`}


              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
export default ViewProducts;