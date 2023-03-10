import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
          <img
              alt=""
              src="/apple-touch-icon.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            QuizBuzz</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="/home">Home</Nav.Link>
            <Nav.Link as={Link} to ="/statistic">Statistic</Nav.Link>
            <Nav.Link as={Link} to ="/blog">Blog</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;