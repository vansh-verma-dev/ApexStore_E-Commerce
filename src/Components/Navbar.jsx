import { IoSearch } from "react-icons/io5";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

function Navbar() {
    return (
        <section
            className="Navbar sticky top-0 z-50 w-full h-[80px] bg-white shadow-md px-6 flex items-center justify-between"
            id="Navbar"
        >

            <Link to="/">
                <div className="logo" id="logo">
                    <img src="./logo.png" alt=""
                        className="h-15"
                    />
                </div>
            </Link>

            <div
                className="navLinks hidden lg:block"
                id="navLinks"
            >
                <ul className="flex items-center gap-8 font-medium">

                    <li>
                        <Link
                            to="/"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            Home
                        </Link>
                    </li>

                    <li>
                        <a
                            href="#Product"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            Shop
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            Offer
                        </a>
                    </li>

                    <li>
                        <a
                            href="#About"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            Contact
                        </a>
                    </li>

                </ul>
            </div>

            {/* {<SearchBar />} */}
            <div
                className="navbtn sm:flex   items-center gap-4 text-[20px]    "
                id="navbtn"
            >

                <Link to="/Cart">
                    <button
                        className="CartBtn w-[45px] h-[45px] rounded-full border border-zinc-300 sm:flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer 
                        hidden"
                    >
                        <FaCartShopping />
                    </button>
                </Link>




                <a href="#">
                    <button
                        className="wishlistbtn w-[45px] h-[45px] rounded-full border border-zinc-300 sm:flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer hidden"
                    >
                        <FaHeart />
                    </button>
                </a>

                <Link to="/AuthPage">
                    <button
                        className="ProfileBtn w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <CgProfile />
                    </button>
                </Link>

            </div>

        </section>
    );
}

export default Navbar;


export const SearchBar = () => {
    return (
        <div className="hidden md:flex items-center w-[320px] h-[48px] bg-white border border-gray-300 rounded-full px-4 shadow-sm hover:shadow-md transition-all duration-300">

            <input
                type="search"
                placeholder="Search for shoes..."
                className="w-full bg-transparent outline-none text-gray-700 placeholder:text-gray-400"
            />

            <button className="w-[36px] h-[36px] rounded-full  text-black flex items-center justify-center hover:bg-gray-800 transition-all duration-300">

                <IoSearch className="text-lg" />

            </button>

        </div>
    );
};