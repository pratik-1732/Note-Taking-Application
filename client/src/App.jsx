import React from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

axios.defaults.withCredentials = true;

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard/:userId" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
