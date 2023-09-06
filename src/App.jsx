import { Routes, Route, BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css' ;

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { AboutMe, Contact, Portfolio, Resume } from './components';

function App(props) {


  return (
    <>
      <header>
        <div>
          <BrowserRouter> 
            <Routes>
              <Route path = "/" element = {<AboutMe />} />
              <Route path = "/portfolio" element = {<Portfolio />} />
              <Route path = "/contact" element = {<Contact />} />
              <Route path = "/resume" element = {<Resume />} />
            </Routes>
          </BrowserRouter>
        </div>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">ROBBIE WEISSHAAR</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">ABOUT ME</Nav.Link>
            <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
            <Nav.Link href="/contact">CONTACT</Nav.Link>
            <Nav.Link href="/resume">RESUME</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
      </header>
     
      <footer style={{
        position:'fixed',
        left:0,
        bottom:0,
        right:0,
        marginBottom:'5px' }}>
        <Container style={{ display: "flex", justifyContent: "center" }}>
          <a href='https://github.com/rweisshaar1'>
            <img id="minipng" style={{ marginRight:'5px' }} src='../src/assets/github-mark.png'></img>
          </a>
          <a href='https://www.linkedin.com/in/robbie-weisshaar-86818328b/'>
            <img id="minipng" style={{ marginLeft:'5px' }} src='../src/assets/li-in-bug.png'></img>
          </a>
        </Container>
      </footer>
    </>
  )
}

export default App