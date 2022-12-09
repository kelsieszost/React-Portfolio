import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import AboutMe from "./About";

function Navigation(props) {
  function displayModal() {
    props.MoreAboutMe();
  }
  return (
    <Navbar collapseOnSelect expand="sm">
      <Container className="navStyles">
        <Row>
          <Navbar.Brand href="">KELSIE SZOST</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Row>
        <Row>
          <Nav>
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
            <Nav.Link className="px-4" href="#">
              Resume
            </Nav.Link>
            <Nav.Link className="px-4" href="#">
              Contact
            </Nav.Link>
          </Nav>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Navigation;
