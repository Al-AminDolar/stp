import "./App.css";
import Blogs from "./component/main/Blogs";
import Caurosel from "./component/main/Caurosel";
import Footer from "./component/main/Footer";
import Main_page from "./component/main/Main_page";
import PopularTag from "./component/main/PopularTag";
import Posts from "./component/main/Posts";
import Navbar from "./component/nav/Navbar.jsx";

function App() {
  return (
    <div className="bg-blueGray-900">
      <Navbar />
      <Main_page />
      <Caurosel />
      <Blogs />
      <PopularTag />
      <Posts />
      <Footer />
    </div>
  );
}

export default App;
