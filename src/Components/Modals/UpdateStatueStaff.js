
import React, { useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { updateIssueToServer } from '../../slices/IssueSlice';

function UpdateStatueStaff(props) {


    const[status,setStatus] = useState("");
    const[id,setId]=useState(0);
    const {selectedField}=useSelector((state)=>state.issues);
    const dispatch=useDispatch();
    


    useEffect(()=>{

      if(Object.keys(selectedField ).length!==0){
       setStatus(selectedField.status);
       setId(selectedField.id);
      }
    },[selectedField]);

   
    const editIssue=()=>{
      props.onHide();
      dispatch(updateIssueToServer({id,status}))
    }

  return (
    <Modal 
     {...props}
    size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Status
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="taskStatus">
            <Form.Label>Update Status</Form.Label>
            <Form.Select value={status} onChange={(e)=>{setStatus(e.target.value)}}>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="In Review">In Review</option>
              <option value="Completed">Completed</option>
              <option value="Declined">Declined</option>
            </Form.Select>
          </Form.Group>
          <div className='text-end'>
            <Button className='my-4' variant='dark' onClick={editIssue} style={{ backgroundColor: 'black', color: 'white' }}>Update Status</Button>
          </div>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdateStatueStaff;

