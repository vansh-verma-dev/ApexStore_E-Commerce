import CategorySection from "../Components/Category";
import FAQ from "../Components/Faq";
import Footer from "../Components/Footer";
import HeroSection from "../Components/Hero";
import MobileNav from "../Components/MobileNav";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <MobileNav />
      <CategorySection />
      <Product />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;