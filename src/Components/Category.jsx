const shoeCategories = [
  {
    id: 1,
    name: "Nike",
    img: "https://i.pinimg.com/1200x/ed/45/2d/ed452d2d7335442e503eed35c36d0791.jpg",
  },
  {
    id: 2,
    name: "Adidas",
    img: "https://i.pinimg.com/736x/5c/37/cf/5c37cffa7dffc4ad9f05e34bdc9490fe.jpg",
  },
  {
    id: 3,
    name: "PUMA",
    img: "https://i.pinimg.com/736x/cd/69/fc/cd69fcf8f560a3504d698cdf836c8037.jpg",
  },
  {
    id: 4,
    name: "Campus",
    img: "https://i.pinimg.com/1200x/0e/7d/19/0e7d19a04dd482e56a436e69854943e2.jpg",
  },
  {
    id: 5,
    name:  "Red Tape",
    img: "https://i.pinimg.com/1200x/34/21/c7/3421c788618c4487a7b1e338cf03d273.jpg",
  },
  {
    id: 6,
    name: "Skechers",
    img: "https://i.pinimg.com/1200x/5e/3f/58/5e3f58769743848a8c20725f702b6ae8.jpg",
  },
    {
    id: 6,
    name: "New Balance",
    img: "https://i.pinimg.com/1200x/81/6f/c8/816fc87ca0ffff5dab1a91e051f2fcc3.jpg",
  },
];

function CategorySection() {
  return (
    <section className=" ctegory_section  w-full mt-0  py-6 h-auto  bg-white ">
      
      <div className="flex gap-4 bg-white overflow-x-auto px-4 scrollbar-hide justify-center  overflow-y-hidden "> 

        {shoeCategories.map((cat) => (
          <div
            key={cat.id}
            className=" min-w-[110px]  flex-shrink-0  rounded-xl p-3  flex flex-col items-center justify-center hover:scale-105 transition duration-300 cursor-pointer"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-16 h-16 rounded-full object-cover border"
            />

            <p className="text-sm mt-2 text-center font-medium">
              {cat.name}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default CategorySection;