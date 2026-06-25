import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Pages/Profile";
import ViewProducts from "./Components/ProjectsDetails";
import CartPage from "./Pages/Cart";
import AuthPage from "./Pages/Auth";
import PaymentPage from "./Pages/Payment";
import NotFound from "./Components/4O4";



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ViewProducts />} />
        <Route path="/Cart" element={<CartPage />}></Route>
        <Route path="/AuthPage" element={<AuthPage />}></Route>
        <Route path="/PaymentPage" element={<PaymentPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </>
  );
}

export default App;