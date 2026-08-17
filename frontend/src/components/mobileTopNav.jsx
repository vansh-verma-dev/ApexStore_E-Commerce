import { IoLocationSharp, IoCartOutline,  IoSearch, } from "react-icons/io5";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";

function MobileNavbar() {
    return (
        <div className="block sm:hidden w-full bg-white px-4 py-3 sticky top-0 left-0 z-50">
 
            <div className="flex items-center justify-between">

               
                <div className="flex items-center gap-2">
                    <IoLocationSharp className="text-2xl text-orange-500" />

                    <div>
                        <div className="flex items-center gap-1">
                            <h1 className="text-[13px] font-semibold text-gray-800">
                                Meerut, Uttar Pradesh
                            </h1>

                            <IoIosArrowDown className="text-sm text-gray-500" />
                        </div>

                        <p className="text-[11px] text-gray-400">
                            Delivering to your location
                        </p>
                    </div>
                </div>

            
                <div className="flex items-center gap-4">

                    <Link
                        to="/notification"
                        className="text-gray-700 transition active:scale-90"
                    >
                        <FaRegBell className="text-xl" />
                    </Link>

                    <Link
                        to="/cart"
                        className="text-gray-700 transition active:scale-90"
                    >
                        <IoCartOutline className="text-2xl" />
                    </Link>

                </div>
            </div>
 
            <div className="mt-4 flex items-center gap-2">

                <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-3 focus-within:border-gray-400">

                    <IoSearch className="text-xl text-gray-400" />

                    <input
                        type="search"
                        placeholder="Search for products..."
                        className="w-full bg-transparent text-sm text-gray-700 outline-none placeholder:text-gray-400"
                    />

                </div>

                <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700 active:scale-95">
                    <HiOutlineAdjustmentsHorizontal className="text-xl" />
                </button>

            </div>

        </div>
    );
}

export default MobileNavbar;