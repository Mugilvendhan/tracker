/* import React, { useState } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

function FTaskForm() {
  const [formData, setFormData] = useState({
    task: '',
    subject: '',
    classSelect: '',
    faculty: '',
    startDate: '',
    dueDate: ''
  });
  const [errors, setErrors] = useState({
    task: '',
    subject: '',
    classSelect: '',
    faculty: '',
    startDate: '',
    dueDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      showAlert();
      setFormData({
        task: '',
    subject: '',
    classSelect: '',
    faculty: '',
    startDate: '',
    dueDate: ''
      });

    } else {
      console.log('Form validation failed');
    }
  };

  const validateForm = () => {
    const { task, subject, classSelect, faculty, startDate, dueDate } = formData;
    const errors = {};
    let isValid = true;

    if (task.trim() === '') {
      errors.task = 'Task is required';
      isValid = false;
    }

    if (subject.trim() === '') {
      errors.subject = 'Subject is required';
      isValid = false;
    }

    if (classSelect === '') {
      errors.classSelect = 'Select Class is required';
      isValid = false;
    }

    if (faculty.trim() === '') {
      errors.faculty = 'Faculty name is required';
      isValid = false;
    }

    if (startDate.trim() === '') {
      errors.startDate = 'Start Date is required';
      isValid = false;
    }

    if (dueDate.trim() === '') {
      errors.dueDate = 'Due Date is required';
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const showAlert = () => {
    alert('Are you sure to Assign Task?');
  };

  return (
   
      <Form className="row g-3 mb-4" onSubmit={handleSubmit}>
        <Col md={6}>
          <Form.Group controlId="task">
            <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control 
              type="text" 
              name="task" 
              value={formData.task} 
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
              value={formData.subject} 
              onChange={handleChange} 
              isInvalid={!!errors.subject}
            />
            <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="classSelect">
            <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Select 
              name="classSelect" 
              value={formData.classSelect} 
              onChange={handleChange} 
              isInvalid={!!errors.classSelect}
            >
              <option value="">Select Class</option>
              <option value="IV-CSE">IV-CSE</option>
              <option value="IV-ECE">IV-ECE</option>
              <option value="IV-EEE">IV-EEE</option>
              <option value="IV-IT">IV-IT</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback>
          </Form.Group>
        </Col>
        <Col md={6}>
          <Form.Group controlId="faculty">
            <Form.Label>Faculty name <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control 
              type="text" 
              name="faculty" 
              value={formData.faculty} 
              onChange={handleChange} 
              isInvalid={!!errors.faculty}
            />
            <Form.Control.Feedback type="invalid">{errors.faculty}</Form.Control.Feedback>
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
        <Col>
          <Button type="submit" className="btn btn-dark ms-1">Assign</Button>
        </Col>
      </Form>
      
  );
}

export default FTaskForm;
 */



// import React, { useState } from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';
// import TaskAssigned from '../../../Modals/TaskAssigned';
// import { useDispatch } from 'react-redux';
// import { addTaskToServer } from '../../../../slices/AddTaskSlice';

// function FTaskForm() {

//   const dispatch=useDispatch();

//   const [showModal, setShowModal] = useState(false);

//   const [formData, setFormData] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });
//   const [errors, setErrors] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setShowModal(true);
//       dispatch(addTaskToServer({
//         date: formData.startDate,
//         subname: formData.subject,
//         classselect:formData.classSelect,
//         duedate:formData.dueDate
//       }));


//       setFormData({
//         task: '',
//         subject: '',
//         classSelect: '',
//         fileInput: '',
//         startDate: '',
//         dueDate: '',
//       });
//     } else {
//       console.log('Form validation failed');
//     }
//   };


//   const validateForm = () => {
//     const { task, subject, classSelect, startDate, dueDate } = formData;
//     const errors = {};
//     let isValid = true;

//     if (!task.trim()) {
//       errors.task = 'Task is required';
//       isValid = false;
//     }

//     if (!subject.trim()) {
//       errors.subject = 'Subject is required';
//       isValid = false;
//     }

//     if (!classSelect) {
//       errors.classSelect = 'Select Class is required';
//       isValid = false;
//     }

//     /* if (!fileInput) {
//       errors.fileInput = 'Attachment is required';
//       isValid = false;
//     } */

//     if (!startDate.trim()) {
//       errors.startDate = 'Start Date is required';
//       isValid = false;
//     } else {
//       const currentDate = new Date();
//       const inputStartDate = new Date(startDate);
//       if (inputStartDate < currentDate) {
//         errors.startDate = 'Start Date cannot be in the past';
//         isValid = false;
//       }
//     }

// if (!dueDate.trim()) {
//   errors.dueDate = 'Due Date is required';
//   isValid = false;
// } else if (new Date(dueDate) < new Date(startDate)) {
//   errors.dueDate = 'Due Date cannot be earlier than Start Date';
//   isValid = false;
// }



//     setErrors(errors);
//     return isValid;
//   };

// /*   const showAlert = () => {
//     alert('Are you sure to Assign Task?');
//   }; */

//   return (
//     <>
//     <Form onSubmit={handleSubmit}>
//       <Row className="g-3 mb-4">
//         <Col md={6}>
//           <Form.Group controlId="task">
//             <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
//             <Form.Control 
//               type="text" 
//               name="task" 
//               value={formData.task} 
//               placeholder='Enter Task Title'
//               onChange={handleChange} 
//               isInvalid={!!errors.task}
//             />
//             <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="subject">
//             <Form.Label>Subject Name <span style={{ color: 'red' }}>*</span></Form.Label>
//             <Form.Control 
//               type="text" 
//               name="subject" 
//               placeholder='Enter Subject Name'
//               value={formData.subject} 
//               onChange={handleChange} 
//               isInvalid={!!errors.subject}
//             />
//             <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="classSelect">
//             <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
//             <Form.Select 
//               name="classSelect" 
//               value={formData.classSelect} 
//               onChange={handleChange} 
//               isInvalid={!!errors.classSelect}
//             >
//               <option value="">Select Class</option>
//               <option value="IV-CSE">IV-CSE</option>
//               <option value="IV-ECE">IV-ECE</option>
//               <option value="IV-EEE">IV-EEE</option>
//               <option value="IV-IT">IV-IT</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="attachment">
//           <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
//                       <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} isInvalid={!!errors.fileInput} />
//                       <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="startDate">
//             <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
//             <Form.Control 
//               type="date" 
//               name="startDate" 
//               value={formData.startDate} 
//               onChange={handleChange} 
//               isInvalid={!!errors.startDate}
//             />
//             <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//         <Col md={6}>
//           <Form.Group controlId="dueDate">
//             <Form.Label>Due Date <span style={{ color: 'red' }}>*</span></Form.Label>
//             <Form.Control 
//               type="date" 
//               name="dueDate" 
//               value={formData.dueDate} 
//               onChange={handleChange} 
//               isInvalid={!!errors.dueDate}
//             />
//             <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
//           </Form.Group>
//         </Col>
//       </Row>
//       <Button type="submit" className="btn btn-dark ms-1" on>Assign</Button>
//     </Form>


//     <TaskAssigned show={showModal} onHide={() => setShowModal(false)} />
//     </>
//   );
// }



// export default FTaskForm;




// import React, { useState } from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';
// import TaskAssigned from '../../../Modals/TaskAssigned';
// import { useDispatch } from 'react-redux';
// import { addTaskToServer } from '../../../../slices/AddTaskSlice';

// function FTaskForm() {

//   const dispatch = useDispatch();

//   const [showModal, setShowModal] = useState(false);

//   const [formData, setFormData] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const [errors, setErrors] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prevData => ({
//       ...prevData,
//       [name]: value
//     }));
//     // Validate field on change
//     validateField(name, value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setShowModal(true);
//     } else {
//       console.log('Form validation failed');
//     }
//   };
  
//   const handleModalConfirm = () => {
//     dispatch(addTaskToServer({
//       date: formData.startDate,
//       subname: formData.subject,
//       classselect: formData.classSelect,
//       duedate: formData.dueDate
//     }));
  
//     setFormData({
//       task: '',
//       subject: '',
//       classSelect: '',
//       fileInput: '',
//       startDate: '',
//       dueDate: '',
//     });
  
//     setShowModal(false);
//   };
  
//   const validateForm = () => {
//     const { task, subject, classSelect, startDate, dueDate } = formData;
//     const errors = {};

//     // Validate each field individually
//     validateField('task', task);
//     validateField('subject', subject);
//     validateField('classSelect', classSelect);
//     validateField('startDate', startDate);
//     validateField('dueDate', dueDate);

//     // Check if any errors exist
//     return Object.values(errors).every(error => error === '');
//   };

//   const validateField = (name, value) => {
//     let error = '';

//     switch (name) {
//       case 'task':
//         error = value.trim() === '' ? 'Task is required' : '';
//         break;
//       case 'subject':
//         error = value.trim() === '' ? 'Subject is required' : '';
//         break;
//       case 'classSelect':
//         error = value === '' ? 'Select Class is required' : '';
//         break;
//       case 'startDate':
//         error = value.trim() === '' ? 'Start Date is required' : '';
//         break;
//       case 'dueDate':
//         error = value.trim() === '' ? 'Due Date is required' : new Date(value) < new Date(formData.startDate) ? 'Due Date cannot be earlier than Start Date' : '';
//         break;
//       default:
//         break;
//     }

//     setErrors(prevErrors => ({
//       ...prevErrors,
//       [name]: error
//     }));
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Row className="g-3 mb-4">
//           <Col md={6}>
//             <Form.Group controlId="task">
//               <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="task"
//                 value={formData.task}
//                 placeholder='Enter Task Title'
//                 onChange={handleChange}
//                 isInvalid={!!errors.task}
//               />
//               <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="subject">
//               <Form.Label>Subject Name <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="subject"
//                 placeholder='Enter Subject Name'
//                 value={formData.subject}
//                 onChange={handleChange}
//                 isInvalid={!!errors.subject}
//               />
//               <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="classSelect">
//               <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Select
//                 name="classSelect"
//                 value={formData.classSelect}
//                 onChange={handleChange}
//                 isInvalid={!!errors.classSelect}
//               >
//                 <option value="">Select Class</option>
//                 <option value="IV-CSE">IV-CSE</option>
//                 <option value="IV-ECE">IV-ECE</option>
//                 <option value="IV-EEE">IV-EEE</option>
//                 <option value="IV-IT">IV-IT</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="startDate">
//               <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.startDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="dueDate">
//               <Form.Label>Due Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="dueDate"
//                 value={formData.dueDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.dueDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           {/* Add more fields here if needed */}
//         </Row>
//         <Button type="submit" className="btn btn-dark ms-1">Assign</Button>
//       </Form>
//       <TaskAssigned
//   show={showModal}
//   onHide={() => setShowModal(false)}
//   onConfirm={handleModalConfirm} // Add this prop
// />

//     </>
//   );
// }

// export default FTaskForm;


// import React, { useState } from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';
// import TaskAssigned from '../../../Modals/TaskAssigned';
// import { useDispatch } from 'react-redux';
// import { addTaskToServer } from '../../../../slices/AddTaskSlice';

// function FTaskForm() {
//   const dispatch = useDispatch();
//   const [showModal, setShowModal] = useState(false);

//   const [formData, setFormData] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const [errors, setErrors] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setShowModal(true);
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const handleModalConfirm = () => {
//     dispatch(
//       addTaskToServer({
//         date: formData.startDate,
//         subname: formData.subject,
//         classselect: formData.classSelect,
//         duedate: formData.dueDate,
//       })
//     );

//     setFormData({
//       task: '',
//       subject: '',
//       classSelect: '',
//       fileInput: '',
//       startDate: '',
//       dueDate: '',
//     });

//     setShowModal(false);
//   };

//   const validateForm = () => {
//     const { task, subject, classSelect, startDate, dueDate } = formData;
//     const errors = {};
//     let isValid = true;

//     if (!task.trim()) {
//       errors.task = 'Task is required';
//       isValid = false;
//     }

//     if (!subject.trim()) {
//       errors.subject = 'Subject is required';
//       isValid = false;
//     }

//     if (!classSelect) {
//       errors.classSelect = 'Select Class is required';
//       isValid = false;
//     }

//     if (!startDate.trim()) {
//       errors.startDate = 'Start Date is required';
//       isValid = false;
//     } else {
//       const currentDate = new Date();
//       const inputStartDate = new Date(startDate);
//       if (inputStartDate < currentDate) {
//         errors.startDate = 'Start Date cannot be in the past';
//         isValid = false;
//       }
//     }

//     if (!dueDate.trim()) {
//       errors.dueDate = 'Due Date is required';
//       isValid = false;
//     } else if (new Date(dueDate) < new Date(startDate)) {
//       errors.dueDate = 'Due Date cannot be earlier than Start Date';
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Row className="g-3 mb-4">
//           <Col md={6}>
//             <Form.Group controlId="task">
//               <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="task"
//                 value={formData.task}
//                 placeholder="Enter Task Title"
//                 onChange={handleChange}
//                 isInvalid={!!errors.task}
//               />
//               <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="subject">
//               <Form.Label>Subject Name <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="subject"
//                 placeholder="Enter Subject Name"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 isInvalid={!!errors.subject}
//               />
//               <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="classSelect">
//               <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Select
//                 name="classSelect"
//                 value={formData.classSelect}
//                 onChange={handleChange}
//                 isInvalid={!!errors.classSelect}
//               >
//                 <option value="">Select Class</option>
//                 <option value="IV-CSE">IV-CSE</option>
//                 <option value="IV-ECE">IV-ECE</option>
//                 <option value="IV-EEE">IV-EEE</option>
//                 <option value="IV-IT">IV-IT</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="attachment">
//               <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
//               <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} isInvalid={!!errors.fileInput} />
//               <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="startDate">
//               <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.startDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="dueDate">
//               <Form.Label>Due Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="dueDate"
//                 value={formData.dueDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.dueDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Button type="submit" className="btn btn-dark ms-1">Assign</Button>
//       </Form>

//       <TaskAssigned
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         onConfirm={handleModalConfirm}
//       />
//     </>
//   );
// }

// export default FTaskForm;




// import React, { useState } from 'react';
// import { Form, Button, Col, Row } from 'react-bootstrap';
// import TaskAssigned from '../../../Modals/TaskAssigned';
// import { useDispatch } from 'react-redux';
// import { addTaskToServer } from '../../../../slices/AddTaskSlice';

// function FTaskForm() {
//   const dispatch = useDispatch();
//   const [showModal, setShowModal] = useState(false);

//   const [formData, setFormData] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const [errors, setErrors] = useState({
//     task: '',
//     subject: '',
//     classSelect: '',
//     fileInput: '',
//     startDate: '',
//     dueDate: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//     // Trigger validation for the changed field
//     validateField(name, value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       setShowModal(true);
//     } else {
//       console.log('Form validation failed');
//     }
//   };

//   const handleModalConfirm = () => {
//     dispatch(
//       addTaskToServer({
//         date: formData.startDate,
//         subname: formData.subject,
//         classselect: formData.classSelect,
//         duedate: formData.dueDate,
//       })
//     );

//     setFormData({
//       task: '',
//       subject: '',
//       classSelect: '',
//       fileInput: '',
//       startDate: '',
//       dueDate: '',
//     });

//     setShowModal(false);
//   };

//   const validateForm = () => {
//     const { task, subject, classSelect, startDate, dueDate } = formData;
//     const newErrors = {};
//     let isValid = true;

//     // Validate each field and update errors state
//     Object.entries(formData).forEach(([name, value]) => {
//       newErrors[name] = validateField(name, value);
//       if (newErrors[name]) {
//         isValid = false;
//       }
//     });

//     setErrors(newErrors);
//     return isValid;
//   };

//   const validateField = (name, value) => {
//     let error = '';

//     switch (name) {
//       case 'task':
//         error = value.trim() === '' ? 'Task is required' : '';
//         break;
//       case 'subject':
//         error = value.trim() === '' ? 'Subject is required' : '';
//         break;
//       case 'classSelect':
//         error = value === '' ? 'Select Class is required' : '';
//         break;
//       case 'startDate':
//         error = value.trim() === '' ? 'Start Date is required' : '';
//         break;
//       case 'dueDate':
//         error = value.trim() === '' ? 'Due Date is required' : '';
//         break;
//       default:
//         break;
//     }

//     return error;
//   };

//   return (
//     <>
//       <Form onSubmit={handleSubmit}>
//         <Row className="g-3 mb-4">
//           <Col md={6}>
//             <Form.Group controlId="task">
//               <Form.Label>Enter a task <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="task"
//                 value={formData.task}
//                 placeholder="Enter Task Title"
//                 onChange={handleChange}
//                 isInvalid={!!errors.task}
//               />
//               <Form.Control.Feedback type="invalid">{errors.task}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="subject">
//               <Form.Label>Subject Name <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="text"
//                 name="subject"
//                 placeholder="Enter Subject Name"
//                 value={formData.subject}
//                 onChange={handleChange}
//                 isInvalid={!!errors.subject}
//               />
//               <Form.Control.Feedback type="invalid">{errors.subject}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="classSelect">
//               <Form.Label>Select Class <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Select
//                 name="classSelect"
//                 value={formData.classSelect}
//                 onChange={handleChange}
//                 isInvalid={!!errors.classSelect}
//               >
//                 <option value="">Select Class</option>
//                 <option value="IV-CSE">IV-CSE</option>
//                 <option value="IV-ECE">IV-ECE</option>
//                 <option value="IV-EEE">IV-EEE</option>
//                 <option value="IV-IT">IV-IT</option>
//               </Form.Select>
//               <Form.Control.Feedback type="invalid">{errors.classSelect}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="attachment">
//               <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
//               <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} isInvalid={!!errors.fileInput} />
//               <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="startDate">
//               <Form.Label>Start Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="startDate"
//                 value={formData.startDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.startDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.startDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="dueDate">
//               <Form.Label>Due Date <span style={{ color: 'red' }}>*</span></Form.Label>
//               <Form.Control
//                 type="date"
//                 name="dueDate"
//                 value={formData.dueDate}
//                 onChange={handleChange}
//                 isInvalid={!!errors.dueDate}
//               />
//               <Form.Control.Feedback type="invalid">{errors.dueDate}</Form.Control.Feedback>
//             </Form.Group>
//           </Col>
//         </Row>
//         <Button type="submit" className="btn btn-dark ms-1">Assign</Button>
//       </Form>

//       <TaskAssigned
//         show={showModal}
//         onHide={() => setShowModal(false)}
//         onConfirm={handleModalConfirm}
//       />
//     </>
//   );
// }

// export default FTaskForm;




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
          if (!error && formData.dueDate.trim() && new Date(formData.dueDate) < new Date(value)) {
            error = 'Start Date cannot be after Due Date';
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
    window.location.reload();
    const newErrors = {};
    Object.keys(formData).forEach(fieldName => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === '');

    if (isValid) {
      console.log('Form submitted successfully');
      setShowModal(true);
      dispatch(addTaskToServer({
                task:formData.task,
                date: formData.startDate,
                subname: formData.subject,
                faculty:userData.name,
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
    } else {
      console.log('Form validation failed');
    }
  }

  return (
    <>
<Form onSubmit={handleSubmit}>
         <Row className="g-3 mb-4">
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
              <Form.Label>Faculty Name <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                name="faculty"
                placeholder="Enter faculty Name"
                value={userData && userData.name}
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
