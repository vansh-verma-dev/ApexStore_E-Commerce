import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Pages/Profile";
import ViewProducts from "./Components/ProjectsDetails";
import CartPage from "./Pages/Cart";
import AuthPage from "./Pages/Auth";
import PaymentPage from "./Pages/Payment";
 

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ViewProducts />} />
        <Route path="/Cart" element={<CartPage/>}></Route>
        <Route path="/AuthPage" element={<AuthPage/>}></Route>
         <Route path="/PaymentPage" element={<PaymentPage/>} />   
  
      </Routes>
     
    </>
  );
}

export default App;