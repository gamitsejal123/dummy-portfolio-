import { BrowserRouter } from "react-router-dom";
import './App.css';
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import Footer from "./components/layout/Footer";

function App() {
  return (

     <BrowserRouter>
      <Navbar />
      <Home/>
      <Footer/>
    </BrowserRouter>
     
  );
}

export default App;

