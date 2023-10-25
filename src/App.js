import "./App.css";
import Footer from "./component/main/Footer";
import Home from "./component/main/Home";
import Navbar from "./component/nav/Navbar.jsx";

function App() {
  return (
    <div className="bg-blueGray-900 ">
      <Navbar />
      <Home />

      <Footer />
    </div>
  );
}

export default App;
