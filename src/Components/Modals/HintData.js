import React from 'react'
import { Button, Modal } from 'react-bootstrap'

function HintData(show, onHide,onDelete ) {
  return (
    <div>
        <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Delete Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to delete this task?</Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={onHide}>Cancel</Button>
        <Button variant="dark" onClick={onDelete}>Delete</Button>
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default HintData