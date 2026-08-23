 
import BottomNav from "../components/bottomNav";
import BrandCarousel from "../components/brand_carousel";
import Footer from "../components/footer";
import Hero from "../components/hero";
import MobileNavbar from "../components/mobileTopNav";
import Navbar from "../components/navbar";
import Products from "./product";


function HomePage(){
    return(
        <>
        <Navbar/>
        <MobileNavbar/>
        <Hero/>
        <BrandCarousel/>
        <Products/>
        <Footer/>
        <BottomNav/>
        </>
    )
}
export default HomePage;