import React, { useEffect, useState } from 'react';
import { Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function Facultynav() {

  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };


  
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



  return (
    <>

      <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
        <div className="container-fluid">
        {userData && (
          <Navbar.Brand href="#" className='pe-4 px-4'>College Issue Tracker <span>Hello, {userData.name}</span></Navbar.Brand>
        )}
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/fmyissues" className="text-white pe-3">Track</Nav.Link>
              <Nav.Link as={Link} to="/fraiseissues" className="text-white pe-3">Raise Issue</Nav.Link>
              <Nav.Link as={Link} to="/ftasks" className="text-white pe-3">Task</Nav.Link>
              <Nav.Link as={Link} to="/facultyprofile" className="text-white pe-3">Profile</Nav.Link>
              
            </Nav>
            <Button variant="light" className='mx-3' onClick={handleLogout}>Logout</Button>
          </Navbar.Collapse>
        </div>
      </Navbar>

      <LogoutModal show={showModal} onHide={() => setShowModal(false)}/>
    </>
  );
}

export default Facultynav;
