import { useEffect, useState } from "react";

const images = [
    {
        id: "1",
        images: "https://i.pinimg.com/1200x/d2/df/1e/d2df1ea12c596b86317e0b47f44ea27c.jpg"
    },
    {
        id: "2",
        images: "https://i.pinimg.com/1200x/4e/3e/d1/4e3ed1555d1c546f923e3aba24083f3d.jpg"
    }, {
        id: "3",
        images: "https://i.pinimg.com/1200x/38/ed/86/38ed8643f788ed7205927a4b10bcada9.jpg"
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
        <section className="hero_section w-full h-[25vh] overflow-hidden bg-red-600 sm:h-[80vh]">
            <img src={images[current].images} alt=""
                className="h-full w-full"
            />
        </section>
    )
}
export default HeroSection;