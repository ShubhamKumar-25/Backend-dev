import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Folder path fix: "./components/" add kiya hai
import Navbar from "./components/Navbar";
import Counters from "./components/Counters";
import GitProfile from "./components/GitProfile";
import Timer from "./components/Timer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Counters />} />
          <Route path="/git-profile" element={<GitProfile />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
