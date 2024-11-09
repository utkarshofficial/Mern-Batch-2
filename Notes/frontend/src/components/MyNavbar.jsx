import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/ContextProvider";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { IoSearch } from "react-icons/io5";
import { InputGroup, Form } from "react-bootstrap";

const MyNavbar = ({setSearchQuery}) => {
  const { user, logout } = useAuth();
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Nots</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {!user ? (
            <>
              <Link className="m-1" to="/signup">
                Signup
              </Link>
              <Link className="m-1" to="/login">
                Login
              </Link>
            </>
          ) : (
            <div className="d-flex align-items-center">
              <InputGroup className="">
                <InputGroup.Text><IoSearch/></InputGroup.Text>
                <Form.Control
                  placeholder="Search notes"
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </InputGroup>
              <Navbar.Text className="m-1">
                <span className="text-danger bg-light">{user.name.toUpperCase()}</span>
              </Navbar.Text>
              <button onClick={logout} className="m-1" to="/logout">
                Logout
              </button>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
