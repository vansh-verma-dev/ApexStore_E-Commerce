const shoesData = [
  // Nike
  {
    id: 1,
    brand: "Nike",
    name: "Nike Air Max Pulse",
    tagline: "Feel the Beat, Own the Street",
    price: 12999,
    oldPrice: 14399,
    discount: 10,
    rating: 4.8,
    Review: 1218,
    image: "https://i.pinimg.com/1200x/8b/3b/fa/8b3bfaf6d9a9ad6cc09c45f3d1b06395.jpg",
    showImags: [
      "https://i.pinimg.com/1200x/43/4b/e5/434be5531c0ee032c31e54c357fea64f.jpg",
      "https://i.pinimg.com/1200x/3d/e8/a1/3de8a1cf309d48a1b44b80bf03521587.jpg",
      "https://i.pinimg.com/736x/4f/86/da/4f86da37127de357e668e63be2f4f0bc.jpg",
      "https://i.pinimg.com/1200x/8b/3b/fa/8b3bfaf6d9a9ad6cc09c45f3d1b06395.jpg"
    ]
  },
  {
    id: 2,
    brand: "Nike",
    name: "Nike Revolution 7",
    tagline: "Every Step, A Revolution",
    price: 5999,
    oldPrice: 7499,
    discount: 20,
    rating: 4.5,
    Review: 874,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    showImags: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    ]
  },
  {
    id: 3,
    brand: "Nike",
    name: "Nike Dunk Low",
    tagline: "Classic Never Dies",
    price: 8999,
    oldPrice: 10999,
    discount: 18,
    rating: 4.7,
    Review: 2341,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    showImags: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },
  {
    id: 4,
    brand: "Nike",
    name: "Nike Zoom Fly",
    tagline: "Built for Speed, Born to Fly",
    price: 14999,
    oldPrice: 17999,
    discount: 17,
    rating: 4.9,
    Review: 563,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    showImags: [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    ]
  },

  // Puma
  {
    id: 5,
    brand: "Puma",
    name: "Puma RS-X",
    tagline: "Retro Vibes, Future Drive",
    price: 7999,
    oldPrice: 9499,
    discount: 16,
    rating: 4.4,
    Review: 432,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    showImags: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },
  {
    id: 6,
    brand: "Puma",
    name: "Puma Velocity Nitro",
    tagline: "Ignite Your Run",
    price: 9999,
    oldPrice: 12499,
    discount: 20,
    rating: 4.6,
    Review: 789,
    image: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
    showImags: [
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ]
  },
  {
    id: 7,
    brand: "Puma",
    name: "Puma Smash V2",
    tagline: "Simple. Clean. Iconic.",
    price: 4999,
    oldPrice: 5999,
    discount: 17,
    rating: 4.3,
    Review: 312,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    showImags: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ]
  },
  {
    id: 8,
    brand: "Puma",
    name: "Puma Future Rider",
    tagline: "Ride Into Tomorrow",
    price: 6999,
    oldPrice: 8499,
    discount: 18,
    rating: 4.5,
    Review: 521,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
    showImags: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ]
  },

  // Adidas
  {
    id: 9,
    brand: "Adidas",
    name: "Adidas Ultraboost",
    tagline: "Energy Returns with Every Stride",
    price: 15999,
    oldPrice: 19999,
    discount: 20,
    rating: 4.9,
    Review: 3102,
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    showImags: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ]
  },
  {
    id: 10,
    brand: "Adidas",
    name: "Adidas Superstar",
    tagline: "A Legend Never Fades",
    price: 8999,
    oldPrice: 10499,
    discount: 14,
    rating: 4.6,
    Review: 1876,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    showImags: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    ]
  },
  {
    id: 11,
    brand: "Adidas",
    name: "Adidas NMD R1",
    tagline: "Urban Explorer's Choice",
    price: 13999,
    oldPrice: 16999,
    discount: 18,
    rating: 4.8,
    Review: 941,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    showImags: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
    ]
  },
  {
    id: 12,
    brand: "Adidas",
    name: "Adidas Run Falcon",
    tagline: "Everyday Run, Extraordinary Feel",
    price: 5999,
    oldPrice: 6999,
    discount: 14,
    rating: 4.4,
    Review: 658,
    image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
    showImags: [
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },

  // Campus
  {
    id: 13,
    brand: "Campus",
    name: "Campus Oxyfit",
    tagline: "Breathe Easy, Move Free",
    price: 2499,
    oldPrice: 2999,
    discount: 17,
    rating: 4.2,
    Review: 287,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    showImags: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f"
    ]
  },
  {
    id: 14,
    brand: "Campus",
    name: "Campus North Plus",
    tagline: "Go Beyond Limits",
    price: 1999,
    oldPrice: 2499,
    discount: 20,
    rating: 4.1,
    Review: 193,
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
    showImags: [
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    ]
  },
  {
    id: 15,
    brand: "Campus",
    name: "Campus Camp Zane",
    tagline: "Zoned for Comfort",
    price: 2299,
    oldPrice: 2799,
    discount: 18,
    rating: 4.3,
    Review: 344,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    showImags: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    ]
  },
  {
    id: 16,
    brand: "Campus",
    name: "Campus Terminator",
    tagline: "Tough Roads, Zero Mercy",
    price: 2799,
    oldPrice: 3299,
    discount: 15,
    rating: 4.4,
    Review: 412,
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    showImags: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    ]
  },

  // Red Tape
  {
    id: 17,
    brand: "Red Tape",
    name: "Red Tape Athleisure",
    tagline: "From Gym to Street, Effortlessly",
    price: 3499,
    oldPrice: 4199,
    discount: 17,
    rating: 4.2,
    Review: 231,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    showImags: [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },
  {
    id: 18,
    brand: "Red Tape",
    name: "Red Tape Sports Knit",
    tagline: "Knitted for Champions",
    price: 3999,
    oldPrice: 4799,
    discount: 17,
    rating: 4.4,
    Review: 318,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    showImags: [
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a"
    ]
  },
  {
    id: 19,
    brand: "Red Tape",
    name: "Red Tape Walking Pro",
    tagline: "Miles Made Comfortable",
    price: 2999,
    oldPrice: 3699,
    discount: 19,
    rating: 4.1,
    Review: 176,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    showImags: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },
  {
    id: 20,
    brand: "Red Tape",
    name: "Red Tape Street Style",
    tagline: "Rule the Pavement",
    price: 4599,
    oldPrice: 5499,
    discount: 16,
    rating: 4.5,
    Review: 489,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
    showImags: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    ]
  },

  // New Balance
  {
    id: 21,
    brand: "New Balance",
    name: "NB 574 Classic",
    tagline: "Timeless. Trusted. True.",
    price: 8999,
    oldPrice: 10999,
    discount: 18,
    rating: 4.7,
    Review: 1043,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
    showImags: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    ]
  },
  {
    id: 22,
    brand: "New Balance",
    name: "NB Fresh Foam",
    tagline: "Cushioned Like a Cloud",
    price: 11999,
    oldPrice: 13999,
    discount: 14,
    rating: 4.8,
    Review: 762,
    image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
    showImags: [
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f"
    ]
  },
  {
    id: 23,
    brand: "New Balance",
    name: "NB 327",
    tagline: "Retro Soul, Modern Sole",
    price: 9999,
    oldPrice: 11999,
    discount: 17,
    rating: 4.6,
    Review: 634,
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
    showImags: [
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329"
    ]
  },
  {
    id: 24,
    brand: "New Balance",
    name: "NB FuelCell",
    tagline: "Powered by Science, Driven by You",
    price: 13999,
    oldPrice: 16499,
    discount: 15,
    rating: 4.9,
    Review: 528,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    showImags: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
      "https://images.unsplash.com/photo-1549298916-b41d501d3772"
    ]
  },

  // Skechers
  {
    id: 25,
    brand: "Skechers",
    name: "Skechers Go Walk",
    tagline: "Walk More, Worry Less",
    price: 4999,
    oldPrice: 5999,
    discount: 17,
    rating: 4.4,
    Review: 897,
    image: "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
    showImags: [
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5"
    ]
  },
  {
    id: 26,
    brand: "Skechers",
    name: "Skechers Arch Fit",
    tagline: "Engineered for Your Arch",
    price: 6999,
    oldPrice: 8499,
    discount: 18,
    rating: 4.5,
    Review: 1124,
    image: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
    showImags: [
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f"
    ]
  },
  {
    id: 27,
    brand: "Skechers",
    name: "Skechers Max Cushion",
    tagline: "Maximum Cushion, Zero Compromise",
    price: 8499,
    oldPrice: 9999,
    discount: 15,
    rating: 4.7,
    Review: 673,
    image: "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
    showImags: [
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782"
    ]
  },
  {
    id: 28,
    brand: "Skechers",
    name: "Skechers Street Wear",
    tagline: "Street Ready, All Day",
    price: 5499,
    oldPrice: 6499,
    discount: 15,
    rating: 4.3,
    Review: 445,
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
    showImags: [
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
    ]
  },
];

export default shoesData;