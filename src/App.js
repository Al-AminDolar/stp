import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/main/Footer";
import Home from "./component/main/Home";
import Navbar from "./component/nav/Navbar.jsx";

function App() {
  return (
    <div className="bg-[#0f172a] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
