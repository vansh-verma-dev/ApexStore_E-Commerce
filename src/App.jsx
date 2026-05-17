import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Profile from "./Pages/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;