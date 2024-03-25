import React, { useEffect, useState } from 'react';
import { Form, Button, Col, Row } from 'react-bootstrap';
import TaskAssigned from '../../../Modals/TaskAssigned';
import { useDispatch } from 'react-redux';
import { addTaskToServer } from '../../../../slices/AddTaskSlice';

function FTaskForm() {



  const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);
  useEffect(() => {
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInUserId');
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);
    }
  }, []);
     

  useEffect(() => {
    // Check if loggedInUserId is truthy before making the API request
    if (loggedInUserId) {
      // Make the API request using loggedInUserId
      fetch(`http://localhost:5000/studentprofile/${loggedInUserId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch user details');
          }
          return response.json();
        })
        .then(data => {
          // Handle the fetched data as needed
          setUserData(data);
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [loggedInUserId]);





  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    task: '',
    subject: '',
    faculty:'',
    year:'',
    classSelect: '',
    fileInput: '',
    startDate: '',
    dueDate: '',
  });

 

  
  const [errors, setErrors] = useState({});
  function validateField(fieldName, value) {
    let error = '';
  
    switch (fieldName) {
      case 'task':
        error = value.trim() === '' ? 'Task is required' : '';
        break;
      case 'subject':
        error = value.trim() === '' ? 'Subject is required' : '';
        break;
        /* case 'faculty':
        error = value.trim() === '' ? 'Faculty is required' : '';
        break; */
    /*   case 'classSelect':
        error = value === '' ? 'Select Class is required' : '';
        break; */
        case 'year':
          error = value === '' ? ' Year is required' : '';
          break;
        case 'startDate':
          error = value.trim() === '' ? 'Start Date is required' : '';
          if (!error) {
            const currentDate = new Date();
            const inputStartDate = new Date(value);
            if (inputStartDate < currentDate) {
              error = 'Start Date cannot be in the past';
            }
          }
          if (!error && formData.dueDate.trim() && new Date(formData.dueDate) < new Date(value)) {           // error = false , then -> .trim() has value , then -> checks if due < value entered 
            error = 'Start Date cannot be after Due Date';                                                   //converted to a 'Date' object using new Date(formData.dueDate)
          }
          break;
        case 'dueDate':
          error = value.trim() === '' ? 'Due Date is required' : '';
          if (!error && formData.startDate.trim() && new Date(value) < new Date(formData.startDate)) {
            error = 'Due Date cannot be before Start Date';
          }
          break;
      default:
        break;
    }
  
    return error;
  }
  

  function handleChange(e) {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));

    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const newErrors = {};
    Object.keys(formData).forEach(fieldName => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === '');                                   //'foreach' field 'every' error is checked

    if (isValid) {
      console.log('Form submitted successfully');
      setShowModal(true);
      dispatch(addTaskToServer({
                task:formData.task,
                date: formData.startDate,
                subname: formData.subject,
                faculty:userData.email,
                year:formData.year,
                classselect: userData.classdept,
                duedate: formData.dueDate,
      }));
     
      setFormData({
        task: '',
        subject: '',
        faculty:'',
        year:'',
        classSelect: '',
        fileInput: '',
        startDate: '',
        dueDate: '',
      });

      window.location.reload();                                                                       // to reload the page 
    } else {
      console.log('Form validation failed');
    }
  }

  return (
    <>
<Form onSubmit={handleSubmit}>
         <Row className="g-3 mb-4">                                            {/* gap -Bootstrap spacing class that adds a margin of 0.75rem (or 12px) between columns within the row */}
           <Col md={6}>
             <Form.Group controlId="task">
               <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
             <Form.Control
                type="text"
                name="task"
                value={formData.task}
                placeholder="Enter Task Title"
                onChange={handleChange}
                isInvalid={!!errors.task}
              />
              <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="subject">
              <Form.Label>Subject Name <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="subject"
                placeholder="Enter Subject Name"
                value={formData.subject}
                onChange={handleChange}
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="faculty">
              <Form.Label>Email ID <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="faculty"
                placeholder="Enter faculty Email"
                value={userData && userData.email}
                onChange={handleChange}
                /* isInvalid={!!errors.faculty} */
              />
            {/*   <Form.Control.Feedback type="invalid">{errors.faculty}</Form.Control.Feedback> */}
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="attachment">
              <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
              <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} isInvalid={!!errors.fileInput} />
              <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
          <Form.Group className="mb-3" controlId="year">
    <Form.Label>Year <span className="star text-danger">*</span></Form.Label>
    <Form.Select name="year" value={formData.year} onChange={handleChange} isInvalid={!!errors.year}>
        <option>Select</option>
        <option>I</option>
        <option>II</option>
        <option>III</option>
        <option>IV</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback>
</Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="classSelect">
              <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Select
                name="classSelect"
                value={userData && userData.classdept}
                onChange={handleChange}
              /*   isInvalid={!!errors.classSelect} */
              >
               <option>Select</option>
        <option>CSE</option>
        <option>Mechanical</option>
        <option>Civil</option>
        <option>EEE</option>
        <option>ECE</option>
              </Form.Select>
             {/*  <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback> */}
            </Form.Group>
          </Col>
       
          <Col md={6}>
            <Form.Group controlId="startDate">
              <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                isInvalid={!!errors.startDate}
              />
              <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="dueDate">
              <Form.Label>Due Date <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="date"
                name="dueDate"
                value={formData.dueDate}
                onChange={handleChange}
                isInvalid={!!errors.dueDate}
              />
              <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
            </Form.Group>
          </Col>
          
        </Row>
        <Button type="submit" className="btn btn-dark ms-1">Assign</Button>
      </Form>
              <TaskAssigned showModal={showModal} setShowModal={setShowModal} />

    </>
  );
}

export default FTaskForm;
