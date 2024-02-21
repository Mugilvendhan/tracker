
import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function StaffNav() {


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
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">

        {
          userData && (
                   
            <Navbar.Brand href="#" className='pe-4 px-4'>College Issue Tracker <span>Hello, {userData.name}</span></Navbar.Brand>
          )
        }
        
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto" style={{ '--bs-scroll-height': '100px' }}>
            {/* <Nav.Link className="text-white px-3" as={Link} to='/staffcomplaint'>Complaints</Nav.Link> */}
            <NavDropdown title="Complaints" id="basic-nav-dropdown" style={{color:'white', }}>
              <NavDropdown.Item variant='dark' as={Link} to='/staffcomplaint'>Student</NavDropdown.Item>
              <NavDropdown.Item as={Link} to='/staffcomplaintfaculty'>Faculty</NavDropdown.Item>
              </NavDropdown>


            <Nav.Link className="text-white px-3"  as={Link} to='/staffprofile'>Profile</Nav.Link>
            
          </Nav>
          <Button variant="light" className="mx-3" onClick={handleLogout}>Logout</Button>
         
        </Navbar.Collapse>
      </Navbar>

      <LogoutModal show={showModal} onHide={() => setShowModal(false)}/>

      {/* <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to logout?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='dark' onClick={handleCloseModal}>No</Button>
          <Button variant='dark' as={Link} to='/'>Yes</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default StaffNav;
