import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/routes/Home/Home";
import About from "./components/routes/About/About";
import Event from "./components/routes/EventDetail/Event";
import Gallary from "./components/routes/Gallary/Gallary";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Event />} />
        <Route path="/gallery" element={<Gallary />} />
      </Routes>
    </div>
  );
};

export default App;
