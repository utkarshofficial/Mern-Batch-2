import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const MyNavbar = () => {
  const { user } = useAuth();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user ? (
            <>
              <Link className="m-1" to="/signup">Signup</Link>
              <Link className="m-1" to="/login">Login</Link>
            </>
          ) : (
            <div>
              <Navbar.Text className="m-1" >Signed in as: <span className="text-danger">{user.name.toUpperCase()}</span></Navbar.Text>
              <Link className="m-1"  to="/logout">Logout</Link>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
