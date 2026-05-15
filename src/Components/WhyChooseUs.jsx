import { motion } from "framer-motion";
import {
  FaShippingFast,
  FaShieldAlt,
  FaHeadset,
  FaUndoAlt,
} from "react-icons/fa";

  function WhyChooseUs() {
  const data = [
    {
      title: "Lightning Fast Delivery",
      desc: "Get your sneakers delivered in record time with real-time tracking.",
      icon: <FaShippingFast />,
    },
    {
      title: "Premium Quality",
      desc: "Every pair is handpicked for comfort, durability, and style.",
      icon: <FaShieldAlt />,
    },
    {
      title: "24/7 Support",
      desc: "Our support team is always available for your shopping needs.",
      icon: <FaHeadset />,
    },
    {
      title: "Easy Returns",
      desc: "Hassle-free returns and smooth refund process for every order.",
      icon: <FaUndoAlt />,
    },
  ];

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden py-24 px-5">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[180px]"></div>

      <div className="absolute bottom-[-250px] right-[-200px] w-[500px] h-[500px] bg-cyan-500/30 rounded-full blur-[180px]"></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-cyan-400 tracking-[8px] uppercase text-sm font-semibold">
            Why Choose Apex
          </p>

          <h1 className="text-white text-5xl md:text-7xl font-black leading-tight mt-6">
            Experience The <br /> Future Of Sneakers
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 text-lg leading-8">
            Built for sneaker lovers who demand premium quality, futuristic design,
            and an unforgettable shopping experience.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mt-24">

          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[35px] bg-white/10 backdrop-blur-xl border border-white/10 p-8 hover:-translate-y-5 transition-all duration-700 shadow-[0_0_40px_rgba(255,255,255,0.08)]"
            >

              {/* HOVER LIGHT */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-cyan-400/10 to-pink-500/10"></div>

              {/* BIG NUMBER */}
              <h1 className="absolute top-5 right-6 text-[90px] font-black text-white/5">
                0{index + 1}
              </h1>

              {/* ICON */}
              <div className="relative z-10 w-[85px] h-[85px] rounded-[28px] bg-gradient-to-br from-cyan-400 to-blue-500 text-white text-3xl flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.4)] group-hover:rotate-12 transition-all duration-700">
                {item.icon}
              </div>

              {/* TITLE */}
              <h2 className="relative z-10 text-white text-2xl font-bold mt-10 leading-snug">
                {item.title}
              </h2>

              {/* DESC */}
              <p className="relative z-10 text-gray-400 mt-5 leading-8 text-[15px]">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button className="relative z-10 mt-10 px-7 py-3 rounded-full bg-white/10 border border-white/10 text-white hover:bg-white hover:text-black transition-all duration-500 font-semibold backdrop-blur-lg">
                Learn More
              </button>

            </motion.div>
          ))}

        </div>

        {/* BIG SHOWCASE CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative mt-28 rounded-[45px] overflow-hidden min-h-[500px] shadow-[0_0_100px_rgba(255,255,255,0.08)]"
        >

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400"
            alt="Sneaker"
            className="absolute inset-0 w-full h-full object-cover scale-110 hover:scale-100 transition-all duration-[3000ms]"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent"></div>

          {/* CONTENT */}
          <div className="relative z-10 h-full flex items-center px-8 md:px-20 py-20">

            <div className="max-w-2xl">
              <p className="text-cyan-400 uppercase tracking-[6px] text-sm font-semibold">
                New Collection 2026
              </p>

              <h1 className="text-white text-5xl md:text-8xl font-black leading-none mt-6">
                WEAR THE <br /> HYPE
              </h1>

              <p className="text-gray-300 mt-8 text-lg leading-8 max-w-xl">
                Discover futuristic sneakers crafted with premium materials,
                unmatched comfort, and street-ready style.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">

                <button className="px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-cyan-400 transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.4)]">
                  Shop Now
                </button>

                <button className="px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-500">
                  Explore More
                </button>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;