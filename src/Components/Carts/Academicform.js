// /* 
// import React, { useState } from 'react';
// import { Form, Button, Row, Col, Container } from 'react-bootstrap';
// import FormSubmitModal from '../Modals/FormSubmitModal';
// import { useDispatch } from 'react-redux';
// import { addIssueToServer } from '../../slices/IssueSlice';

// function AcademicReportForm() {


//   const dispatch=useDispatch();

//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     dept: 'Select',
//     location: 'Select',
//     description: '',
//     count: 'Select',
//     priority: 'Select',
//     prt: '',
//     mobile: '',
//     fileInput: ''
//   });

  

//   const [errors, setErrors] = useState({});
//   const [showModal, setShowModal] = useState(false);
//   const inputDate = new Date(formData.prt.trim());
  
//   function validateForm() {
//     const newErrors = {};

//      if (formData.name.trim() === '') {
//       newErrors.name = 'First Name is required';
//     } else if (!/^[a-zA-Z ]+$/.test(formData.name)) {
//       newErrors.name = 'First Name is invalid';
//     } 

//     if (formData.email.trim() === '') {
//       newErrors.email = 'Email Address is required';
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = 'Invalid email address';
//     }
// /* 
//     if (formData.dept === 'Select') {
//       newErrors.dept = 'Department is required';
//     } */

//     if (formData.location === 'Select') {
//       newErrors.location = 'Issue facing on is required';
//     }

//     if (formData.description.trim() === '') {
//       newErrors.description = 'Description is required';
//     }

//     if (formData.count === 'Select') {
//       newErrors.count = 'Status Pending is required';
//     }

//     if (formData.priority === 'Select') {
//       newErrors.priority = 'Priority is required';
//     }

//     if (formData.prt.trim() === '') {
//       newErrors.prt = 'Issue Date is required';
//     } else if (inputDate.getTime() > Date.now()) {
//       newErrors.prt = 'Issue Date cannot be a future date';
//     }

//     if (formData.mobile.trim() === '') {
//       newErrors.mobile = 'Mobile Number is required';
//     } else if (!/^[6789]\d{9}$/.test(formData.mobile)) {
//       newErrors.mobile = 'Invalid mobile number';
//     }

//   /*   if (formData.fileInput.trim() === '') {
//       newErrors.fileInput = 'Attachments are required';
//     } */

//     setErrors(newErrors);

//     // Check if there are no errors
//     return Object.keys(newErrors).length === 0;
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   }





//   ////handlekeyup


    
//   const handleKeyUp = (e) => {
//     const { name, value } = e.target;
  
//     // Validation logic
//     switch (name) {
//       case 'name':
//         setErrors({ ...errors, name: value.trim() === '' ? 'Name is required' : '' });
//         break;
//       case 'email':
//         setErrors({ ...errors, email: value.trim() === '' ? 'Email is required' : '' });
//         break;
//       case 'dept':
//         setErrors({ ...errors, dept: value === 'Select' ? 'Department is required' : '' });
//         break;
//       case 'location':
//         setErrors({ ...errors, location: value === 'Select' ? 'Issue facing on is required' : '' });
//         break;
//       case 'description':
//         setErrors({ ...errors, description: value.trim() === '' ? 'Description is required' : '' });
//         break;
//       case 'count':
//         setErrors({ ...errors, count: value === 'Select' ? 'Status Pending is required' : '' });
//         break;
//       case 'priority':
//         setErrors({ ...errors, priority: value === 'Select' ? 'Priority is required' : '' });
//         break;
//       case 'prt':
//         setErrors({ ...errors, prt: value.trim() === '' ? 'Issue Date is required' : '' });
//         break;
//       case 'mobile':
//         setErrors({ ...errors, mobile: value.trim() === '' ? 'Mobile Number is required' : '' });
//         break;
//       default:
//         break;
//     }
//   };
  

  
 
    
//   function handleSubmit(e) {  
//     e.preventDefault();
   
//      if (validateForm()) {           
//       console.log('Form submitted successfully');
//       setShowModal(true);
//       dispatch(addIssueToServer({
//         date: formData.prt,            
//         name: formData.name, 
//         dept: formData.dept,
//         priority: formData.priority,
//         mobile: formData.mobile,
//         issueon: formData.location,
//         description: formData.description,
//         status:"Pending"
//       }));
      


//       setFormData({
//         name: '',
//         email: '',
//         dept: 'Select',
//         location: 'Select',
//         description: '',
//         count: 'Select',
//         priority: 'Select',
//         prt: '',
//         mobile: '',
//         fileInput: '',
//       });
//     } else {
//       console.log('Form validation failed');
//     }
//   } 

//   return (
//     <>
//       <Container>
//         <section style={{ backgroundColor: '#fffcfc', marginTop: '80px' }}>
//           <div className="row align-items-center">
//             <div className="col text-center">
//               <h2>Report On Academic Issues</h2>
//             </div>
//           </div>
//           <div className="content-box mt-5 py-8">
//             <div className="container py-4">
//               <Form   onSubmit={handleSubmit}>
//                 <Row className='mb-3'>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="name" className="form-label text-start">First Name<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
//                       <Form.Control type="text" id="name" name="name" value={formData.name} placeholder='Enter Full Name' onChange={handleChange} onKeyUp={handleKeyUp}  isInvalid={!!errors.name} />

//                       <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="email" style={{ textAlign: 'start' }} className="form-label">Email Address<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
//                       <Form.Control type="text" id="email" name="email" value={formData.email} placeholder='Ex: john987@gmail.com' onChange={handleChange} onKeyUp={handleKeyUp}   isInvalid={!!errors.email} />
//                       <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className='mb-3'>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="dept" className="form-label">Department<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Select id="dept" name="dept" value={formData.dept} onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.dept}>
//                       <option>Select</option>
//                         <option>CSE</option>
//                         <option>Mechanical </option>
//                         <option>Civil</option>
//                         <option>EEE</option>
//                         <option>ECE</option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="location" className="form-label">Issue facing on<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Select id="location" name="location" value={formData.location} onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.location}>
//                       <option>Select</option>
//                       <option>Course material</option>
//                         <option>Grade</option>
//                         <option>Academic Facility</option>
//                         <option>Others</option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
//                     </div>    
//                   </Col>
//                 </Row>
//                 <Row className='mb-3'>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="description" className="form-label">Description<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Control type="text" id="description" name="description" value={formData.description} placeholder='Describe in Detail' onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.description} />
//                       <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="count" className="form-label">People Involved<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Select id="count" name="count" value={formData.count} onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.count}>
//                         <option>Select</option>
//                         <option>Individual</option>
//                         <option>Group</option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid">{errors.count}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className='mb-3'>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="priority" className="form-label">Priority<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Select id="priority" name="priority" value={formData.priority} onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.priority}>
//                         <option>Select</option>
//                         <option>High</option>
//                         <option>Medium</option>
//                         <option>Low</option>
//                       </Form.Select>
//                       <Form.Control.Feedback type="invalid">{errors.priority}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="prt" className="form-label">Issue Date<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Control type="date" id="prt" name="prt" value={formData.prt} onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.prt} />
//                       <Form.Control.Feedback type="invalid">{errors.prt}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                 </Row>
//                 <Row className='mb-3'>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="mobile" className="form-label">Mobile Number<span style={{ color: 'red' }}>*</span></Form.Label>
//                       <Form.Control type="tel" id="mobile" name="mobile" value={formData.mobile} placeholder='Enter Mobile Number' onChange={handleChange} onKeyUp={handleKeyUp} isInvalid={!!errors.mobile} />
//                       <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                   <Col>
//                     <div className='text-start'>
//                       <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
//                       <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} /* isInvalid={!!errors.fileInput}  *//>
//                       <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
//                     </div>
//                   </Col>
//                 </Row>

//                 <div style={{ padding: '3rem' }}>
//                   <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white' }} >Submit</Button>
//                 </div>
//               </Form>
//             </div>
//           </div>
//         </section>
//       </Container>

//       <FormSubmitModal showModal={showModal} setShowModal={setShowModal} />
//     </>
//   );
// }

// export default AcademicReportForm;





//  */




import React, { useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import FormSubmitModal from '../Modals/FormSubmitModal';
import { useDispatch } from 'react-redux';
import { addIssueToServer } from '../../slices/IssueSlice';

function AcademicReportForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dept: 'Select',
    location: 'Select',
    description: '',
    count: 'Select',
    priority: 'Select',
    prt: '',
    mobile: '',
    fileInput: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
 /*  const inputDate = new Date(formData.prt.trim()); */

  function validateField(fieldName, value) {
    let error = '';

    switch (fieldName) {
      case 'name':
        error = value.trim() === '' ? 'First Name is required' : '';
        break;
      case 'email':
        error = value.trim() === '' ? 'Email Address is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'dept':
        error = value === 'Select' ? 'Department is required' : '';
        break;
      case 'location':
        error = value === 'Select' ? 'Issue facing on is required' : '';
        break;
      case 'description':
        error = value.trim() === '' ? 'Description is required' : '';
        break;
      case 'count':
        error = value === 'Select' ? 'Status Pending is required' : '';
        break;
      case 'priority':
        error = value === 'Select' ? 'Priority is required' : '';
        break;
        case 'prt':
          const currentDate = new Date();
          const enteredDate = new Date(value);
          error = value.trim() === '' ? 'Issue Date is required' :
                  enteredDate.getTime() > currentDate.getTime() ? 'Issue Date cannot be a future date' :
                  enteredDate.getTime() < currentDate.getTime() ? '' :
                  '';
         /*  setErrors({ ...errors, prt: error }); */
          break;
        
      case 'mobile':
        error = value.trim() === '' ? 'Mobile Number is required' : !/^[6789]\d{9}$/.test(value) ? 'Invalid mobile number' : '';
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

    const isValid = Object.values(newErrors).every(error => error === '');

    if (isValid) {
      console.log('Form submitted successfully');
      setShowModal(true);
      dispatch(addIssueToServer({
        date: formData.prt,
        name: formData.name,
        dept: formData.dept,
        priority: formData.priority,
        mobile: formData.mobile,
        issueon: formData.location,
        description: formData.description,
        status: "Pending"
      }));

      setFormData({
        name: '',
        email: '',
        dept: 'Select',
        location: 'Select',
        description: '',
        count: 'Select',
        priority: 'Select',
        prt: '',
        mobile: '',
        fileInput: '',
      });
    } else {
      console.log('Form validation failed');
    }
  }
  
  return (
    <>
      <Container>
        <section style={{ backgroundColor: '#fffcfc', marginTop: '80px' }}>
          <div className="row align-items-center">
            <div className="col text-center">
              <h2>Report On Academic Issues</h2>
            </div>
          </div>
          <div className="content-box mt-5 py-8">
            <div className="container py-4">
              <Form onSubmit={handleSubmit}>
                <Row className='mb-3'>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="name" className="form-label text-start">First Name<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
                      <Form.Control type="text" id="name" name="name" value={formData.name} placeholder='Enter Full Name' onChange={handleChange} isInvalid={!!errors.name} />

                      <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="email" style={{ textAlign: 'start' }} className="form-label">Email Address<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
                      <Form.Control type="text" id="email" name="email" value={formData.email} placeholder='Ex: john987@gmail.com' onChange={handleChange} isInvalid={!!errors.email} />
                      <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="dept" className="form-label">Department<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="dept" name="dept" value={formData.dept} onChange={handleChange} isInvalid={!!errors.dept}>
                        <option>Select</option>
                        <option>CSE</option>
                        <option>Mechanical</option>
                        <option>Civil</option>
                        <option>EEE</option>
                        <option>ECE</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="location" className="form-label">Issue facing on<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="location" name="location" value={formData.location} onChange={handleChange} isInvalid={!!errors.location}>
                        <option>Select</option>
                        <option>Course material</option>
                        <option>Grade</option>
                        <option>Academic Facility</option>
                        <option>Others</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="description" className="form-label">Description<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control type="text" id="description" name="description" value={formData.description} placeholder='Describe in Detail' onChange={handleChange} isInvalid={!!errors.description} />
                      <Form.Control.Feedback type="invalid">{errors.description}</Form.Control.Feedback>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="count" className="form-label">People Involved<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="count" name="count" value={formData.count} onChange={handleChange} isInvalid={!!errors.count}>
                        <option>Select</option>
                        <option>Individual</option>
                        <option>Group</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.count}</Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="priority" className="form-label">Priority<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="priority" name="priority" value={formData.priority} onChange={handleChange} isInvalid={!!errors.priority}>
                        <option>Select</option>
                        <option>High</option>
                        <option>Medium</option>
                        <option>Low</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.priority}</Form.Control.Feedback>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="prt" className="form-label">Issue Date<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control type="date" id="prt" name="prt" value={formData.prt} onChange={handleChange} isInvalid={!!errors.prt} />
                      <Form.Control.Feedback type="invalid">{errors.prt}</Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>
                <Row className='mb-3'>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="mobile" className="form-label">Mobile Number<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Control type="tel" id="mobile" name="mobile" value={formData.mobile} placeholder='Enter Mobile Number' onChange={handleChange} isInvalid={!!errors.mobile} />
                      <Form.Control.Feedback type="invalid">{errors.mobile}</Form.Control.Feedback>
                    </div>
                  </Col>
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="fileInput" className="form-label">Attachments</Form.Label>
                      <Form.Control type="file" id="fileInput" name="fileInput" value={formData.fileInput} onChange={handleChange} />
                      <Form.Control.Feedback type="invalid">{errors.fileInput}</Form.Control.Feedback>
                    </div>
                  </Col>
                </Row>

                <div style={{ padding: '3rem' }}>
                  <Button variant='dark' type="submit" style={{ backgroundColor: 'black', color: 'white' }} >Submit</Button>
                </div>
              </Form>
            </div>
          </div>
        </section>
      </Container>

      <FormSubmitModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default AcademicReportForm;
