/* import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import LoginForm from './LoginForm'; // Import your LoginForm component

function LoginFormWithModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <div>
            <Button
                className="btn"
                style={{ backgroundColor: 'rgb(243, 232, 232)', color: 'rgb(17, 16, 16)' }}
                onClick={() => setShowModal(true)}
            >
                Login
          </Button>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title className="fw-bold">Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <LoginForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default LoginFormWithModal;
 */

/* import LoginForm from "./LoginForm";
import React, { useState } from 'react';
function LoginFormWithModal() {
    const [showModal, setShowModal] = useState(false);
  
    return (
      <div>
        <button className="btn" style={{ backgroundColor: 'rgb(243, 232, 232)', color: 'rgb(17, 16, 16)' }} type="button" onClick={() => setShowModal(true)}>Login</button>
        <div className={`modal ${showModal ? 'show' : ''}`} id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title fw-bold">Login</h4>
               <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button> 
              </div>
              <div className="modal-body">
                <LoginForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default LoginFormWithModal; */