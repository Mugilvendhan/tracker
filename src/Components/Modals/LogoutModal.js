import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LogoutModal({ show, onHide }) {
  return (
   /*  <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p><b>Are you sure you want to logout?</b></p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={handleLogout} as={Link} to='/'>Yes</Button>
        <Button variant="dark" onClick={handleClose}>No</Button>
      </Modal.Footer>
    </Modal> */
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Logout</Modal.Title>
    </Modal.Header>
    <Modal.Body>Are you sure you want to logout?</Modal.Body>
    <Modal.Footer>
      <Button variant="dark" onClick={onHide}>No</Button>
      <Button  as={Link} to='/' variant="dark" onClick={onHide}>Yes</Button>
    </Modal.Footer>
  </Modal>

  );
}

export default LogoutModal;
