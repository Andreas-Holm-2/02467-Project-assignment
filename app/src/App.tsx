import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NetwulfEmbed from "./pages/NetwulfEmbed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netwulf" element={<NetwulfEmbed />} />
      </Routes>
    </Router>
  );
}

export default App;
