import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = (e)=>{
    e.preventDefault()
    
    console.log({
      name,email,password
    })
  }

  return (
    <div
      style={{
        width: "300px",
        textAlign: "center",
        border: "1px solid",
        borderRadius: "5px",
        margin: "auto"
      }}
    >
      <h3>Sign Up</h3>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          padding: "20px",
        }}
      >
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Name"
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          name="password"
          placeholder="Password"
        />

        <button>Sign up</button>
      </form>

      <p>
        Already have an account?
        <Link to={"/login"}
          style={{
            color: "#0084ff",
          }}
        >
          Login
        </Link>
      </p>
    </div>
  );
};

export default Signup;
