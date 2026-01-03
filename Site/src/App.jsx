import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<Navigate to="/home" />} />

        
        <Route path="/home" element={<Home />} />
         
      </Routes>
    </Router>
  );
}

export default App;
