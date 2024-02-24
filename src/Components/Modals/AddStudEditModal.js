import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
//import { addUserToServer, getUserFromServer } from '../../../../slices/StudentProfileSlice';
import { updateUserToServer } from '../../slices/StudentProfileSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';



function StudentAddFormModal(props) {



  
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

  const[name,setName]=useState('');
  const[photo,setPhoto]=useState('');
  const[email,setEmail]=useState('');
  const[classdept,setClassDept]=useState('');
  const[mobile,setMobile]=useState('');
  const[role,setRole]=useState('');
  const[address,setAddress]=useState('');            
  const[password,setPassword]=useState('');
  const[id,setId]=useState(0);

  const {selectedUser} = useSelector((state)=> state.studentprofile)
  const dispatch = useDispatch();

  useEffect(()=>{
    if (Object.keys(selectedUser).length !== 0) {
      setId(selectedUser.id);
        setName(selectedUser.name);
        setEmail(selectedUser.email);
        setClassDept(selectedUser.classdept);
        setMobile(selectedUser.mobile);
        setRole(selectedUser.role);
        setAddress(selectedUser.address);
        setPassword(selectedUser.password);
        setPhoto(selectedUser.photo);

    }
   },[selectedUser]);

   const editIssue = () => {
        props.onHide();
      dispatch(updateUserToServer({ id,role,name, email, classdept, mobile,photo,address,password }));
  
  };



 

  const [errors] = useState({}); 

  function validateField(fieldName, value) {
    let error = '';

    switch (fieldName) {
      case 'name':
        error = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        error = value.trim() === '' ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
      case 'dept':
        error = value === '' ? 'Department is required' : '';
        break;
      case 'phone':
        error = value.trim() === '' ? 'Phone Number is required' : !/^\d{10}$/.test(value) ? 'Invalid phone number' : '';
        break;
      case 'address':
        error = value.trim() === '' ? 'Address is required' : '';
        break;
      case 'photo':
        error = !value ? 'Photo is required' : '';
        break;
       case 'role':
        error = value === '' ? 'Role is required' : '';
        break; 
      case 'password':
        error = value.trim() === '' ? 'Password is required' : '';
        break;
      default:
        break;
    }

    return error;
  }

  


  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>UPDATE DETAIL</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Container>
            <Form className="p-3">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
                <Form.Control type="text" name="name" value={name}  onChange={(e)=>setName(e.target.value)} />
                <div className="error-message text-danger">{errors.name}</div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
    <Form.Control type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <div className="error-message text-danger">{errors.email}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="password">
      <Form.Label>Password</Form.Label>
      <div className="input-group">
        <Form.Control 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          value={password} 
          onChange={(e)=>setPassword(e.target.value)}
          //onBlur={validatePassword} 
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

<Form.Group className="mb-3" controlId="dept">
    <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
    <Form.Select name="dept" value={classdept} onChange={(e)=>setClassDept(e.target.value)} isInvalid={!!errors.dept}>
        <option>Select</option>
        <option>CSE</option>
        <option>Mechanical</option>                       
        <option>Civil</option>
        <option>EEE</option>
        <option>ECE</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
</Form.Group>

<Form.Group className="mb-3" controlId="phone">
    <Form.Label>Phone Number <span className="star text-danger">*</span></Form.Label>
    <Form.Control type="tel" name="phone" value={mobile} onChange={(e)=>setMobile(e.target.value)} />
    <div className="error-message text-danger">{errors.phone}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="address">
    <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
    <Form.Control as="textarea" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
    <div className="error-message text-danger">{errors.address}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
                <Form.Control type="url" name="photo" value={photo} onChange={(e)=>setPhoto(e.target.value)} isInvalid={!!errors.photo} />
                <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
              </Form.Group>


 <Form.Group className="mb-3" controlId="role">
    <Form.Label>Role <span className="star text-danger">*</span></Form.Label>
    <Form.Select name="role" value={role} onChange={(e)=>setRole(e.target.value)} isInvalid={!!errors.role}>
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Staff">Staff</option>
        <option value="Faculty">Faculty</option>
        <option value="Admin">Admin</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
</Form.Group> 

{/* <Form.Group className="mb-3" controlId="password">
    <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
    <Form.Control type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <div className="error-message text-danger">{errors.password}</div>
</Form.Group> */}


              <div className="d-flex align-items-center justify-content-center mb-4">
                <Button  variant="dark" className="btn log-btn" onClick={editIssue} style={{ backgroundColor: '#1a1a1b', color: 'white' }}>Update</Button>
              </div>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default StudentAddFormModal;
