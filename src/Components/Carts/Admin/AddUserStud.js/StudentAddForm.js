import React, {  useState } from 'react';
import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addUserToServer } from '../../../../slices/StudentProfileSlice';
import { FaEye, FaEyeSlash } from 'react-icons/fa';


function StudentAddFormModal(props) {
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prevState => !prevState);
  };

 

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    year: '',
    dept: '',
    phone: '',
    address: '',
    role: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  function validateField(fieldName, value) {
    let error = '';

    switch (fieldName) {
      case 'name':
        error = value.trim() === '' ? 'Name is required' : '';
        break;
      case 'email':
        error = value.trim() === '' ? 'Email is required' : !/\S+@\S+\.\S+/.test(value) ? 'Invalid email address' : '';
        break;
       case 'year':
        error = value === '' ? 'Year is required' : '';
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      newErrors[fieldName] = validateField(fieldName, formData[fieldName]);
    });

    setErrors(newErrors);

    const isValid = Object.values(newErrors).every((error) => error === '');

    if (isValid) {
      console.log('Form submitted successfully');
      dispatch(
        addUserToServer({
          name: formData.name,
          email: formData.email,
          year: formData.year,
          classdept: formData.dept,
          mobile: formData.phone,
          role: formData.role,
          address: formData.address,
          password: formData.password,
          photo: formData.photo
        })
      );

      props.onHide();
      setFormData({
        name: '',
        email: '',
        year: '',
        dept: '',
        phone: '',
        address: '',
        role: '',
        password: '',
        photo:'',
      });

      alert(`${formData.name} is being added to the database.`);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton>
          <Modal.Title>ENTER USER DETAILS</Modal.Title>
        </Modal.Header>
        <ModalBody>
          <Container>
            <Form onSubmit={handleSubmit} id="registration-form" className="p-3">
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} />
                <div className="error-message text-danger">{errors.name}</div>
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
    <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
    <div className="error-message text-danger">{errors.email}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="password">
      <Form.Label>Password<span className="star text-danger">*</span></Form.Label>
      <div className="input-group">
        <Form.Control 
          type={showPassword ? 'text' : 'password'} 
          name="password" 
          value={formData.password} 
          onChange={handleChange} 
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
<Form.Group className="mb-3" controlId="year">
    <Form.Label>Year  <span className="star text-danger">*</span> </Form.Label>
    <Form.Select name="year" value={formData.year} onChange={handleChange}  isInvalid={!!errors.year} >
        <option>Select</option>
        <option>I</option>
        <option>II</option>
        <option>III</option>
        <option>IV</option>
        <option>Entire</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errors.year}</Form.Control.Feedback> 
</Form.Group>

<Form.Group className="mb-3" controlId="dept">
    <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
    <Form.Select name="dept" value={formData.dept} onChange={handleChange} isInvalid={!!errors.dept}>
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
    <Form.Control type="tel" name="phone" value={formData.phone} onChange={handleChange} />
    <div className="error-message text-danger">{errors.phone}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="address">
    <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
    <Form.Control as="textarea" name="address" value={formData.address} onChange={handleChange} />
    <div className="error-message text-danger">{errors.address}</div>
</Form.Group>

<Form.Group className="mb-3" controlId="photo">
                <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
                <Form.Control type="url" name="photo" value={formData.photo} onChange={handleChange} isInvalid={!!errors.photo} />
                <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
              </Form.Group>


 <Form.Group className="mb-3" controlId="role">
    <Form.Label>Role <span className="star text-danger">*</span></Form.Label>
    <Form.Select name="role" value={formData.role} onChange={handleChange} isInvalid={!!errors.role}>
        <option value="">Select Role</option>
        <option value="Student">Student</option>
        <option value="Staff">Staff</option>
        <option value="Faculty">Faculty</option>
        <option value="Admin">Admin</option>
    </Form.Select>
    <Form.Control.Feedback type="invalid">{errors.role}</Form.Control.Feedback>
</Form.Group> 




              <div className="d-flex align-items-center justify-content-center mb-4">
                <Button type="submit" variant="dark" className="btn log-btn" style={{ backgroundColor: '#1a1a1b', color: 'white' }}>Register</Button>
              </div>
            </Form>
          </Container>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default StudentAddFormModal;


