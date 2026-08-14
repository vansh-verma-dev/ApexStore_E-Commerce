import React from "react";

function BrandCarousel() {
  const brandLogo = [
    { name: "Puma", logo: "https://i.pinimg.com/1200x/f5/b3/a2/f5b3a28c81481481bc0dea0c765f98db.jpg" },
    { name: "Bata", logo: "https://images.meesho.com/images/marketing/1744636599446.webp" },
    { name: "Adidas", logo: "https://i.pinimg.com/736x/36/33/ef/3633ef8c89aaaab11ab8e8c21e2d7497.jpg" },
    { name: "Nike", logo: "https://i.pinimg.com/1200x/0a/d9/72/0ad9720df16e308f5a4678a0536256b2.jpg" },
    { name: "Gucci", logo: "https://i.pinimg.com/1200x/a8/35/a0/a835a0eb492cadf65928edc54d85858c.jpg" },
    { name: "Prada", logo: "https://i.pinimg.com/1200x/40/90/fc/4090fc915ab0bbfc98a09741a364d4db.jpg" },
  ];

 
  const duplicated = [...brandLogo, ...brandLogo];

  return (
    <div className="w-full overflow-hidden bg-white py-10">
     
      <div className="relative">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="group flex overflow-hidden">
          <div className="flex shrink-0 animate-marquee-rtl group-hover:[animation-play-state:paused]">
            {duplicated.map((brand, index) => (
              <div
                key={`${brand.name}-${index}`}
                className="mx-6 flex h-24 w-40 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm grayscale transition duration-300 hover:grayscale-0 hover:shadow-md"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-h-14 max-w-[70%] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandCarousel;
 