// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTaskToServer } from '../../slices/AddTaskSlice';
// import { Button, Form, Modal } from 'react-bootstrap';

// function UpdateTaskModal(props) {

//     const[subname,setSubName] = useState("")
//     const[date,setDate]=useState("")
//     const[duedate,setDueDate]=useState("")
//     const[classselect,setClassSelect]=useState("")
   
//     const[id,setId]=useState(0);
//     const {selectedFieldTask}=useSelector((state)=>state.assigntask);
//     const dispatch=useDispatch();
    


//     useEffect(()=>{

//       if(Object.keys(selectedFieldTask ).length!==0){
//        setSubName(selectedFieldTask.subname);
//        setId(selectedFieldTask.id);
//        setDate(selectedFieldTask.date);
//        setDueDate(selectedFieldTask.duedate);
//        setClassSelect(selectedFieldTask.classselect);
//       }
//     },[selectedFieldTask]);

   
//     const editIssue=()=>{
//       props.onHide();
//       dispatch(updateTaskToServer({id,subname,date,duedate,classselect}))
//     }

//   return (
//     <Modal 
//      {...props}
//     size="lg" centered>
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Update Status
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//       <Form style={{paddingBottom:'10px'}}>
//             <Form.Group controlId="formstartdate" style={{ marginBottom: '20px' }}>
//               <Form.Label>Start Date</Form.Label>
//               <Form.Control
//                 type="date"
                
//                 name="date"
//                 value={date}
//                 onChange={(e)=>{setDate(e.target.value)}}
//               />
//             </Form.Group>

//             <Form.Group controlId="formSubname" style={{ marginBottom: '20px' }}>
//               <Form.Label>Subject Name</Form.Label>
//               <Form.Control
//                 type="text"
//                 placeholder="Enter Subject Name"
//                 name="subname"
//                 value={subname}
//                 onChange={(e)=>{setSubName(e.target.value)}}
//               />
//             </Form.Group>
//             <Form.Group controlId="formclass" style={{ marginBottom: '20px' }}>
//             <Form.Label>Class</Form.Label>
//             <Form.Select value={classselect} onChange={(e)=>{setClassSelect(e.target.value)}}>
//               <option value="Pending">IV-CSE</option>
//               <option value="Approved">IV-EEE</option>
//               <option value="In Review">IV-ECE</option>
//               <option value="Completed">IV-IT</option>
//             </Form.Select>
//           </Form.Group>
//             <Form.Group controlId="formdue" style={{ marginBottom: '20px' }}>
//               <Form.Label>Due Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 placeholder="Enter Subject Name"
//                 name="duedate"
//                 value={duedate}
//                 onChange={(e)=>{setDueDate(e.target.value)}}
//               />
//             </Form.Group >
//             <Button className='my-4' variant='dark' onClick={editIssue} style={{ backgroundColor: 'black', color: 'white' }}>Update Task</Button>

//           </Form>
//       </Modal.Body>
//       <Modal.Footer></Modal.Footer>
//     </Modal>
//   )
// }

// export default UpdateTaskModal




import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTaskToServer } from '../../slices/AddTaskSlice';
import { Button, Form, Modal } from 'react-bootstrap';

function UpdateTaskModal(props) {
  const [subname, setSubName] = useState('');
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [duedate, setDueDate] = useState('');
  const [classselect, setClassSelect] = useState('');
  const [errors, setErrors] = useState({});         

  const [id, setId] = useState(0);
  const { selectedFieldTask } = useSelector((state) => state.assigntask);
  const dispatch = useDispatch();
                  
  useEffect(() => {
    if (Object.keys(selectedFieldTask).length !== 0) {
      setSubName(selectedFieldTask.subname);
      setTask(selectedFieldTask.task);
      setId(selectedFieldTask.id);
      setDate(selectedFieldTask.date);             
      setDueDate(selectedFieldTask.duedate);          
      setClassSelect(selectedFieldTask.classselect);
    }
  }, [selectedFieldTask]);                  

  const editIssue = () => {
    if (validateForm()) {
      props.onHide();
      dispatch(updateTaskToServer({ id, subname, date,task, duedate, classselect }));
      window.location.reload();
    }
  };

  const validateForm = () => {
    const errors = {};
    let isValid = true;

    if (!date.trim()) {
      errors.date = 'Start Date is required';
      isValid = false;
    } else {
      const currentDate = new Date();
      const inputStartDate = new Date(date);
      if (inputStartDate < currentDate) {
        errors.date = 'Start Date cannot be in the past';
        isValid = false;
      }
    }

    if (!duedate.trim()) {
      errors.duedate = 'Due Date is required';
      isValid = false;
    } else if (new Date(duedate) < new Date(date)) {
      errors.duedate = 'Due Date cannot be earlier than Start Date';
      isValid = false;
    }

    if (!subname.trim()) {
      errors.subname = 'Subject Name is required';
      isValid = false;
    }
    if (!task.trim()) {
      errors.task = 'Task is required';
      isValid = false;
    }

    if (!classselect.trim()) {
      errors.classselect = 'Class is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  return (            
    <Modal {...props} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Update Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form style={{ paddingBottom: '10px' }}>
          <Form.Group controlId="formstartdate" style={{ marginBottom: '20px' }}>
            <Form.Label>Start Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              isInvalid={!!errors.date}
            />
            <Form.Control.Feedback type="invalid">{errors.date}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formSubname" style={{ marginBottom: '20px' }}>
            <Form.Label>Subject Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Subject Name"
              name="subname"
              value={subname}
              onChange={(e) => setSubName(e.target.value)}
              isInvalid={!!errors.subname}
            />
            <Form.Control.Feedback type="invalid">{errors.subname}</Form.Control.Feedback>
          </Form.Group>


          <Form.Group controlId="formSubname" style={{ marginBottom: '20px' }}>
            <Form.Label>Task</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Task "
              name="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              isInvalid={!!errors.task}
            />
            <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
          </Form.Group>
{/* 
          <Form.Group controlId="formclass" style={{ marginBottom: '20px' }}>
            <Form.Label>Class</Form.Label>
            <Form.Select
              value={classselect}
              onChange={(e) => setClassSelect(e.target.value)}
              isInvalid={!!errors.classselect} >
              <option value="">Select Class</option>
              <option value="IV-CSE">IV-CSE</option>
              <option value="IV-EEE">IV-EEE</option>
              <option value="IV-ECE">IV-ECE</option>
              <option value="IV-IT">IV-IT</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.classselect}</Form.Control.Feedback>
          </Form.Group> */}

          <Form.Group controlId="formdue" style={{ marginBottom: '20px' }}>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type="date"
              name="duedate"
              value={duedate}
              onChange={(e) => setDueDate(e.target.value)}
              isInvalid={!!errors.duedate}
            />
            <Form.Control.Feedback type="invalid">{errors.duedate}</Form.Control.Feedback>
          </Form.Group>

          <Button className="my-4" variant="dark" onClick={editIssue} style={{ backgroundColor: 'black', color: 'white' }} >Update Task</Button>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  );
}

export default UpdateTaskModal;



