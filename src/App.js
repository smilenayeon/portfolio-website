
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/layouts/navbar/Navbar";
import Home from "./components/pages/home/Home";
import Projects from "./components/pages/projects/Projects";
import About from "./components/pages/about/About";
import Skills from "./components/pages/skills/Skills";
import ContactMe from  "./components/pages/contact-me/ContactMe"
import Footer from "./components/layouts/footer/Footer";
import ThemeProvider from "./components/ThemeContext";

function App() {
  return (
    <div className="App">
    <ThemeProvider>
    <BrowserRouter>

    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skills/>}/>
      <Route path="/contact-me" element={<ContactMe/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </div>
  );
}

export default App;
