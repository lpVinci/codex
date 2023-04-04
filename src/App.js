import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
