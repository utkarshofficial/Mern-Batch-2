import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  let user = {
    email: "ram@gmail.com",
    password: "123@r"
  }

  useEffect(()=>{
    if(user.email == email 
      && user.password == password
    ){
      // alert("Logged in !!")
      navigate("/home")
    }
  }, [password])

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(user.email == email 
      && user.password == password
    ){
      alert("Logged in !!")
      navigate("/home")
      
    }else{
      alert("Username or password not found")
    }

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
