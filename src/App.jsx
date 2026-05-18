import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Pages/Profile";
import ViewProducts from "./Components/ProjectsDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/product/:id" element={<ViewProducts />} />
      </Routes>
    </>
  );
}

export default App;