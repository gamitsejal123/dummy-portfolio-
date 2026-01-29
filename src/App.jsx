import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home";
import AboutMe from "./pages/AboutSection";
import Services from "./pages/ServicesSection";
import Projects from "./pages/Project";
import Blogs from "./pages/Blogs";
import Testimonials from "./pages/Testimonials";



function App() {
  return (

     <BrowserRouter>
      <Navbar />
        <Routes>
        <Route path="/01project/src/pages/Home.jsx" element={<Home />} />
        <Route path="/01project/src/pages/AboutSection.jsx" element={<AboutMe />} />
        <Route path="/01project/src/pages/ServicesSection.jsx" element={<Services />} />
        <Route path="/01project/src/pages/Project.jsx" element={<Projects />} />
        <Route path="/01project/src/pages/Blogs.jsx" element={<Blogs />} /> 
        <Route path="/01project/src/pages/Testimonials.jsx" element={<Testimonials />} /> 
      </Routes>
      <Footer/>
    </BrowserRouter>
     
  );
}

export default App;

