// import React, { useEffect, useState } from 'react'
// import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { setSelectedUserStud, updateUserStud, updateUserToServer } from '../../slices/StudentProfileSlice';

// function AddStudEditModal(props) {
//     const dispatch=useDispatch()

//     const {selectedUser} = useSelector((state)=> state.studentprofile)
    
//     const[name,setName]=useState('');
//     const[photo,setPhoto]=useState('');
//     const[email,setEmail]=useState('');
//     const[dept,setClassDept]=useState('');
//     const[phone,setMobile]=useState('');
//     const[role,setRole]=useState('');
//     const[address,setAddress]=useState('');            
//     const[password,setPassword]=useState('');
//     const[id,setId]=useState(0);

//    useEffect(()=>{
//     if (Object.keys(selectedUser).length !== 0) {
//       setId(setSelectedUserStud.id);
//         setName(setSelectedUserStud.name);
//         setEmail(setSelectedUserStud.email);
//         setClassDept(setSelectedUserStud.dept);
//         setMobile(setSelectedUserStud.phone);
//         setRole(setSelectedUserStud.role);
//         setAddress(setSelectedUserStud.address);
//         setPassword(setSelectedUserStud.password);
//         setPhoto(setSelectedUserStud.photo);

//     }
//    },[selectedUser]);
  
//     const [errors, setErrors] = useState({});
  
  

//     const editIssue = () => {
//         if (validateForm()) {
//           props.onHide();
//           dispatch(updateUserToServer({ id, name, email, dept, phone,photo,address,password }));
//         }
//       };



//       const validateForm=()=>{
//         const errors = {};
//       let isValid = true;
  
//       // Validate each field
//       if (!name.trim()) {
//         errors.name = 'Name is required';
//         isValid = false;
//       }
  
//       if (!email.trim()) {
//         errors.email = 'Email is required';
//         isValid = false;
//       } else if (!/\S+@\S+\.\S+/.test(email)) {
//         errors.email = 'Invalid email address';
//         isValid = false;              
//       }
  
//       if (!dept.trim()) {
//           errors.dept = 'Department is required';
//           isValid = false;
//         }
  
//       if (!phone.trim()) {
//         errors.phone = 'Phone Number is required';
//         isValid = false;
//       } else if (!/^\d{10}$/.test(phone)) {
//         errors.phone = 'Invalid phone number';
//         isValid = false;
//       }
  
//       if (!address.trim()) {
//         errors.address = 'Address is required';
//         isValid = false;
//       }
     
//       if (!photo) {
//           errors.photo = 'Photo is required';
//           isValid = false;
//         }
  
  
//       if (!role) {
//         errors.role = 'Role is required';
//         isValid = false;
//       }
  
//       if (!password.trim()) {
//         errors.password = 'Password is required';
//         isValid = false;
//       }
  
//       if (isValid) {
       
//         console.log('Form submitted successfully');
//       } else {
      
//         setErrors(errors);
//       }
//     };

 
  
      
  
//     return (
//       <div>
//         <Modal {...props}>
//           <Modal.Header closeButton>
//             <Modal.Title>User Details</Modal.Title>
//           </Modal.Header>
//           <ModalBody>
//             <Container>
//               <Form id="registration-form" className="p-3">
//                 <Form.Group className="mb-3" controlId="name">
//                   <Form.Label>Name<span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="text" name="name" value={name} onChange={(e)=>setName(e.target.value)} />
//                   <div className="error-message text-danger">{errors.name}</div>
//                 </Form.Group>
  
//                 <Form.Group className="mb-3" controlId="email">
//                   <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//                   <div className="error-message text-danger">{errors.email}</div>
//                 </Form.Group>
  
//                 <Form.Group className="mb-3" controlId="dept">
//                   {/* <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="text" name="dept" value={formData.dept} onChange={handleChange} />
//                   <div className="error-message text-danger">{errors.dept}</div> */}
//                    <Form.Label htmlFor="dept" className="form-label">Department<span style={{ color: 'red' }}>*</span></Form.Label>
//                         <Form.Select id="dept" name="dept" value={dept} onChange={(e)=>setClassDept(e.target.value)} isInvalid={!!errors.dept}>
//                         <option>Select</option>
//                           <option>CSE</option>
//                           <option>Mechanical </option>
//                           <option>Civil</option>
//                           <option>EEE</option>
//                           <option>ECE</option>
//                         </Form.Select>
//                         <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
//                 </Form.Group>
  
//                 <Form.Group className="mb-3" controlId="phone">
//                   <Form.Label>Phone Number <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="tel" name="phone" value={phone} onChange={(e)=>setMobile(e.target.value)} />
//                   <div className="error-message text-danger">{errors.phone}</div>
//                 </Form.Group>
  
//                 <Form.Group className="mb-3" controlId="address">
//                   <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control as="textarea" name="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
//                   <div className="error-message text-danger">{address}</div>
//                 </Form.Group>
  
//                 <Form.Group className="mb-3" controlId="photo">
//                   <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="file" name="photo" value={photo}  />
//                   <div className="error-message text-danger">{errors.photo}</div>
//                 </Form.Group>
  
//                {/*  <Form.Group className="mb-3" controlId="role">
//                   <Form.Label>Role <span className="star text-danger">*</span></Form.Label>
//                   <Form.Select name="role" value={role} onChange={(e)=>setRole(e.target.value)}>
//                     <option value="">Select Role</option>
//                     <option value="student">Student</option>
//                     <option value="staff">Staff</option>
//                     <option value="faculty">Faculty</option>
//                   </Form.Select>
//                   <div className="error-message text-danger">{errors.role}</div>
//                 </Form.Group> */}
  
//                 <Form.Group className="mb-3" controlId="password">
//                   <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
//                   <Form.Control type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
//                   <div className="error-message text-danger">{errors.password}</div>
//                 </Form.Group>
  
//                 <div className="d-flex align-items-center justify-content-center mb-4">
//                   <Button type="submit" className="btn log-btn" style={{ backgroundColor: '#1a1a1b', color: 'white' }} onClick={editIssue}>Update</Button>
//                 </div>
//               </Form>
//             </Container>
//           </ModalBody>
//         </Modal>
//       </div>
//     );
// }

// export default AddStudEditModal







/* 
   const dispatch=useDispatch()

    const {selectedUser} = useSelector((state)=> state.studentprofile)
    
    const[name,setName]=useState('');
    const[photo,setPhoto]=useState('');
    const[email,setEmail]=useState('');
    const[dept,setClassDept]=useState('');
    const[phone,setMobile]=useState('');
    const[role,setRole]=useState('');
    const[address,setAddress]=useState('');
    const[password,setPassword]=useState('');
    const[id,setId]=useState(0);

   useEffect(()=>{
    if (Object.keys(selectedUser).length !== 0) {
      setId(setSelectedUserStud.id);
        setName(setSelectedUserStud.name);
        setEmail(setSelectedUserStud.email);
        setClassDept(setSelectedUserStud.dept);
        setMobile(setSelectedUserStud.phone);
        setRole(setSelectedUserStud.role);
        setAddress(setSelectedUserStud.address);
        setPassword(setSelectedUserStud.password);
        setPhoto(setSelectedUserStud.photo);

    }
   },[selectedUser]);
  
    const [errors, setErrors] = useState({});
  
  

    const editIssue = () => {
        if (validateForm()) {
          props.onHide();
          dispatch(updateUserStud({ id, name, email, dept, phone,role,photo,address,password }));
        }
      };
*/







/* 
const dispatch=useDispatch()

    const {selectedUser} = useSelector((state)=> state.studentprofile)
    
    const[name,setName]=useState('');
    const[photo,setPhoto]=useState('');
    const[email,setEmail]=useState('');
    const[dept,setClassDept]=useState('');
    const[phone,setMobile]=useState('');
    const[role,setRole]=useState('');
    const[address,setAddress]=useState('');            
    const[password,setPassword]=useState('');
    const[id,setId]=useState(0);

   useEffect(()=>{
    if (Object.keys(selectedUser).length !== 0) {
      setId(setSelectedUserStud.id);
        setName(setSelectedUserStud.name);
        setEmail(setSelectedUserStud.email);
        setClassDept(setSelectedUserStud.dept);
        setMobile(setSelectedUserStud.phone);
        setRole(setSelectedUserStud.role);
        setAddress(setSelectedUserStud.address);
        setPassword(setSelectedUserStud.password);
        setPhoto(setSelectedUserStud.photo);

    }
   },[selectedUser]);
  
    const [errors, setErrors] = useState({});
  
  

    const editIssue = () => {
        if (validateForm()) {
          props.onHide();
          dispatch(updateUserToServer({ id, name, email, dept, phone,photo,address,password }));
        }
      };

*/





   
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
          <Modal.Title>User Details</Modal.Title>
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




// import React, { useEffect, useState } from 'react';
// import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserToServer } from '../../slices/StudentProfileSlice';

// function StudentAddFormModal(props) {
//   const [name, setName] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [email, setEmail] = useState('');
//   const [dept, setClassDept] = useState('');
//   const [phone, setMobile] = useState('');
//   const [role, setRole] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [id, setId] = useState(0);
//   const [errors, setErrors] = useState({});

//   const { selectedUser } = useSelector((state) => state.studentprofile);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (Object.keys(selectedUser).length !== 0) {
//       setId(selectedUser.id);
//       setName(selectedUser.name);
//       setEmail(selectedUser.email);
//       setClassDept(selectedUser.dept);
//       setMobile(selectedUser.phone);
//       setRole(selectedUser.role);
//       setAddress(selectedUser.address);
//       setPassword(selectedUser.password);
//       setPhoto(selectedUser.photo);
//     }
//   }, [selectedUser]);

//   const editIssue = () => {
//     const fieldErrors = {};
//     let isValid = true;

//     // Validate each field
//     if (!name.trim()) {
//       fieldErrors.name = 'Name is required';
//       isValid = false;
//     }
//     if (!email.trim()) {
//       fieldErrors.email = 'Email is required';
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       fieldErrors.email = 'Invalid email address';
//       isValid = false;
//     }
//     if (!dept.trim()) {
//       fieldErrors.dept = 'Department is required';
//       isValid = false;
//     }
//     if (!phone.trim()) {
//       fieldErrors.phone = 'Phone Number is required';
//       isValid = false;
//     } else if (!/^\d{10}$/.test(phone)) {
//       fieldErrors.phone = 'Invalid phone number';
//       isValid = false;
//     }
//     if (!address.trim()) {
//       fieldErrors.address = 'Address is required';
//       isValid = false;
//     }
//     if (!photo.trim()) {
//       fieldErrors.photo = 'Photo is required';
//       isValid = false;
//     }
//     if (!password.trim()) {
//       fieldErrors.password = 'Password is required';
//       isValid = false;
//     }

//     if (isValid) {
//       // If form is valid, submit the form
//       dispatch(updateUserToServer({ id, name, email, dept, phone, photo, address, password }));
//       props.onHide();
//     } else {
//       // If form is not valid, update the state with errors
//       setErrors(fieldErrors);
//     }
//   };

//   return (
//     <div>
//       <Modal {...props}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Details</Modal.Title>
//         </Modal.Header>
//         <ModalBody>
//           <Container>
//             <Form className="p-3">
//               <Form.Group className="mb-3" controlId="name">
//                 <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <div className="error-message text-danger">{errors.name}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="email">
//                 <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <div className="error-message text-danger">{errors.email}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="dept">
//                 <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
//                 <Form.Select name="dept" value={dept} onChange={(e) => setClassDept(e.target.value)} isInvalid={!!errors.dept}>
//                   <option>Select</option>
//                   <option>CSE</option>
//                   <option>Mechanical</option>
//                   <option>Civil</option>
//                   <option>EEE</option>
//                   <option>ECE</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="phone">
//                 <Form.Label>Phone Number <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="tel" name="phone" value={phone} onChange={(e) => setMobile(e.target.value)} />
//                 <div className="error-message text-danger">{errors.phone}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="address">
//                 <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control as="textarea" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                 <div className="error-message text-danger">{errors.address}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="photo">
//                 <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="url" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} isInvalid={!!errors.photo} />
//                 <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <div className="error-message text-danger">{errors.password}</div>
//               </Form.Group>

//               <div className="d-flex align-items-center justify-content-center mb-4">
//                 <Button variant="dark" className="btn log-btn" onClick={editIssue} style={{ backgroundColor: '#1a1a1b', color: 'white' }}>Update</Button>
//               </div>
//             </Form>
//           </Container>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// export default StudentAddFormModal;



// import React, { useState } from 'react';
// import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateUserToServer } from '../../slices/StudentProfileSlice';

// function StudentAddFormModal(props) {
//   const [name, setName] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [email, setEmail] = useState('');
//   const [dept, setClassDept] = useState('');
//   const [phone, setMobile] = useState('');
//   const [role, setRole] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [id, setId] = useState(0);

//   const { selectedUser } = useSelector((state) => state.studentprofile);
//   const dispatch = useDispatch();

//   const validateForm = () => {
//     const validateForm = (formData) => {
//       const errors = {};
    
//       // Validation logic here
    
//       return errors;
//     };

//     if (!name.trim()) {
//       errors.name = 'Name is required';
//     }

//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!dept) {
//       errors.dept = 'Department is required';
//     }

//     if (!phone.trim()) {
//       errors.phone = 'Phone Number is required';
//     } else if (!/^\d{10}$/.test(phone)) {
//       errors.phone = 'Invalid phone number';
//     }

//     if (!address.trim()) {
//       errors.address = 'Address is required';
//     }

//     if (!photo.trim()) {
//       errors.photo = 'Photo is required';
//     }

//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     return errors;
//   };

//   const handleSubmit = () => {
//     const errors = validateForm();

//     if (Object.keys(errors).length === 0) {
//       props.onHide();
//       dispatch(updateUserToServer({ id, name, email, dept, phone, photo, address, password }));
//     }
//   };

//   return (
//     <div>
//       <Modal {...props}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Details</Modal.Title>
//         </Modal.Header>
//         <ModalBody>
//           <Container>
//             <Form className="p-3">
//               <Form.Group className="mb-3" controlId="name">
//                 <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <div className="error-message text-danger">{errors.name}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="email">
//                 <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <div className="error-message text-danger">{errors.email}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="dept">
//                 <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
//                 <Form.Select name="dept" value={dept} onChange={(e) => setClassDept(e.target.value)} isInvalid={!!errors.dept}>
//                   <option>Select</option>
//                   <option>CSE</option>
//                   <option>Mechanical</option>
//                   <option>Civil</option>
//                   <option>EEE</option>
//                   <option>ECE</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="phone">
//                 <Form.Label>Phone Number <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="tel" name="phone" value={phone} onChange={(e) => setMobile(e.target.value)} />
//                 <div className="error-message text-danger">{errors.phone}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="address">
//                 <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control as="textarea" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                 <div className="error-message text-danger">{errors.address}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="photo">
//                 <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="url" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} isInvalid={!!errors.photo} />
//                 <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <div className="error-message text-danger">{errors.password}</div>
//               </Form.Group>

//               <div className="d-flex align-items-center justify-content-center mb-4">
//                 <Button variant="dark" className="btn log-btn" onClick={handleSubmit} style={{ backgroundColor: '#1a1a1b', color: 'white' }}>Update</Button>
//               </div>
//             </Form>
//           </Container>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// export default StudentAddFormModal;



// import React, { useState } from 'react';
// import { Button, Container, Form, Modal, ModalBody } from 'react-bootstrap';
// import { useDispatch } from 'react-redux';
// import { updateUserToServer } from '../../slices/StudentProfileSlice';

// function StudentAddFormModal(props) {
//   const [name, setName] = useState('');
//   const [photo, setPhoto] = useState('');
//   const [email, setEmail] = useState('');
//   const [dept, setClassDept] = useState('');
//   const [phone, setMobile] = useState('');
//   const [address, setAddress] = useState('');
//   const [password, setPassword] = useState('');
//   const [errors, setErrors] = useState({});

//   const dispatch = useDispatch();

//   const validateForm = () => {
//     const errors = {};

//     if (!name.trim()) {
//       errors.name = 'Name is required';
//     }

//     if (!email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = 'Invalid email address';
//     }

//     if (!dept) {
//       errors.dept = 'Department is required';
//     }

//     if (!phone.trim()) {
//       errors.phone = 'Phone Number is required';
//     } else if (!/^\d{10}$/.test(phone)) {
//       errors.phone = 'Invalid phone number';
//     }

//     if (!address.trim()) {
//       errors.address = 'Address is required';
//     }

//     if (!photo.trim()) {
//       errors.photo = 'Photo is required';
//     }

//     if (!password.trim()) {
//       errors.password = 'Password is required';
//     }

//     setErrors(errors);
//     return errors;
//   };

//   const handleSubmit = () => {
//       props.onHide();
//       dispatch(updateUserToServer({ name, email, dept, phone, photo, address, password }));

//   };

//   return (
//     <div>
//       <Modal {...props}>
//         <Modal.Header closeButton>
//           <Modal.Title>User Details</Modal.Title>
//         </Modal.Header>
//         <ModalBody>
//           <Container>
//             <Form className="p-3">
//               <Form.Group className="mb-3" controlId="name">
//                 <Form.Label>Name <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <div className="error-message text-danger">{errors.name}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="email">
//                 <Form.Label>Email <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//                 <div className="error-message text-danger">{errors.email}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="dept">
//                 <Form.Label>Department <span className="star text-danger">*</span></Form.Label>
//                 <Form.Select name="dept" value={dept} onChange={(e) => setClassDept(e.target.value)} isInvalid={!!errors.dept}>
//                   <option>Select</option>
//                   <option>CSE</option>
//                   <option>Mechanical</option>
//                   <option>Civil</option>
//                   <option>EEE</option>
//                   <option>ECE</option>
//                 </Form.Select>
//                 <Form.Control.Feedback type="invalid">{errors.dept}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="phone">
//                 <Form.Label>Phone Number <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="tel" name="phone" value={phone} onChange={(e) => setMobile(e.target.value)} />
//                 <div className="error-message text-danger">{errors.phone}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="address">
//                 <Form.Label>Address <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control as="textarea" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
//                 <div className="error-message text-danger">{errors.address}</div>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="photo">
//                 <Form.Label>Photo <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="url" name="photo" value={photo} onChange={(e) => setPhoto(e.target.value)} isInvalid={!!errors.photo} />
//                 <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
//               </Form.Group>

//               <Form.Group className="mb-3" controlId="password">
//                 <Form.Label>Password <span className="star text-danger">*</span></Form.Label>
//                 <Form.Control type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//                 <div className="error-message text-danger">{errors.password}</div>
//               </Form.Group>

//               <div className="d-flex align-items-center justify-content-center mb-4">
//                 <Button variant="dark" className="btn log-btn" onClick={handleSubmit} style={{ backgroundColor: '#1a1a1b', color: 'white' }}>Update</Button>
//               </div>
//             </Form>
//           </Container>
//         </ModalBody>
//       </Modal>
//     </div>
//   );
// }

// export default StudentAddFormModal;
