import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./component/Footer/Footer.jsx";
import Navbar from "./component/Header/Navbar.jsx";
import Home from "./component/Home/Home.jsx";

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
