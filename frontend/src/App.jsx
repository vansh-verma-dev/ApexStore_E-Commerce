import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProductView from "./pages/productViewP";
import SigninPage from "./pages/signIn";
import SignupPage from "./pages/signup";
import CartPage from "./pages/cartPage";
import ProductPage from "./pages/allProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/ProductView/:id" element={<ProductView/>} />
      <Route path="/cartpage" element={<CartPage/>} />
      <Route path="/ProductPage" element={<ProductPage/>} />
      <Route path="/SigninPage" element={<SigninPage/>} />
      <Route path="/SignupPage" element={<SignupPage/>}/>
    </Routes> 
  );
}

export default App;