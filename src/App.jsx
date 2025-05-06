import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import AutoScroll from "./components/AutoScroll";
import ScrollUp from "./components/ScrollUp";
import Cursor from "./components/Cursor";
import Form from "./components/LoanForm";
const App = () => {
  return (
    <Router>
      <AutoScroll />
      <Navbar />
      <ScrollUp />
      <Cursor />
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/form" element={<Form />} />
        </Routes>
        <Footer />
        </Router>
  );
};

export default App;
