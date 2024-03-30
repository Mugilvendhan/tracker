
import React, { useEffect, useState } from 'react';
import { Form, Button, Row, Col, Container } from 'react-bootstrap';
import FormSubmitModal from '../Modals/FormSubmitModal';
import { useDispatch } from 'react-redux';
import { addIssueToServer } from '../../slices/IssueSlice';

function AcademicReportForm() {



  const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);                               //useState to maintain state
  useEffect(() => {                                                                         //useEffect hook sets up an action to be performed after every render.
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInUserId');           //get data from localstorage
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);                                     //if valid , the id set to  setLoggedInUserId
    }
  }, []);                                                                                 //empty dependency
     

  useEffect(() => {                                                                // json , api , local storage - value reteival 
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
  }, [loggedInUserId]);                                                                // if loggedinuserid changes , it will render the code again , and maintain state.


  const dispatch = useDispatch();                                                  // It allows components to dispatch actions to the Redux store- according to the reducers usage(add update )

  const [formData, setFormData] = useState({
    name: '',                                                                       //'formData' state variable is initialized with an object that contains various fields 
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
    let error = '';                                                                // This variable will be used to store any validation error message.

    switch (fieldName) {
      case 'location':
        error = value === 'Select' ? 'Issue facing on is required' : '';            //the user hasn't selected a valid option (presumably from a dropdown menu), so an error message is assigned to the error variable.
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
          const currentDate = new Date();                                                 //The Date object represents a date and time. It allows you to work with dates and times in JavaScript.
          const enteredDate = new Date(value);                                            //parse value of date to entereddate , 
          error = value.trim() === '' ? 'Issue Date is required' :                         // if date is empty 
                  enteredDate.getTime() > currentDate.getTime() ? 'Issue Date cannot be a future date' :          //if entered date is > cur. date
                  enteredDate.getTime() < currentDate.getTime() ? '' :                                             //The getTime() method of the Date object ,It essentially returns a timestamp representing the date and time of the Date object.
                  '';
         /*  setErrors({ ...errors, prt: error }); */
          break;
        
      case 'mobile':
        error = value.trim() === '' ? 'Mobile Number is required' : !/^[6789]\d{9}$/.test(value) ? 'Invalid mobile number' : ''; //\d is a special character sequence called a metacharacter, which is used to match any digit character.
        break;
      default:
        break;
    }

    return error;
  }

  function handleChange(e) {                                               // the event object triggered by the change event 
    const { name, value } = e.target;                                      // uses destructuring assignment to extract the name and value properties from the target property of the event object (e).
    const error = validateField(name, value); 

    setFormData(prevData => ({                                             //updates the form data state (formData) using the setFormData function provided by React's useState hook.
      ...prevData,                                                         //It uses the spread operator (...) to create a copy of the previous form data (prevData) and then updates the value of the field corresponding to the name extracted from the event target.
      [name]: value,
    }));
                                                                          // the handleChange function is responsible for handling input changes in the form. It extracts the field name and value from the event object, validates the value using the validateField function, and updates both the form data and error states accordingly.
    setErrors(prevErrors => ({
      ...prevErrors,
      [name]: error,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};                                                        //initializes an empty object newErrors.{object.keys-formdata ,object.values}
    Object.keys(formData).forEach(fieldName => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);      //array objects, 
    });

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every(error => error === '');         //checks -  every error message is an empty string ('')
    if (isValid) {
      console.log('Form submitted successfully');
      setShowModal(true);
      dispatch(addIssueToServer({                                                //used to dispatch actions to the Redux store.
        date: formData.prt,
        email: userData.email,
        name: userData.name,
        dept: userData.classdept,
        priority: formData.priority,
        mobile: formData.mobile,
        issueon: formData.location,
        description: formData.description,
        status: "Pending",
        year:userData.year
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
              <h2>REPORT ON ACADEMIC ISSUE</h2>
            </div>
          </div>
          <div className="content-box mt-5 py-8">                   {/* margin-top , padding y-axis */}
            <div className="container py-4">
              <Form onSubmit={handleSubmit}>
              {
                        userData && (                               //conditional rendering

                          <>
              <Row className='mb-3'>
          
                           
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="name" className="form-label text-start">First Name<span style={{ color: 'red', textAlign: 'start' }}>*</span></Form.Label>    {/* In HTML, the for attribute specifies which form element a <label> element is bound to. However, in React with JSX, for is a reserved keyword used for loop constructs, so it's not used in JSX. */}
                    
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
                   {/*    <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback> */}
                    </div>
                  </Col>
               
                  <Col>
                    <div className='text-start'>
                      <Form.Label htmlFor="location" className="form-label">Issue facing on<span style={{ color: 'red' }}>*</span></Form.Label>
                      <Form.Select id="location" name="location" value={formData.location} onChange={handleChange} isInvalid={!!errors.location}>    {/*  If errors.location is a non-empty string - true, else false */}   {/*  to dynamically manage the validation state of a form field based on the presence of errors. */}
                        <option>Select</option>                                                                                                       {/* !! - is used to convert the truthiness of errors.location to a boolean value */}
                        <option>Course material</option>
                        <option>Grade</option>
                        <option>Academic Facility</option>
                        <option>Others</option>
                      </Form.Select>
                      <Form.Control.Feedback type="invalid">{errors.location}</Form.Control.Feedback>           {/* provide feedback for form controls, particularly in the context of form validation. */}
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
                  <Button 
                  variant='dark' 
                  type="submit" 
                  style={{ backgroundColor: 'black', color: 'white' }} >Submit
                  </Button>
                </div>
                </>
                        )}
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
