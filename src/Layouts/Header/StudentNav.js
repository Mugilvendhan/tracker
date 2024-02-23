import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function Studentnav() {

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
      {userData && (
        <Navbar.Brand as={Link} to="#" className="pe-4 px-4">College Issue Tracker <span> Hello, {userData.name}</span></Navbar.Brand>
      )}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto mb-2 mb-lg-0" style={{ '--bs-scroll-height': '100px' }}>
            <Nav.Link as={Link} to="/myissues" className="text-white pe-3">Track</Nav.Link>
            <Nav.Link as={Link} to="/createissue" className="text-white pe-3">Raise Issues</Nav.Link>
            <Nav.Link as={Link} to="/tasktable" className="text-white pe-3">Task</Nav.Link>
            <Nav.Link as={Link} to="/studentprofile" className="text-white pe-3">Profile</Nav.Link>
          </Nav>
          <Button className="btn mx-3" variant='light' style={{ backgroundColor: 'rgb(243, 232, 232)', color: 'rgb(17, 16, 16)' }} onClick={handleLogout}>Logout</Button>
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
          <Button variant="dark" onClick={handleCloseModal}>No</Button>
          <Button as={Link} to="/" variant="dark">Yes</Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}

export default Studentnav;
