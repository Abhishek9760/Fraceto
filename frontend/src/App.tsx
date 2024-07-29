import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from "./pages/Home";
import Discover from "./pages/Discover";
import { SignIn } from "./components/Home";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Navbar from "./components/Home/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
    </Router>
  );
}
