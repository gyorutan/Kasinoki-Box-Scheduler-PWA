import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Auth from "./pages/auth/Auth";
import Redirect from "./pages/redirect/Redirect";
import Login from "./pages/auth/login/Login";
import Signup from "./pages/auth/signup/Signup";
// import Header from "./components/Header";

function App() {
  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Redirect />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
