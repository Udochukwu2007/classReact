import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Nicepage/Home";
import About from "./Nicepage/About";
import Contact from "./Nicepage/Contact";
import Gallery from "./Nicepage/Gallery";
import Team from "./Nicepage/Team";








function Nicepgapp() {
  return (
    <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Gallery" element={<Gallery />} />
    <Route path="/Team" element={<Team />} />
    

  </Routes>
  )
}

export default Nicepgapp