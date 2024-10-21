import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";

const MyNavbar = () => {
  const { user } = useAuth();
  return (
    <div>
      <ul>
        {!user ? (
          <div>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </div>
        ) : (
          <div>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <button>{user.name}</button>
            </li>
            <li>
              <Link to="/logout">Logout</Link>
            </li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default MyNavbar;
