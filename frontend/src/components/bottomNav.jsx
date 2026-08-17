import { NavLink } from "react-router-dom";
import { IoHomeOutline, IoCartOutline } from "react-icons/io5";
import { FaRegCircleUser } from "react-icons/fa6";
import { TbCategory } from "react-icons/tb";

function BottomNav() {
    const navItems = [
        {
            name: "Home",
            path: "/",
            icon: IoHomeOutline,
        },
        {
            name: "Products",
            path: "/Products",
            icon: TbCategory,
        },
        {
            name: "Cart",
            path: "/Cart",
            icon: IoCartOutline,
        },
        {
            name: "Account",
            path: "/Account",
            icon: FaRegCircleUser,
        },
    ];

    return (
        <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-100 bg-white/95 px-3 py-2 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] backdrop-blur md:hidden">

            <div className="mx-auto flex max-w-md items-center justify-around">

                {navItems.map((item) => {
                    const Icon = item.icon;

                    return (
                        <NavLink
                            key={item.path}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex min-w-16 flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-medium transition-all ${
                                    isActive
                                        ? "text-black"
                                        : "text-gray-400"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    <Icon
                                        className={`text-[23px] transition-transform ${
                                            isActive ? "scale-110" : ""
                                        }`}
                                    />

                                    <span>{item.name}</span>
                                </>
                            )}
                        </NavLink>
                    );
                })}

            </div>
        </nav>
    );
}

export default BottomNav;