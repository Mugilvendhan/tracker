
import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { removeTask, removeTaskFromServer } from '../../slices/AddTaskSlice';

function FacultyDeleteAssignment(props) {
    const dispatch = useDispatch();

    const deleteData = () => {
      console.log('submitted deleted')
        dispatch(removeTaskFromServer(props.task));
        dispatch(removeTask(props.task));
        props.onHide(); // Hide the modal after deleting the issue
        window.location.reload();
    };

    return (
        <Modal 
        {...props}>
            <Modal.Header closeButton>
                <Modal.Title>Delete Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Are you sure you want to delete this Issue?</p>
          <p style={{color:'red'}}>This will impact the Student Task-Assign Table.</p>
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

export default FacultyDeleteAssignment;

