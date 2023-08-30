import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import About from "./components/aboutus";
import Navbar from "./components/navbar";
import "./components/navbar.css";
import Services from "./components/services";
import Client from "./components/clients";
import Contact from "./components/contact";
import Login from "./components/login";
import Application from "./components/applicationdevelop";
import Consulting from "./components/consulting";
import Training from "./components/training";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="top-nav-links">
          <Link to="/login"><i class='fas fa-user-circle' style={{fontSize:'24px', marginRight:'5px'}}></i>Employee Login</Link>
          <Link to="/"><i class="fa fa-envelope" style={{fontSize:'24px', marginRight:'5px'}}></i>info@perksys.com</Link>
          <Link to="/"><i class="fa fa-phone" style={{fontSize:'24px', marginRight:'5px'}}></i>214-842-6969</Link>
        </div>
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Services />} />
            <Route path="/client" element={<Client />} />
            {/* <Route path="/career" element={<Client />} /> */}
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/application-development" element={<Application />} />
            <Route path="/consulting" element={<Consulting />} />
            <Route path="/training" element={<Training />} />
          </Routes>

          <footer className="footer">
            Copyright © 2014 Perk Systems, Inc. All rights reserved.
          </footer>
        </div>
      </div>
    </Router>
  );
};

export default App;
