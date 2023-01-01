import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./Pages/Home";
import Liked from "./Pages/Liked";
import Shorts from "./Pages/Shorts";
import Videos from "./Pages/Videos";
import Later from "./Pages/Later";
import History from "./Pages/History";
import Subscription from "./Pages/Subscription";
import Library from "./Pages/Library";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shorts" element={<Shorts />} />
        <Route path="/subscription" element={<Subscription />} />
        <Route path="/library" element={<Library />} />
        <Route path="/history" element={<History />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Later" element={<Later />} />
        <Route path="/liked" element={<Liked />} />
      </Routes>
    </div>
  );
}

export default App;
