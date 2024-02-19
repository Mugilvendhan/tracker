import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function TaskAssigned({ show, onHide }) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Task Assigned</Modal.Title>
      </Modal.Header>
      <Modal.Body>Task has been Assigned Successfully!</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default TaskAssigned;