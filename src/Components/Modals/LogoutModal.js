import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function LogoutModal({ show, onHide }) {
  return (
  
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
