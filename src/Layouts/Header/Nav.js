import React, { useState } from 'react';
import { Nav, Navbar, Button, Modal } from 'react-bootstrap';
import LoginForm from '../../Components/Modals/LoginForm';

function Navigation() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>                                                                                                   {/* fragment */}
      <Navbar expand="lg" fixed="top" bg="dark" variant="dark">
        <Navbar.Brand href="#" className="text-white px-4">College Issue Tracker</Navbar.Brand>           {/* brand or logo */}
        <Navbar.Toggle aria-controls="navbarScroll" />                                                    {/* hamberger id refers to collapse */}
        <Navbar.Collapse id="navbarScroll">                                                               {/* collapse- to hide something */}
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
          <LoginForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Navigation;
