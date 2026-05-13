import { useEffect, useState } from "react";

const images = [
    {
        id: "1",
        images: "https://i.pinimg.com/1200x/95/b4/fb/95b4fb0657d2839f48ff9196729abda0.jpg"
    },
    {
        id: "2",
        images: "https://i.pinimg.com/1200x/46/7b/4f/467b4fb2447d6a851a4a9d02c27626e2.jpg"
    }, {
        id: "3",
        images: "https://i.pinimg.com/1200x/f6/ab/2d/f6ab2dc49b5faeaffb7a445d59d2c065.jpg"
    }
]

function HeroSection() {
    const [current, setCurrent] = useState(2);
useEffect(()=>{
    const slider = setInterval(() => {
        setCurrent((prev)=>(prev + 1)% images.length)
    }, 3000);

    return()=> clearInterval(slider);
},[]);

    return (
        <section className="hero_section w-[90vw] h-[20vh]  sm:w-full  rounded-2xl sm:m-0 sm:rounded-none  overflow-hidden bg-red-600 sm:h-[80vh]">
            <img src={images[current].images} alt=""
                className="h-full w-full"
            />
        </section>
    )
}
export default HeroSection;