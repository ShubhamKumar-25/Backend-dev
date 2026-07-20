// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Navbar import
import Navbar from "./Navbar";

// Aapke teeno components
import Counters from "./Counters";
import GitProfile from "./GitProfile";
import Timer from "./Timer";

function App() {
  return (
    <Router>
      {/* Navbar yahan har page par dikhega */}
      <Navbar />

      {/* Jaisa URL hoga waisa component yahan render hoga */}
      <main>
        <Routes>
          <Route path="/" element={<Counters />} />
          <Route path="/git-profile" element={<GitProfile />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
