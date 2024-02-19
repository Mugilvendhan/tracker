/* import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Modal, Button } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';

function Facultynav() {
  const [showModal, setShowModal] = React.useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };


  return (
    <>
      <nav className="navbar navbar-expand-lg p-2.5 fixed-top" style={{ backgroundColor: 'rgb(9, 9, 10)' }}>
        <div className="container-fluid">
          <div className="heading">
            <Nav.Link className="navbar-brand text-white pe-4" href="#">College Issue Tracker <span>Faculty</span></Nav.Link>
          </div>
          
          <button
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
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" style={{ '--bs-scroll-height': '100px' }}>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" aria-current="page"  as={Link} to='/fmyissues'>My Issue</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" as={Link} to='/fraiseissues' >Raise Issues</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" as={Link} to='/ftasks'>Task</Nav.Link>
              </li>
              <li className="nav-item">
                <Nav.Link className="nav-link text-white pe-4" as={Link} to='/facultyprofile'>Profile</Nav.Link>
              </li>
              <li className="nav-item">
              <button className="btn" style={{ backgroundColor: 'rgb(243, 232, 232)', color: 'rgb(17, 16, 16)' }} onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
        
          <Button variant='dark' onClick={handleCloseModal}>No</Button>
         <Button variant='dark' as={Link} to='/'>Yes</Button>
        </Modal.Footer>
        
      </Modal>
    </>
  );
  }

export default Facultynav;
 */

import React, { useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function Facultynav() {

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <div className="container-fluid">
          <Navbar.Brand href="#" className='pe-4 px-4'>College Issue Tracker <span>Faculty</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/fmyissues" className="text-white pe-3">My Issue</Nav.Link>
              <Nav.Link as={Link} to="/fraiseissues" className="text-white pe-3">Raise Issues</Nav.Link>
              <Nav.Link as={Link} to="/ftasks" className="text-white pe-3">Task</Nav.Link>
              <Nav.Link as={Link} to="/facultyprofile" className="text-white pe-3">Profile</Nav.Link>
              
            </Nav>
            <Button variant="light" className='mx-3' onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <LogoutModal show={showModal} onHide={() => setShowModal(false)}/>
        {/* <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleCloseModal}>No</Button>
          <Button variant='dark' as={Link} to='/'>Yes</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Facultynav;
