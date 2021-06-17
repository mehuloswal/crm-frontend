import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import "./Header.css";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    history.push("/");
  };
  return (
    <Navbar bg="info" variant="dark" collapseOnSelect expand="md">
      <Navbar.Brand href="#home">
        <img src={logo} alt="logo" width="50px" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer to="/dashboard">
            <Nav.Link>DashBoard</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/tickets">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>
          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
