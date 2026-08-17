import { useEffect, useState } from "react";

function Hero() {
    const banner = [
        "https://i.pinimg.com/1200x/25/cb/3b/25cb3bfc1d033a5cb20fe4f2f7d299e0.jpg",
        "https://i.pinimg.com/1200x/fc/14/21/fc14211c14b1c62c65bd5995cfa3d6d7.jpg",
        "https://i.pinimg.com/1200x/a4/e8/7f/a4e87f77a37610077e81af5287f95163.jpg"
    ]

    const [current_Banner, setCurrent_Banner] = useState(0);

    useEffect(() => {
        const intervel = setInterval(() => {
            setCurrent_Banner((prev) =>
                prev === banner.length - 1 ? 0 : prev + 1
            );
        }, 3000)
        return () => clearInterval(intervel);
    }, []);

    return (
        <div className="sm:h-[70vh] h-[25vh] sm:m-0 m-4  ">
            <img src={banner[current_Banner]} alt="APEXSTORE"
                className="w-full h-full object-cover sm:rounded-none rounded-2xl"
            />
        </div>

        
    )
}
export default Hero;