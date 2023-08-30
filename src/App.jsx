import 'bootstrap/dist/css/bootstrap.min.css' ;

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App(props) {


  return (
    <>
      <header>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">ROBBIE WEISSHAAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#aboutme">ABOUT ME</Nav.Link>
            <Nav.Link href="#portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="#contact">CONTACT</Nav.Link>
            <Nav.Link href="#resume">RESUME</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </header>
      <div>

      </div>
      <footer>

      </footer>
    </>
  )
}

export default App
