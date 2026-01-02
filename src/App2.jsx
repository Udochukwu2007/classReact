import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Linkcomp/Home";
import About from "./Linkcomp/About";
import Blog from "./Linkcomp/Blog";
import Service from "./Linkcomp/Service";
import Shop from "./Linkcomp/Shop";
import Schedule from "./Linkcomp/Schedule";
import Product from "./Linkcomp/Product";
import Bagpro from "./Linkcomp/Bagpro";
import Walletpro from "./Linkcomp/Walletpro";









function App2() {
  return (
   <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/About" element={<About />} />
    <Route path="/Blog" element={<Blog />} />
    <Route path="/Service" element={<Service />} />
    <Route path="/Shop" element={<Shop />} />
    <Route path="/Schedule" element={<Schedule />} />
    <Route path="/Product" element={<Product />} />
    <Route path="/Bagpro" element={<Bagpro />} />
    <Route path="/Walletpro" element={<Walletpro />} />

  </Routes>
  
  );
}

export default App2