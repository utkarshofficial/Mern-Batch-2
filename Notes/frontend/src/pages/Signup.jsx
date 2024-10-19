import { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordMatched, setIsPasswordMatched] = useState(true)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(password != confirmPassword){
      setIsPasswordMatched(false)
      return
    }
    setIsPasswordMatched(true)

    try{
      const apiURL = "http://localhost:5000/api/auth/register"
      const response = await axios.post(apiURL, {
        full_name: fullName,
        email,
        password
      })
      console.log(response)
    }
    catch(err){
      console.log(err)
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <form>
        <div>
          <label htmlFor="full_name">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
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
          className={`${!isPasswordMatched?"input-red":""}`}
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
          className={`${!isPasswordMatched?"input-red":""}`}
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
        <p>
          Already have an account 
          <Link to={"/login"}>Log in</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
