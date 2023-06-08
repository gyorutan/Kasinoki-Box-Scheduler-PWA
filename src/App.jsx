import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Password from "./pages/auth/Password";
import Home from "./pages/home/Home";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login/password" element={<Password />} />
        <Route path="/signup/password" element={<Password />} />
      </Routes>
    </Router>
  );
}

export default App;
