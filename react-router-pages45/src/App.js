
import './App.css';
import NavBar from './NavBar';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Homepage from './Components/Home';
import AboutPage from './Components/About';
import ServicePage from './Components/Services';
import ContactPage from './Components/Contact';


function App() {
  return (
    
   
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path= "/services" element={<ServicePage/>}/>
      <Route path="/contact" element={<ContactPage/>}/>

      </Routes>           
    
    </div>
  );
}

export default App;
