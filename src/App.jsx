import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./index.scss";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Services from "./pages/Services";
import Works from "./pages/Works";

const App = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Router>
            <div className="body">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<Services />} />
                    <Route path="/works" element={<Works />} />
                </Routes>
                    <Navigation activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
            </div>
        </Router>
    );
};

export default App;
