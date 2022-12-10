import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import AboutMe from "./About";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

function Navigation(props) {
  function displayModal() {
    props.MoreAboutMe();
  }
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home">Kelsie Szost</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-links">
            <Nav.Link
              className="px-4"
              onClick={() => {
                displayModal();
                props.scrollTo("aboutMe");
              }}
              href="#"
            >
              About
            </Nav.Link>
            <Nav.Link
              className="px-4"
              onClick={() => {
                props.scrollTo("projects");
              }}
              href="#"
            >
              Projects
            </Nav.Link>
            <Nav.Link className="px-4" href="KelsieSzost.pdf">
              Resume
            </Nav.Link>
            <Nav.Link
              className="px-4"
              onClick={() => {
                props.scrollTo("contactUs");
              }}
              href="#"
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
