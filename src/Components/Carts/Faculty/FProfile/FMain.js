import React from 'react'
import { Container } from 'react-bootstrap'
import  facultyphoto from '../../../../Assets/img/faculty.jpg'
import FInfo from './FInfo'
function FMain() {
  return (
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
    <div className="col-lg-4">
      <div className="card-body text-center">
        <img src={facultyphoto} alt="avatar" className="rounded img-fluid" style={{ width: '170px' }} />
        
      </div>
      <p className='text-content-center my-3' style={{fontWeight:'10'}} ><h6> <span style={{color:'gray'}}> Faculty Tanishka</span> </h6></p>
      <br />
    </div>
    <div className="col-lg-8">
      <div className="row">
        <div className="col-md- mb-5">
          <FInfo />
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
  )
}

export default FMain