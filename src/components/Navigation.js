import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";

function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <Container className="navStyles">
        <Row>
          <Navbar.Brand href="">KELSIE SZOST</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        </Row>
        <Row>
          <Nav>
            <Nav.Link className="px-4" href="#">
              About
            </Nav.Link>
            <Nav.Link className="px-4" href="#">
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
