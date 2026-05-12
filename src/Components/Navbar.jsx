import { IoSearch } from "react-icons/io5";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

function Navbar() {
    return (
        <section
            className="Navbar sticky top-0 z-50 w-full h-[80px] bg-white shadow-md px-6 flex items-center justify-between"
            id="Navbar"
        >

            
            <div className="logo" id="logo">
                <h1 className="text-2xl font-bold cursor-pointer tracking-wide">
                    ApexStore
                </h1>
            </div>

            <div
                className="navLinks hidden lg:block"
                id="navLinks"
            >
                <ul className="flex items-center gap-8 font-medium">

                    <li>
                        <a
                            href="#"
                            className="hover:text-purple-600 transition-all duration-300"
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a
                            href="#"
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
                            href="#"
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


            <div
                className="navbtn flex items-center gap-4 text-[20px]"
                id="navbtn"
            >

                <a href="#" >
                    <button
                        className="CartBtn w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <FaCartShopping />
                    </button>
                </a>


                <a href="#">
                    <button
                        className="wishlistbtn w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center hover:bg-red-500 hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <FaHeart />
                    </button>
                </a>


                <a href="#">
                    <button
                        className="ProfileBtn w-[45px] h-[45px] rounded-full border border-zinc-300 flex items-center justify-center  hover:bg-black  hover:text-white transition-all duration-300 cursor-pointer"
                    >
                        <CgProfile />
                    </button>
                </a>

            </div>

        </section>
    );
}

export default Navbar;

export function SearchInput() {
    <div className="search_bar hidden lg:flex items-center gap-3 border border-zinc-300 rounded-full px-5 py-3 w-[350px] bg-zinc-50" id="search_bar">
        <input
            type="search"
            placeholder="What are you looking for?"
            className="w-full bg-transparent outline-none text-sm"
        />

        <IoSearch className="text-2xl cursor-pointer text-zinc-600 hover:text-black transition-all duration-300" />
    </div>
}