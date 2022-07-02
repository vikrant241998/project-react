import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Themes from "./Components/Themes";
import Pages from "./Components/Pages";
import Contact from "./Components/Contact";
import Items from "./Components/Items";

function App() {
  return (
    <div>
     

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/items" element={<Items />} />
        </Routes>
      </BrowserRouter>

      
      <div className="home-container">
        <img src="banner.png" alt="" />
      </div>
    </div>
  );
}

export default App;
