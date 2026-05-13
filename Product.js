const shoesData = [
  // Nike
  {
    id: 1,
    brand: "Nike",
    name: "Nike Air Max Pulse",
    price: 12999,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 2,
    brand: "Nike",
    name: "Nike Revolution 7",
    price: 5999,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 3,
    brand: "Nike",
    name: "Nike Dunk Low",
    price: 8999,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
  },
  {
    id: 4,
    brand: "Nike",
    name: "Nike Zoom Fly",
    price: 14999,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
  },

  // Puma
  {
    id: 5,
    brand: "Puma",
    name: "Puma RS-X",
    price: 7999,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
  },
  {
    id: 6,
    brand: "Puma",
    name: "Puma Velocity Nitro",
    price: 9999,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
  },
  {
    id: 7,
    brand: "Puma",
    name: "Puma Smash V2",
    price: 4999,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 8,
    brand: "Puma",
    name: "Puma Future Rider",
    price: 6999,
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
  },

  // Adidas
  {
    id: 9,
    brand: "Adidas",
    name: "Adidas Ultraboost",
    price: 15999,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  },
  {
    id: 10,
    brand: "Adidas",
    name: "Adidas Superstar",
    price: 8999,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 11,
    brand: "Adidas",
    name: "Adidas NMD R1",
    price: 13999,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
  {
    id: 12,
    brand: "Adidas",
    name: "Adidas Run Falcon",
    price: 5999,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1605348532760-6753d2c43329",
  },

  // Campus
  {
    id: 13,
    brand: "Campus",
    name: "Campus Oxyfit",
    price: 2499,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
  },
  {
    id: 14,
    brand: "Campus",
    name: "Campus North Plus",
    price: 1999,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
  },
  {
    id: 15,
    brand: "Campus",
    name: "Campus Camp Zane",
    price: 2299,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },
  {
    id: 16,
    brand: "Campus",
    name: "Campus Terminator",
    price: 2799,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  },

  // Red Tape
  {
    id: 17,
    brand: "Red Tape",
    name: "Red Tape Athleisure",
    price: 3499,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
  },
  {
    id: 18,
    brand: "Red Tape",
    name: "Red Tape Sports Knit",
    price: 3999,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
  },
  {
    id: 19,
    brand: "Red Tape",
    name: "Red Tape Walking Pro",
    price: 2999,
    category: "Walking",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 20,
    brand: "Red Tape",
    name: "Red Tape Street Style",
    price: 4599,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
  },

  // New Balance
  {
    id: 21,
    brand: "New Balance",
    name: "NB 574 Classic",
    price: 8999,
    category: "Lifestyle",
    image:
      "https://images.unsplash.com/photo-1549298916-b41d501d3772",
  },
  {
    id: 22,
    brand: "New Balance",
    name: "NB Fresh Foam",
    price: 11999,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2",
  },
  {
    id: 23,
    brand: "New Balance",
    name: "NB 327",
    price: 9999,
    category: "Sneakers",
    image:
      "https://images.unsplash.com/photo-1518002171953-a080ee817e1f",
  },
  {
    id: 24,
    brand: "New Balance",
    name: "NB FuelCell",
    price: 13999,
    category: "Sports",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
  },

  // Skechers
  {
    id: 25,
    brand: "Skechers",
    name: "Skechers Go Walk",
    price: 4999,
    category: "Walking",
    image:
      "https://images.unsplash.com/photo-1608667508764-33cf0726b13a",
  },
  {
    id: 26,
    brand: "Skechers",
    name: "Skechers Arch Fit",
    price: 6999,
    category: "Comfort",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
  },
  {
    id: 27,
    brand: "Skechers",
    name: "Skechers Max Cushion",
    price: 8499,
    category: "Running",
    image:
      "https://images.unsplash.com/photo-1543508282-6319a3e2621f",
  },
  {
    id: 28,
    brand: "Skechers",
    name: "Skechers Street Wear",
    price: 5499,
    category: "Casual",
    image:
      "https://images.unsplash.com/photo-1514989940723-e8e51635b782",
  },
];

export default shoesData;