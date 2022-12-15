import React from "react";
import Navbar from "./Navbar";
import About from "./About";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <h1>This is my portfolio website</h1>
                <img className="my-img" src="image/gagan.jpg" alt="" />
              </div>
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
