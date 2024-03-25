import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import LogoutModal from '../../Components/Modals/LogoutModal';

function Studentnav() {

  const [userData, setUserData] = useState(null);
  const [loggedInUserId, setLoggedInUserId] = useState(null);                                     // to maintain the state
  useEffect(() => {                                                                               //fetch data
    // Retrieve loggedInUserId from local storage when the component mounts
    const loggedInUserIdFromLocalStorage = localStorage.getItem('loggedInUserId');                //2action set , get.
    if (loggedInUserIdFromLocalStorage) {
      setLoggedInUserId(loggedInUserIdFromLocalStorage);
    }
  }, []);
     

  useEffect(() => {                                                                                      //The useEffect hook sets up an action to be performed after every render.
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
        .then(data => {                                                                   // .then- promise api call, data as parameter  
          // Handle the fetched data as needed  
          setUserData(data);                                                             //fetched data is updated to setUserData, with help of useState hook userData is updated
          console.log(data);
        })
        .catch(error => {
          console.error('Error fetching user details:', error);
        });
    }
  }, [loggedInUserId]);                                                                  //The second argument, [loggedInUserId], lists the variables this action depends on. If any of these variables change, the action will run again.



  const [showModal, setShowModal] = useState(false);

  const handleLogout = () => {
    setShowModal(true);
  };

  return (
    <>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="top">
      {userData && (                                                                                                                  // conditional renedering , if userData exsit, it displays name .. if true it move to code inside bracket else wont move.
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
    </>
  );
}

export default Studentnav;
