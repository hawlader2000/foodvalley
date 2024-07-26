import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Layout from "./pages/Layout";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route  path="/layout" element={<Layout />} />
        <Route path="/" element={<Home />}  />
        <Route path="/about" element={<About/>} />
        <Route path="/contactus" element={<ContactUs/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}
export default App;
