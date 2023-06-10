import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Home from "./pages/home/Home";
import Layout from "./components/Layout";
import Schedule from "./pages/schedule/Schedule";
import User from "./pages/user/User";
import Individual from "./pages/create/Individual";
import Band from "./pages/create/Band";

function App() {
  return (
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/individual" element={<Individual />} />
        <Route path="/band" element={<Band />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  );
}

export default App;
