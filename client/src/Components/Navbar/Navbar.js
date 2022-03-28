import React from "react";
// import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from "../../JS/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import logo from "../../assets/logo.PNG";
import Filter from "../Filter/Filter.js";
// import { getAuthUser } from "../../JS/Actions/authActions";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "./Navbar.css";

const Navbarr = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  console.log({ auth });

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt="logo"
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                display: "flex",
                alignItems: "center",
              }}
              navbarScroll
            >
              <Link to="/" className="lin">
                Home
              </Link>
              {auth && auth.Role === "Admin" && (
                <Link to="/AddProduct" className="lin">
                  AddProduct
                </Link>
              )}
              {auth && auth.Role === "Admin" && (
                <Link to="/ListeAdminCategory" className="lin">
                  Products Admin
                </Link>
              )}

              {auth.Role !== "Admin" && (
                <NavDropdown title="Products Categories">
                  <NavDropdown.Item href="/Smartphone" className="linn">
                    Smartphone
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Tablettes" className="linn">
                    Tablettes
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Computers" className="linn">
                    Computers
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/Printers" className="linn">
                    Printers
                  </NavDropdown.Item>
                </NavDropdown>
              )}

              {auth.Role === "Admin" && (
                <Link to="/Order" className="lin">
                  Order
                </Link>
              )}

              <Link to="/ContactUS" className="lin">
                ContactUS
              </Link>
              {auth && auth.Role === "User" && (
                <Link
                  // to='/cart'
                  to={`/cart/${auth._id}`}
                  className="lin"
                >
                  Cart
                </Link>
              )}

              {isAuth ? (
                <div className="Profile">
                  {auth.PicURL && (
                    <img
                      alt="PicURL"
                      src={auth.PicURL}
                      className="d-inline-block align-top"
                    />
                  )}
                  <Link to="/profile" className="lin">
                    {auth.FirstName} {auth.LastName}
                  </Link>
                  <Link to="/login">
                    <button onClick={() => dispatch(logout())} className="icon">
                      <HiOutlineLogout
                        style={{ color: "#fff", fontSize: "1.5em" }}
                      />
                    </button>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to="/CreateAccount" className="lin">
                    Create Account
                  </Link>
                  <Link to="/login" className="lin">
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
