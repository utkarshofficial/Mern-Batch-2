import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";

const Navigation = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to={"/signup"}>Signup</Link>
          </li>
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/">
          <Route path="signup" element={<Signup />} />

          <Route path="login" element={<Login />} />

          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
