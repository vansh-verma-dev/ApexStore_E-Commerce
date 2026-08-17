 
import BottomNav from "../components/bottomNav";
import BrandCarousel from "../components/brand_carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import ProductPage from "./product";

function HomePage(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <BrandCarousel/>
        <ProductPage/>
        <Footer/>
        <BottomNav/>
        </>
    )
}
export default HomePage;