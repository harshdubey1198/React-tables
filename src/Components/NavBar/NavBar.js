
// made all possible things attached into the navbar for making it useful
import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "./logo1198.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import './navbar.css';

import {IoLogoGithub} from "react-icons/io"

import {FcContacts,FcManager,FcHome,FcDocument, FcReading,FcViewDetails,FcSurvey} from "react-icons/fc"
import {  AiFillStar,} from "react-icons/ai";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    
    <NavBar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <NavBar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid navbar-brand logo" alt="brand"  />
        </NavBar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
          
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <FcHome style={{fontSize: "1em", marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <FcManager style={{fontSize: "1em", marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/education"
                onClick={() => updateExpanded(false)}
              >
                <FcReading style={{fontSize: "1em", marginBottom: "2px" }} />Education

              </Nav.Link>
            </Nav.Item>



            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <FcViewDetails style={{fontSize: "1em", marginBottom: "2px" }} />Projects

              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <FcDocument style={{fontSize: "1em", marginBottom: "2px" }} />Resume 

              </Nav.Link>
            </Nav.Item>





            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contact"
                onClick={() => updateExpanded(false)}
              >
                <FcContacts style={{fontSize: "1em", marginBottom: "2px" }} />Contact

              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/suggestion"
                onClick={() => updateExpanded(false)}
              >
                <FcSurvey style={{fontSize: "1em", marginBottom: "2px" }} />Suggestions

              </Nav.Link>
            </Nav.Item>
           
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/harshdubey1198/"
                target="_blank"
                className="fork-btn-inner"
              >
                <IoLogoGithub style={{ fontSize: "1em" }} />Github
                <AiFillStar style={{ fontSize: "1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavBar>
  );
}

export default NavBar;
