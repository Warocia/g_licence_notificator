import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavMenu() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to="/home">Koti</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Nav className="me-auto">
            <Nav.Link as={Link} to="/LicencePage">Lisenssit</Nav.Link>
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavMenu;