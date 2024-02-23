import React from 'react';
import { Button, Modal } from 'react-bootstrap';

function Description({ show, onHide, issue }) { 

  
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Description
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {issue && <p>{issue.description}</p>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Description;
