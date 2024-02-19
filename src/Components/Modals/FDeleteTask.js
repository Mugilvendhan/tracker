
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeIssueFromServerFaculty } from '../../slices/FacultyIssueSlice';
//import {  removeIssueFromServerFaculty } from '../../slices/IssueSlice'

function FacultyDeleteTask(props) {
    const dispatch = useDispatch();

    const deleteData = () => {
      console.log('submitted deleted')
        dispatch(removeIssueFromServerFaculty(props.issuefaculty));
        props.onHide(); 
    };

    return (
        <Modal 
        {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete this Issue?</p>
          <p style={{color:'red'}}>This will impact the Faculty Status Table.</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="dark" onClick={deleteData}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default FacultyDeleteTask;

