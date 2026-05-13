import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { FaHeart, FaShoppingBag, FaShoppingCart } from "react-icons/fa";

function MobileNav() {
    return (
        <div className="bg-white h-[70px] w-full  sm:hidden flex fixed bottom-0 z-50 justify-around items-center shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">

            <a href="#HomePage"> <div className="w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
                <IoHomeOutline />
            </div>
            </a>

            <div className="w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
                <FaHeart />
            </div>

            <a href="#Product"> <div className="w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
                <FaShoppingBag />
            </div></a>

            <div className="w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
                <FaShoppingCart />
            </div>

            <div className="w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer text-lg">
                <IoSettingsOutline />
            </div>

        </div>
    );
}

export default MobileNav;