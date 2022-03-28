import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../../JS/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import logo from "../../assets/logo.PNG";
import Filter from "../Filter/Filter.js";
import "./Navbar.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
const Navbarr = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/Homeadmin" className="lin">
                Home
              </Link>
              <NavDropdown title="Products Categories" ClassName="lin">
                <NavDropdown.Item href="/Smartphone" ClassName="linn">
                  Smartphone
                </NavDropdown.Item>
                <NavDropdown.Item href="/Tablettes" ClassName="linn">
                  Tablettes
                </NavDropdown.Item>
                <NavDropdown.Item href="/Computers" ClassName="linn">
                  Computers
                </NavDropdown.Item>
                <NavDropdown.Item href="/Printers" ClassName="linn">
                  Printers
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/ContactUS" ClassName="lin">
                ContactUS
              </Link>
              <Link to="/Order" ClassName="lin">
                Orders
              </Link>
              <Link to="/cart" ClassName="lin">
                Cart
              </Link>
              {isAuth ? (
                <button onClick={() => dispatch(logout())} ClassName="icon">
                  {" "}
                  <HiOutlineLogout
                    style={{ color: "#fff", fontSize: "1.5em" }}
                  />{" "}
                </button>
              ) : (
                <div>
                  <Link to="/CreateAccount" ClassName="lin">
                    Create Account
                  </Link>
                  <Link to="/login" ClassName="lin">
                    Login
                  </Link>
                </div>
              )}
            </Nav>
            <Filter />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
