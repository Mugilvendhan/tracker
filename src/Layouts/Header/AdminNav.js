
import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function AdminNav() {



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


  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };


  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <div className="container-fluid">

          {
            userData && (
              <Navbar.Brand href="#" className='pe-4 px-4'>College Issue Tracker <span> Hello, {userData.name}</span></Navbar.Brand>
            )
          }
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
            <Nav.Link as={Link} to="/admindashboard" className="text-white pe-3">Dashboard</Nav.Link>
              <Nav.Link as={Link} to="/adduserstudent" className="text-white pe-3">User Management</Nav.Link>
              
             {/*  <NavDropdown title="Add Users" id="basic-nav-dropdown" style={{color:'white', }}>
              <NavDropdown.Item variant='dark' as={Link} to='/adduserstudent'>Student</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/staffcomplaintfaculty'>Faculty</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/staffcomplaintfaculty'>Staff</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link as={Link} to="/adminprofile" className="text-white pe-3">Profile</Nav.Link>
              
            </Nav>
            <Button variant="light" className='mx-3' onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <LogoutModal show={showModal} onHide={()=> setShowModal(false)} />

       {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleCloseModal}>No</Button>
          <Button variant='dark' as={Link} to='/'>Yes</Button>
        </Modal.Footer>
      </Modal>  */}
    </>
  );
}

export default AdminNav;
