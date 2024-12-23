import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import DashBoard from "./components/DashBoard.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Resume from "./components/Resume.jsx";
import "./App.css";
import Contact from "./components/Contact.jsx";
import NavBar from "./NavBar.jsx";
import ProjectWork from "./components/ProjectWork.jsx";
import Footer from "./Footer.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<ProjectWork />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
