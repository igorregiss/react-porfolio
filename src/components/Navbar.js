import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import { 
  BsFillHouseFill,
  BsFillPersonFill,
  BsBookmarkCheckFill,
} from "react-icons/bs";
import { RiFileList2Fill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";



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
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "backnav" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <h3 class="logotext">&lt;I.R/&gt;</h3>
        </Navbar.Brand>
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
          <Nav className="ms-auto" defaultActiveKey="#inicio">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <BsFillHouseFill style={{ marginBottom: "2px" }} /> Inicio
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sobre"
                onClick={() => updateExpanded(false)}
              >
                <BsFillPersonFill style={{ marginBottom: "2px" }} /> Sobre
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/certificados"
                onClick={() => updateExpanded(false)}
              >
                <BsBookmarkCheckFill
                  style={{ marginBottom: "2px" }}
                />{" "}  Certificados
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/projeto"
                onClick={() => updateExpanded(false)}
              >
                <FaLaptopCode
                  style={{ marginBottom: "2px" }}
                />{" "}  Projetos
              </Nav.Link>
            </Nav.Item>

{/*               <Nav.Item>
              <Nav.Link
                as={Link}
                to="/curriculo"
                onClick={() => updateExpanded(false)}
              >
                <RiFileList2Fill style={{ marginBottom: "2px" }} /> Curriculo
              </Nav.Link>
            </Nav.Item>
            
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/softwares"
                onClick={() => updateExpanded(false)}
              >
                <IoIosApps style={{ marginBottom: "2px" }} /> Softwares
              </Nav.Link>
            </Nav.Item>

         <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <IoIosApps style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item> 


            <Nav.Item>
              <Nav.Link
                href="https://igorregis.com/blog"
                target="_blank"
                rel="noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} /> Blogs
              </Nav.Link>
            </Nav.Item>*/}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default NavBar;
