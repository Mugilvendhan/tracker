import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

function AInfo() {



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
    <div>
       {userData && (
        <Container className='table-responsive'>
    <div className="card-body" style={{border:'1px solid black', borderRadius:'5px' , backgroundColor:'white' ,textAlign: 'left' , padding: '1rem'}}>
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Full Name</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">{userData.name}</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Email</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">{userData.email}</p>
      </div>
    </div>
    <hr />
    {/* <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Class/Dept</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">IV-CSE</p>
      </div>
    </div>
    <hr /> */}
    <div className="row">
        <div className="col-sm-3">
          <p className="mb-0">Role</p>
        </div>
        <div className="col-sm-9">
          <p className="text-muted mb-0">{userData.role}</p>
        </div>
      </div>
      <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Mobile</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">{userData.mobile}</p>
      </div>
    </div>
    <hr />
    <div className="row">
      <div className="col-sm-3">
        <p className="mb-0">Address</p>
      </div>
      <div className="col-sm-9">
        <p className="text-muted mb-0">{userData.address}</p>
      </div>
    </div>
  </div>
  </Container>
       )}
    </div>
  )
}

export default AInfo