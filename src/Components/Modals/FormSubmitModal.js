import React from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';

function FormSubmitModal({showModal, setShowModal}) {
  return (
    <div>

<Modal show={showModal} onHide={() => setShowModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Form Submitted Successfully</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Your form has been submitted successfully!
      </Modal.Body>
      <Modal.Footer>
        <Row>
          <Col>
          <Button variant="dark" onClick={() => setShowModal(false)}>
          Close
        </Button>
          </Col>
          <Col>
          <Button variant="dark" as={Link} to='/myissues'>
          View
        </Button>
          </Col>
        </Row>
     
      </Modal.Footer>
    </Modal>
    </div>
  )                                              
}

export default FormSubmitModal