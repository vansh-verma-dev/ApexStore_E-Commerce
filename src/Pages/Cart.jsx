import Footer from "../Components/Footer";
import MobileNav from "../Components/MobileNav";
import Navbar from "../Components/Navbar";
import { FaShoppingBag } from "react-icons/fa";


function CartPage() {
    return (
        <>
            <Navbar />
            <div className="w-full p-5  flex flex-col  items-center ">
                <FaShoppingBag
                    className="text-gray-400  text-7xl mt-20"
                />
                <button className="text-2xl text-white bg-blue-600 p-5 rounded-2xl mt-5">Explore Your Products</button>
            </div>
            <Footer />
            <MobileNav />
        </>
    )
}
export default CartPage;