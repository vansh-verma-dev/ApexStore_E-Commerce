import CategorySection from "../Components/Category";
import FAQ from "../Components/Faq";
import Footer from "../Components/Footer";
import HeroSection from "../Components/Hero";
import MobileNav from "../Components/MobileNav";
import Navbar, { SearchBar } from "../Components/Navbar";
import Product from "../Components/Product";
 

import WhyChooseUs from "./WhyChooseUs";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MobileNav />
      <CategorySection />
      <Product />
      <WhyChooseUs />
      <FAQ />
      <Footer />
 
    </>
  );
}

export default Home;