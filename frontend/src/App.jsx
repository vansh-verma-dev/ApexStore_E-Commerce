import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import ProductView from "./pages/productViewP";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage/>} /> 
      <Route path="/ProductView/:id" element={<ProductView/>} />
    </Routes> 
  );
}

export default App;