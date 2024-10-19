import { useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const apiURL = "http://localhost:5000/api/auth/login"
      const response = await axios.post(apiURL, {
        email,
        password
      })
      
      if(response.data.success){
        localStorage.setItem('token', response.data.token);
        navigate("/")
      }
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Login
        </button>
        <p>
          Create an account <Link to={"/signup"}>Sign up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
