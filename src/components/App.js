import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import Contact from "./Contact";
import Feed from "./Feed";
import Signup from "./Signup";

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
          <Route path="/Feed" element={<Feed />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
