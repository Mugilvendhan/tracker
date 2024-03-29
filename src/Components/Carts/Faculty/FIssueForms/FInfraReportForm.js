import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
//import FormSubmitModal from '../../../Modals/FormSubmitModal';
import { useDispatch } from 'react-redux';
import { addIssueToServerFaculty } from '../../../../slices/FacultyIssueSlice';
import FFormSubmitModal from '../../../Modals/FFormSubmitModal';
//import { addIssueToServerFaculty } from '../../../../slices/FacultyIssueSlice';

function FacultyInfraReportForm() {




   
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
    /*   case 'name':
        error = value.trim() === '' ? 'First Name is required' : '';
        break; */
    /*   case 'email':
        error = value.trim() === '' ? 'Email Address is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'dept':
        error = value === 'Select' ? 'Department is required' : '';
        break; */
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
      dispatch(addIssueToServerFaculty({
        date: formData.prt,
        email:userData.email,
        name: userData.name,
        dept: userData.classdept,
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
            
              <h2>REPORT ON INFRASTRUCTURE ISSUES</h2>
            </div>
          </div>
          <div className="content-box mt-5 py-8">
            <div className="container py-4">
            <Form onSubmit={handleSubmit}>
            {
                        userData && (

                          <>
                 <Row className='mb-3'>
               
                               
               <Col>
                 <div className='text-start'>
                   <Form.Label htmlFor="name" className="form-label text-start">First Name<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
                 
                       <Form.Control type="text" id="name" name="name" value={userData.name} placeholder='Enter Full Name' onChange={handleChange} /* isInvalid={!!errors.name}  *//>
                       
                    
                 </div>
               </Col>
               <Col>
                 <div className='text-start'>
                   <Form.Label htmlFor="email" style={{ textAlign: 'start' }} className="form-label">Email Address<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>
                   <Form.Control type="text" id="email" name="email" value={userData.email} placeholder='Ex: john987@gmail.com' onChange={handleChange} /* isInvalid={!!errors.email}  *//>
                
                 </div>
               </Col>
               
                   

             </Row>
             <Row className='mb-3'>
               <Col>
                 <div className='text-start'>
                   <Form.Label htmlFor="dept" className="form-label">Department<span style={{ color: 'red' }}>*</span></Form.Label>
                   <Form.Select id="dept" name="dept" value={userData.classdept} onChange={handleChange} /* isInvalid={!!errors.dept} */>
                     <option>Select</option>
                     <option>CSE</option>
                     <option>Mechanical</option>
                     <option>Civil</option>
                     <option>EEE</option>
                     <option>ECE</option>
                   </Form.Select>
                 {/*   <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback> */}
                 </div>
               </Col>
               
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="location" className="form-label">Issue facing on<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="location" name="location" value={formData.location} onChange={handleChange} isInvalid={!!errors.location}>
                      <option>Select</option>
                          <option>Class room</option>
                          <option>Laboratory</option>
                          <option>Equipment</option>
                          <option>others</option> 
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
                </>
                        )}
              </Form>
            </div>
          </div>
        </section>
      </Container>

      <FFormSubmitModal showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default FacultyInfraReportForm;
