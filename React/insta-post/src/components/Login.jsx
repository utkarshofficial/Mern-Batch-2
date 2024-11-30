import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
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
      <h3>Login</h3>
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

        <button>Log in</button>
      </form>

      <p>
        Don&apos;t have an account?
        <Link to={"/signup"}
          style={{
            color: "#0084ff",
          }}
        >
          Signup
        </Link>
      </p>
    </div>
  );
};

export default Login;
