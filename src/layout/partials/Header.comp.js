import React from 'react'
import{ Navbar, Nav}from 'react-bootstrap'
import logo from '../../assets/img/logo.png'
import './Header.css'


export const Header = () => {
    return (
        <Navbar bg="info" variant="dark" collapseOnSelect expand="md"> 
        
        <Navbar.Brand href="#home" ><img src={logo} alt="logo" width="50px" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="/dashboard">DashBoard</Nav.Link>
            <Nav.Link href="/dashboard">Tickets</Nav.Link>
            <Nav.Link href="/dashboard">Logout</Nav.Link>
          </Nav> 
        </Navbar.Collapse>
      </Navbar>
    )
}
