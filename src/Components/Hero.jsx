
function HeroSection() {
    return (
 <section className="relative h-[20vh] w-[95%] ml-2.5 mt-2.5  sm:m-0  sm:rounded-none rounded-2xl sm:h-[80vh] sm:w-full overflow-hidden">

 
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/Hero_vedio.mp4" type="video/mp4" />
  </video>
  <div className="absolute inset-0 bg-black/50"></div>

 <div className="relative z-10 hidden sm:flex flex-col items-center justify-center h-full text-center px-5">

 
  <p className="uppercase tracking-[8px] text-gray-300 text-sm font-medium mb-5">
    Premium Sneaker Collection
  </p>

 
  <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] drop-shadow-2xl">
    WEAR THE <br />

    <span className="bg-gradient-to-r from-cyan-400 via-white to-pink-500 bg-clip-text text-transparent">
      FUTURE
    </span>
  </h1>

 
  <p className="text-gray-300 mt-8 max-w-2xl text-lg leading-8">
    Discover futuristic sneakers crafted for comfort,
    street fashion, and unmatched performance.
    Elevate your style with every step.
  </p>

  

</div>

</section>
    )
}
export default HeroSection;