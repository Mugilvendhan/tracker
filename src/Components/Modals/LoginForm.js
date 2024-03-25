import React, { useEffect, useState } from 'react';
import {  Form } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



const LoginForm = () => {


  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);     //if true make it false viseverse 
  };

  const [formData, setFormData] = useState({     //an object with two properties  , setformdata - if we want to change the data in formData , usestate- a way to add state variables to functional components in React
    email: '',                                      
    password: ''                                   // The setFormData function allows us to update this state whenever the user types something into the form fields.
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({               //id = name and value  . data destructuring to new name and value.
      ...prevData,
      [name]: value
    }));
  };

  const validateEmail = () => {
    const email = formData.email.trim();                                    // removes the extra space
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;   //regex validation   {2,}from 2 to endless letter

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
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%*?&]{8,}$/;   // ensuring it has at least one alphabet, one number, one special character, and is at least 8 characters long.
                                                                                           //It's a non-capturing group because it uses (?= ... )   It allows you to apply special operations or assertions to a part of the regular expression without including it in the final match result.
    if (passwordRegex.test(password)) {
      hideError('password');
      return true;
    } else {
      displayError('password', 'Password must be 8 characters with at least one alphabet, one number, and one special character.');
      return false;
    }
  };


  const displayError = (fieldName, message) => {   // This function updates the state to display an error message for a specific field.
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: message        
    }));
  };

  const hideError = (fieldName) => {
    setErrors(prevErrors => ({
      ...prevErrors,
      [fieldName]: ''             // This function updates the state to hide an error message for a specific field.
    }));
  };


  const [credentials, setCredentials] = useState({});           // State to store fetched credentials ....
   // useState is a React Hook that allows functional components to manage state. it lets to add state to functional components.
  const [loggedInUserId, setLoggedInUserId] = useState(null);   //curremt value - loggedIn Id , function to update value - setLoggedInId

  useEffect(() => {                                               // useEffect - that allows functional components to perform side effects
    // Fetch credentials from JSON server                        //This function will be executed after every render of the component.
    fetch('http://localhost:5000/studentprofile')                //The fetch function is used to make an HTTP request to the specified URL to fetch data.
      .then(response => response.json())
      .then(data => setCredentials(data))
      .catch(error => console.error('Error fetching credentials:', error));
    },[]                                                                               //the empty dependency array indicates that the effect should only run once after the component mounts. This is commonly used for fetching initial data when the component is first rendered.
    );

      
const handleSubmit = (e) => {
  if(validateEmail){
  e.preventDefault();                                                       //to prevent the default behavior of the form submission
 
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
      console.log(loggedInUserId);
      localStorage.setItem('loggedEmail', foundCredential.email);                             //local storage(Persistent Storage)(store data in key-value pair -{getItem & setItem}) is used to store locally within react components , insted for fetching data frm JSON each time ... session storage can be used but when user close the windows the data is gone , unlike local storage.
      localStorage.setItem('loggedName', foundCredential.name);
      localStorage.setItem('loggedYear', foundCredential.year);
      localStorage.setItem('loggedDept', foundCredential.classdept);
      // Clear form data after successful login
      if(foundCredential.role==="admin"){
        window.location.href="/adminprofile";
      }
      else  if(foundCredential.role==="Student"){
        window.location.href="/studentprofile";                                               //object that contains information about the current URL of the page.
      }
      else if(foundCredential.role==="Staff"){
        window.location.href="/staffprofile";
      }
      else if(foundCredential.role==="Faculty"){
        window.location.href="/facultyprofile";
      }
        setFormData({                                                                            //each initialized with an empty string 
        email: '',                                                                             // used to reset the form fields by setting both the email and password fields to empty strings. It's commonly used after form submission or when the user wants to clear the form.
        password: ''
      });    
    } else {
      
      alert('User Doesnot exist - Please Enter valid Email and Password');
      console.log('Invalid credentials');
    }

  }
 
};



  return (
    <>

    <Form onSubmit={handleSubmit}>                                       
      <Form.Group className="mb-3" controlId="email">              {/*  mb-margin bottom */}
        <Form.Label>Email</Form.Label>
        <Form.Control 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          onBlur={validateEmail} 
          placeholder="Enter email" 
        />
        {errors.email && <div className="text-danger">{errors.email}</div>}              {/*  this line of code conditionally renders an error message in a <div> element with a red text color if there is an error associated with the email field */}
      </Form.Group>

<Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <div className="input-group">
        <Form.Control 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
          onBlur={validatePassword}                                      /* This event occurs when an element loses focus. */
          placeholder="Enter password" 
        />
        <button 
          className="btn btn-outline-secondary" 
          type="button" 
          onClick={togglePasswordVisibility}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}                      {/* eye slash - text , eye- password , set func changes the current state */}
        </button>
      </div>
      {errors.password && <div className="text-danger">{errors.password}</div>}
    </Form.Group>

    <button type="submit" className="btn" style={{backgroundColor:'black', alignItems:'center', color:'white'}}>Submit</button>
   
    </Form>
    </>
  );
};

export default LoginForm;
