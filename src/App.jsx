import CategorySection from "./Components/Category";
import FAQ from "./Components/Faq";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Product from "./Components/Product";

 function App(){
  return(
    <>
   <Navbar/>
   <HeroSection/>
   <CategorySection/>
   <Product/>
   <FAQ/>
   <Footer/>
    </>
  )
 }
 export default App;