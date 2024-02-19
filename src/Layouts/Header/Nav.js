/* import React, { useState } from 'react';
import Nav from 'react-bootstrap/Nav';
import Modal from 'react-bootstrap/Modal'; 
import LoginFormWithModal from '../../Components/Modals/LoginForm';
import { Button } from 'react-bootstrap';

function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg p-2.5 fixed-top" style={{ backgroundColor: 'rgb(9, 9, 10)' }}>
        <div className="container-fluid">
          <div className="heading">
            <Nav.Link className="navbar-brand text-white pe-4" href="#">College Issue Tracker</Nav.Link>
          </div>
          <Button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            data-bs-theme="dark"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" aria-current="page" href="#home">Home</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" href="#about">About us</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" href="#contact">Contact</Nav.Link>
              </li>
            </ul>
            <button className="btn" style={{ backgroundColor: 'rgb(243, 232, 232)', color: 'rgb(17, 16, 16)' }} type="button" onClick={(e) => setShowModal(true)}>Login</button>
          </div>
        </div>
      </nav>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginFormWithModal />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navbar;
 */


import React, { useState } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';
import LoginFormWithModal from '../../Components/Modals/LoginForm';

function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#" className="text-white px-4">College Issue Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto mb-2 mb-lg-0" style={{ '--bs-scroll-height': '100px' }}>
            <Nav.Link href="#home" className="text-white px-3">Home</Nav.Link>
            <Nav.Link href="#about" className="text-white px-3">About us</Nav.Link>
            <Nav.Link href="#contact" className="text-white px-3">Contact</Nav.Link>
            </Nav>
            <Button variant="light" className="ms-lg-0 mx-3" onClick={() => setShowModal(true)}>Login</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginFormWithModal />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
