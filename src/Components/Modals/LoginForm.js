import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


const LoginForm = () => {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };





  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  
  });


/*   const [showModal, setShowModal] = useState(false);

  const Hintdata = () => {
    setShowModal(true);
  } */
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = () => {
    const email = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      hideError('email');
      return true;
    } else {
      displayError('email', 'Invalid email address.');
      return false;
    }
  };

  const validatePassword = () => {
    const password = formData.password.trim();
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (passwordRegex.test(password)) {
      hideError('password');
      return true;
    } else {
      displayError('password', 'Password must be 8 characters with at least one alphabet, one number, and one special character.');
      return false;
    }
  };

  const [credentials, setCredentials] = useState({}); // State to store fetched credentials
  const [loggedInUserId, setLoggedInUserId] = useState(null);

  useEffect(() => {
    // Fetch credentials from JSON server
    fetch('http://localhost:5000/studentprofile')
      .then(response => response.json())
      .then(data => setCredentials(data))
      .catch(error => console.error('Error fetching credentials:', error));
    },[]
    );






//   /* const handleSubmit = (e) => {
//     e.preventDefault();
//     // const emailValid = validateEmail();
//     // const passwordValid = validatePassword();

//    /*  if (emailValid && passwordValid) {
//       const userEmail = formData.email.trim();
//       const userPassword = formData.password.trim();

//       // Perform authentication
//       if (userEmail === 'stud1@gmail.com' && userPassword === 'Student@123') {
        
//        window.location.href="/studentprofile";
//       } else if (userEmail === 'faculty@gmail.com' && userPassword === 'Faculty@123') {
//         window.location.href = "/facultyprofile";
//       } else if (userEmail === 'staff1@gmail.com' && userPassword === 'Staff@123') {
//         window.location.href = "/staffprofile";
//       } else if (userEmail === 'admin1@gmail.com' && userPassword === 'Admin@123') {
//         window.location.href = "/adminprofile";
//       } else {
//         alert(`Try with the following credentials:
// - Student email: stud1@gmail.com, password: Student@123
// - Faculty email: faculty@gmail.com, password: Faculty@123
// - Admin email: admin1@gmail.com, password: Admin@123
// - Staff email: staff1@gmail.com, password: Staff@123`);

//       }
//     }  */
//     if (Object.keys(errors).length === 0) {
//       // Validation successful, show success modal
//       const foundCredential = credentials.find(
//         credential => credential.email === formData.email && credential.password === formData.password
//       );
  
//       if (foundCredential) {
//         console.log(foundCredential.id);
//         setLoggedInUserId(foundCredential.id);
//         localStorage.setItem('loggedInUserId', foundCredential.id);
//         // setShowSuccessModal(true);
//         setFormData({
//           email: '',
//           password: ''
//         });
//       }
    
//     else {
//       console.log('Form validation failed');
//     }
//   };
// } */

      
const handleSubmit = (e) => {
  if(validateEmail){
  e.preventDefault();
 
    const foundCredential = credentials.find(
      credential => credential.email === formData.email && credential.password === formData.password
    );

    if (foundCredential) {
      console.log(foundCredential.id);
      console.log(foundCredential.name);
      console.log(foundCredential.email);
      console.log(foundCredential.role);
      console.log(foundCredential.year);
      console.log(foundCredential.classdept);
      setLoggedInUserId(foundCredential.id);
      localStorage.setItem('loggedInUserId', foundCredential.id);
      localStorage.setItem('loggedEmail', foundCredential.email);
      localStorage.setItem('loggedName', foundCredential.name);
      localStorage.setItem('loggedYear', foundCredential.year);
      localStorage.setItem('loggedDept', foundCredential.classdept);
      // Clear form data after successful login
      if(foundCredential.role==="admin"){
        window.location.href="/adminprofile";
      }
      else  if(foundCredential.role==="Student"){
        window.location.href="/studentprofile";
      }
      else if(foundCredential.role==="Staff"){
        window.location.href="/staffprofile";
      }
      else if(foundCredential.role==="Faculty"){
        window.location.href="/facultyprofile";
      }
      setFormData({
        email: '',
        password: ''
      });
    } else {
      
      alert('User Doesnot exist - Please Enter valid Email and Password');
      console.log('Invalid credentials');
    }

  }
 
};


  const displayError = (fieldName, message) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: message
    }));
  };

  const hideError = (fieldName) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: ''
    }));
  };

  return (
    <>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          onBlur={validateEmail} 
          placeholder="Enter email" 
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}
      </Form.Group>
     {/*  <Form.Group className="mb-3" controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control 
          type="password" 
          name="password" 
          value={formData.password}     
          onChange={handleChange} 
          onBlur={validatePassword} 
          placeholder="Enter password" 
        />
        {errors.password && <div className="text-danger">{errors.password}</div>}
      </Form.Group> */}

<Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <div className="input-group">
        <Form.Control 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          onBlur={validatePassword} 
          placeholder="Enter password" 
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
      {errors.password && <div className="text-danger">{errors.password}</div>}
    </Form.Group>

    <Row> 
      <Col> <button type="submit" className="btn" style={{backgroundColor:'black', alignItems:'center', color:'white'}}>Submit</button></Col>
      <Col className='ml-3 text-end'> 
  {/*     <NavLink onClick={() => Hintdata()}><p>Hint</p></NavLink> */}
    </Col>
     </Row>
    </Form>

   
   {/*  <HintData show={showModal} onHide={() => setShowModal(false)} />  */}
    </>
  );
};

export default LoginForm;

