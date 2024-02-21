import React, { useEffect, useState } from 'react'
import StaffInfo from './StaffInfo'
import staffphoto from '../../../../Assets/img/staff.jpg'
import { Container } from 'react-bootstrap'
function StaffMain() {


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
         <section style={{ backgroundColor: '#fffcfc', marginTop: '80px' }}>
    <div className="container align-items-center ">
      <div className="col text-center">
        <h2>My Profile</h2>
      </div>
    </div>
    <Container>
    <div className="content-box mt-5 py-3">
<div className="container py-4" >
 <div className="row">
 {userData && (
    <div className="col-lg-4">
    
      <div className="card-body text-center" >
        
        <img style={{ backgroundSize:'cover',  width: '260px', height:'21rem', borderRadius:'0.8rem' }} src={userData.photo} alt="avatar" className="rounded img-fluid" />
      </div>

      <p className='text-content-center my-3' style={{fontWeight:'10'}} ><h6> <span style={{color:'gray'}}> {userData.role}</span> </h6></p>
      <br />
    </div>
 )}
    <div className="col-lg-8">
      <div className="row">
        <div className="col-md- mb-5">
          <StaffInfo />
        </div>
      
       {/*  <div className="col-md-12 mb-5">
          <StudentIssueStatus />
        </div> */}
      </div>
    </div>
  </div>
</div>
</div>
    </Container>
    </section>
    </div>
  )
}

export default StaffMain




/* background-size: 'cover',
      background-position:' 25% 62%'
      width: '100%'
      height: '20rem'
      border-radius:' 0.8rem' */